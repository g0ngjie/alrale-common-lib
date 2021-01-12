const gulp = require("gulp");
const uglify = require("gulp-uglify");
const del = require("del");

gulp.task("rmrf", () => del("dist"));

gulp.task("compile", () =>
  gulp.src("dist/**/*.js").pipe(uglify()).pipe(gulp.dest("lib"))
);

gulp.task("default", gulp.series(["compile", "rmrf"]));


/**
 * 时间戳显示为多少分钟前，多少天前的处理
 * eg.
 * console.log(dateDiff(1411111111111));  // 2014年09月19日
 * console.log(dateDiff(1481111111111));  // 9月前
 * console.log(dateDiff(1499911111111));  // 2月前
 * console.log(dateDiff(1503211111111));  // 3周前
 * console.log(dateDiff(1505283100802));  // 1分钟前
 *
 * @export
 * @param {(string | number)} timestamp
 * @returns
 */
export function dateDiff(timestamp: string | number) {
  // 补全为13位
  let arrTimestamp: string[] = (timestamp + '').split('');
  for (let start = 0; start < 13; start++) {
    if (!arrTimestamp[start]) {
      arrTimestamp[start] = '0';
    }
  }
  timestamp = +arrTimestamp.join('');

  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let month = day * 30;
  let now = new Date().getTime();
  let diffValue = now - timestamp;

  // 如果本地时间反而小于变量时间
  if (diffValue < 0) {
    return '不久前';
  }

  // 计算差异时间的量级
  let monthC: number = diffValue / month;
  let weekC: number = diffValue / (7 * day);
  let dayC: number = diffValue / day;
  let hourC: number = diffValue / hour;
  let minC: number = diffValue / minute;

  // 数值补0方法
  let zero = function (value: number) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  };

  // 使用
  if (monthC > 12) {
    // 超过1年，直接显示年月日
    return (function () {
      let date = new Date(timestamp);
      return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
    })();
  } else if (monthC >= 1) {
    return parseInt(monthC + '') + "月前";
  } else if (weekC >= 1) {
    return parseInt(weekC + '') + "周前";
  } else if (dayC >= 1) {
    return parseInt(dayC + '') + "天前";
  } else if (hourC >= 1) {
    return parseInt(hourC + '') + "小时前";
  } else if (minC >= 1) {
    return parseInt(minC + '') + "分钟前";
  }
  return '刚刚';
};

/**
 * 
 * number -> arr -> string
 *
 * @export
 * @param {number} day
 * @returns
 */
export function week(day: number): string {
  if (day > 7) return ''
  return ['周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日'][day]
}
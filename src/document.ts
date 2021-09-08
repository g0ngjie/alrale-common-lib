
/**
 * 实现复制功能
 * @param {string} value 文本 
 */
export function copyValue(value: string): void {
    const _inp: HTMLInputElement = document.createElement('input');
    _inp.value = value;
    _inp.style.cssText = 'opacity: 0';
    document.body.appendChild(_inp);
    _inp.select();
    if (document.execCommand("copy")) document.execCommand("copy");
    document.body.removeChild(_inp);
}

type TypeBehavior = 'contextmenu' | 'selectstart' | 'copy'

/**
 * 禁止浏览器行为 选择|复制|...
 * @param {TypeBehavior} types 行为
 */
export function disableBehavior(types: TypeBehavior[]): void {
    types.forEach(function (ev: TypeBehavior) {
        document.addEventListener(ev, function (e: MouseEvent | Event | ClipboardEvent) {
            e.preventDefault();
            e.returnValue = false;
        })
    });
}

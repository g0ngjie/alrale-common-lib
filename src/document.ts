
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
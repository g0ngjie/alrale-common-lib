/**
 * 桌面通知
 * @param {string} title
 * @param {NotificationOptions} options
 * @param {Notification} events
 * @example ```
 * desktopNotification("@alrale/common-lib", {
 *  body: "您正在使用自定义组件库"
 * }, {
 *  onclick(e) {
 *    e.target.close();
 *    window.focus();
 *  }
 * })
 * ```
 */
export declare function desktopNotification(title: string, options?: NotificationOptions, events?: Notification): void;

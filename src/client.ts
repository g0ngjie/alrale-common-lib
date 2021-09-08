function doNotify(title: string, options?: NotificationOptions, events?: Notification) {
    const notification: Notification = new Notification(title, options);
    for (let event in events) {
        if (typeof event === 'function')
            notification[event] = events[event];
    }
}

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
export function desktopNotification(title: string, options?: NotificationOptions, events?: Notification) {

    if (!("Notification" in window)) throw new Error('This browser does not support desktop notification')

    else if (Notification.permission === "granted") {
        doNotify(title, options, events);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                doNotify(title, options, events);
            }
        });
    }
}

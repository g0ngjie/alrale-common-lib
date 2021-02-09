export declare class ArrayQueue {
    private arr;
    private maxLength;
    /**
     * @param {number} len 最大数据存储量
     */
    constructor(len?: number);
    /**
     * 入队
     * @param target
     */
    push(target: any): boolean;
    /**出队 */
    pop(): any;
    /**队首 */
    getFront(): any;
    /**队尾 */
    getRear(): any;
    clear(): void;
    size(): number;
    _getAll(): any[];
}
export declare class LinkedQueue {
    private length;
    private front;
    private rear;
    push(ele: any): boolean;
    pop(): any;
    size(): number;
    getFront(): any;
    getRear(): any;
    toString(): string;
    clear(): boolean;
}

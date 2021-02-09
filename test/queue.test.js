import { ArrayQueue, LinkedQueue } from "../lib/queue";

describe("队列", () => {

    it("ArrayQueue", () => {
        const queue = new ArrayQueue();
        const pop = queue.pop()
        expect(pop).toBeUndefined()
        queue.push({ a: 1 })
        const size = queue.size();
        expect(size).toBe(1);
        const front = queue.getFront();
        expect(front).toEqual({ a: 1 });
    })

    it("LinkedQueue", () => {
        const myQueue = new LinkedQueue();
        myQueue.push(1)
        myQueue.push(2)
        myQueue.push(3)
        myQueue.push(4)
        const str1 = myQueue.toString()
        expect(str1.trim()).toBe('1 2 3 4')
        const pop = myQueue.pop()
        expect(pop.ele).toBe(1)
        const str2 = myQueue.toString()
        expect(str2.trim()).toBe('2 3 4')
    })
})
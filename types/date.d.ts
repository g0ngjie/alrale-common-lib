declare type FotmatTsResponse = {
    year: number;
    month: number;
    day: number;
    hour: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    fullMonth: string;
    fullDay: string;
    fullHour: string;
    fullMinutes: string;
    fullSeconds: string;
    getYMD(separate?: string): string;
    getYYYYMMDD(separate?: string): string;
};
/**
 * 格式化时间戳
 * @param {string|number} timestamp
 */
export declare function formatTs(timestamp: string | number): FotmatTsResponse;
export {};

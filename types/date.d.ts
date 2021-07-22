declare type FotmatTsResponse = {
    year: number;
    month: number;
    day: number;
    week: number;
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
declare type RelativeTimeKey = 's' | 'ss' | 'm' | 'mm' | 'h' | 'hh' | 'd' | 'dd' | 'M' | 'MM' | 'yy' | 'yyyy';
declare type CombinationYear = 'yyyy-MM' | 'yyyy-MM-dd' | 'yyyy-MM-dd hh' | 'yyyy-MM-dd hh:mm' | 'yyyy-MM-dd hh:mm:ss';
declare type CombinationMonth = 'MM-dd' | 'MM-dd hh' | 'MM-dd hh:mm' | 'MM-dd hh:mm:ss';
declare type CombinationDay = 'dd hh' | 'dd hh:mm' | 'dd hh:mm:ss';
declare type CombinationHour = 'hh:mm' | 'hh:mm:ss';
declare type CombinationMinute = 'mm:ss';
declare type IFormatDate = RelativeTimeKey | CombinationYear | CombinationMonth | CombinationDay | CombinationHour | CombinationMinute;
/**
 * 格式化时间
 * @param {IFormatDate} fmt
 * @param {Date} date
 * @returns
 */
export declare function formatDate(date: Date, fmt: IFormatDate): string;
export {};

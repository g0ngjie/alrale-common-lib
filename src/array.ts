
/**
 * 
 * @param key 
 * @param arr 
 */
export function arrayToObject(key: string, arr: any[] = []) {
    const mapping: any = {};
    arr.forEach((item: any) => {
        if (item[key]) {
            mapping[item[key]] = item
        }
    })
    return mapping
}
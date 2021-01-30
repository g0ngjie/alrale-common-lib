export { appendJs } from './appendjs';
export { deepClone, deepOClone } from './deep.clone';
export { copyValue } from './document';
export { parseQuery, decodeUrlSearch } from './parse-query';
export { queryToString } from './query.to.string';
export { typeIs } from './type.is';
export { toSimplifiedChinese } from './to.simplified.chinese';
export { get, getSync, post, postSync } from './request';
export { setStore, getStore, setOStore, getOStore, removeStore } from './store';
export { sleep, sleepSync } from './sleep';
export { dateDiff, week } from './time.axis';
export { execInterval, autoStopInterval, Schedule } from './schedule';
export { randomInt, randomDistinctIntArray, randomDistinctRangeArray, isNumber } from './number';
export { getKernel, isChrome, isEdge, isFirefox, isIE, isOpera, isSafari } from './browser';
export { randomString, nameDesensitization, desensitization } from './string';
export { arrayToObject } from './array';
export { sortMapByKey, objectToVArray, mapToVArray } from './object';
export * as Enum from "./enum/index";

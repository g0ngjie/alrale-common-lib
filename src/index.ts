
export { appendJs, appendBodyJs, appendJsSync, appendBodyJsSync } from './appendjs'

export { deepClone, deepOClone } from './deep.clone'

export { copyValue } from './document'

export { parseQuery, decodeUrlSearch } from './parse.query'

export { queryToString } from './query.to.string'

export { typeIs } from './type.is'

export { toSimplifiedChinese } from './to.simplified.chinese'

export { setStore, getStore, setOStore, getOStore, removeStore } from './store'

export { sleep, sleepSync } from './sleep'

export { dateDiff, week } from './time.axis'

export { execInterval, autoStopInterval, Schedule } from './schedule'

export {
    randomInt,
    randomDistinctIntArray,
    randomDistinctRangeArray,
    prefixZero,
    isNumber,
    isInt,
    isFloat,
} from './number'

export { getKernel, isChrome, isEdge, isFirefox, isIE, isOpera, isSafari } from './browser'

export {
    randomString,
    nameDesensitization,
    desensitization,
    positionOfStringIndexes,
    uniqueId,
    guid,
    uuid,
    guid2,
    uuid2,
    stringExtension
} from './string'

export { arrayToObject, arrayMove, arrayMoveMutate } from './array'

export { sortMapByKey, mapToVArray, objectToArray, makeMap } from './object'

export { globalStore, getGlobal, setGlobal, removeGlobalItem } from './window'

export { ArrayQueue, LinkedQueue } from './queue'

export * as env from './env'

export { log } from './console'

export * as color from './color'

export * as date from './date'

export * as Enum from "./enum/index";

export * as regular from './regular';

export * as byte from './byte';

export * as object from './object';

// 综合
export * as Complex from './complex'
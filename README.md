# @alrale/common-lib

- common functions
- small tool

## Installing
```javascript
$ yarn add @alrale/common-lib
```

## Functions

- <a href="#appendjs">appendjs</a>
- <a href="#array">array</a>
  - <a href="#arrayToObject">arrayToObject</a>
- <a href="#browser">browser</a>
  - <a href="#browserIs">isSafari</a>
  - <a href="#browserIs">isChrome</a>
  - <a href="#browserIs">isFirefox</a>
  - <a href="#browserIs">isOpera</a>
  - <a href="#browserIs">isEdge</a>
  - <a href="#browserIs">isIE</a>
- <a href="#byte">byte</a>
  - <a href="#byte-format">format</a>
- <a href="#console">console</a>
  - <a href="#skipAll">skipAll</a>
  - <a href="#skip">skip</a>
  - <a href="#skipAllBy">skipAllBy</a>
  - <a href="#skipBy">skipBy</a>
  - <a href="#collectAll">collectAll</a>
  - <a href="#collect">collect</a>
  - <a href="#onlyAll">onlyAll</a>
  - <a href="#only">only</a>
- <a href="#date">date</a>
  - <a href="#date.formatTs">formatTs</a>
- <a href="#deep.clone">deep.clone</a>
  - <a href="#deep.clone">deepClone</a>
  - <a href="#deep.clone">deepOClone</a>
- <a href="#document">document</a>
  - <a href="#copyValue">copyValue</a>
- <a href="#env">env</a>
  - <a href="#env">isBrowser</a>
  - <a href="#env">UA</a>
  - <a href="#env">isIE</a>
  - <a href="#env">isIE9</a>
  - <a href="#env">isEdge</a>
  - <a href="#env">isAndroid</a>
  - <a href="#env">isIos</a>
  - <a href="#env">isChrome</a>
  - <a href="#env">isFF</a>
- <a href="#filter">filter</a>
- <a href="#number">number</a>
  - <a href="#number.randomInt">randomInt</a>
  - <a href="#number.randomDistinctIntArray">randomDistinctIntArray</a>
  - <a href="#number.randomDistinctRangeArray">randomDistinctRangeArray</a>
  - <a href="#prefixZero">prefixZero</a>
  - <a href="#number.isNumber">isNumber</a>
  - <a href="#number.isInt">isInt</a>
  - <a href="#number.isFloat">isFloat</a>
- <a href="#object">object</a>
  - <a href="#object.sortMapByKey">sortMapByKey</a>
  - <a href="#object.mapToVArray">mapToVArray</a>
  - <a href="#object.objectToArray">objectToArray</a>
  - <a href="#object.makeMap">makeMap</a>
- <a href="#parse.query">parse.query</a>
  - <a href="#parseQuery">parseQuery</a>
  - <a href="#decodeUrlSearch">decodeUrlSearch</a>
- <a href="#query.to.string">query.to.string</a>
- <a href="#queue">queue</a>
  - <a href="#ArrayQueue">ArrayQueue</a>
  - <a href="#LinkedQueue">LinkedQueue</a>
- <a href="#regular">regular</a>
- <a href="#schedule">schedule</a>
- <a href="#sleep">sleep</a>
- <a href="#store">store</a>
- <a href="#string">string</a>
- <a href="#time.axis">time.axis</a>
- <a href="#to.simplified.chinese">to.simplified.chinese</a>
- <a href="#type.is">type.is</a>
- <a href="#window">window</a>

------

### <a id="appendjs">appendjs</a>

###### 动态加载 `script`

```javascript
appendJs('http://code.jquery.com/jquery-migrate-1.2.1.min.js', function() {
    console.log('jquery success')
})
```

### <span id="array">array</span>

###### <a id="arrayToObject">arrayToObject</a>

```javascript
const arr = [{ id: 1, test: 123 }, { id: 2, test: 345 }]
const obj = arrayToObject('id', arr) // => { '1': { id: 1, test: 123 }, '2': { id: 2, test: 345 } }
```

### <span id="browser">browser</span>

###### <a id="getKernel">getKernel</a> 获取浏览器内核

```javascript
const kernel = getKernel(); // => 'IE7'|'IE8'|'IE9'|'IE10'|'IE11'|'IE'|'Opera'|'Edge'|'FF'|'Safari'|'Chrome'|'None'
```

###### <a id="browserIs">isSafari, isChrome, isFirefox, isOpera, isEdge, isIE</a>

```javascript
const { isSafari, isChrome, isFirefox, isOpera, isEdge, isIE } = require('@alrale/common-lib');
isSafari 	// => boolean
isChrome 	// => boolean
isFirefox 	// => boolean
isOpera 	// => boolean
isEdge 		// => boolean
isIE 		// => boolean
```

### <span id="byte">byte</span>

###### <a id="byte-format">format</a> 字节转换

```javascript
const { byte } = require('@alrale/common-lib');
// from byte to kb
const b2kb = byte.format(2048).Byte.toKB(); // => 2
// from mb to bit
byte.format(...).MB.toBit()
// from ... to ...
```

### <span id="console">console</span> 

###### 日志过滤器

```javascript
const { log } = require('@alrale/common-lib');
// type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';
```

###### <a id=skipAll>skipAll</a> 全部禁用

```javascript
log.skipAll()
console.log('---这个信息不会输出----');
```

###### <a id=skip>skip</a> level级别禁用

```javascript
log.skip(['log'])
console.log('---这个信息不会输出---')
console.info('---这个信息会输出---')
```

###### <a id=skipAllBy>skipAllBy</a> 条件禁用

```javascript
log.skipAllBy({ startWitch: '[d' })
console.log('这个信息会输出')
console.log('[debug]这个信息不输出-> ', 123);
```

###### <a id=skipBy>skipBy</a> level级别禁用|条件过滤

```javascript
log.skipBy(['log'], { endWitch: 'foo' })
console.log('[debug]这个会log1-> ', 123);
console.log('这个信息不会输出foo')
console.log('[debug]这个会log2-> ', 123);
```

###### <a id=collectAll>collectAll</a> 收集

```javascript
log.collectAll({
    prefix: '1', callback: (args) => {
        console.info('----->', args);
    }
})
console.log('[debug]123-> ', 123);
console.log('1这个是', { a: 1 }, '测试')
```

###### <a id=collect>collect</a> level级别收集|条件过滤

```javascript
log.collect('log', {
    prefix: '1', callback: (args) => {
        console.info('收集------>', args)
    }
})
console.log('[debug]不会被收集-> ', 123);
console.log('这个会被收集', { a: 1 }, '测试')
```

###### <a id=onlyAll>onlyAll</a> 只展示[prefix]相关

```javascript
log.onlyAll({ startWitch: '[debug]' })
console.log('[debug]这个会输出-> ', 123);
console.log('这个不会输出')
console.info('[debug]这个也会输出-> ', true);
```

###### <a id=only>only</a> level级别只展示[prefix]相关

```javascript
log.only('info', { startWitch: '[debug]' })
console.info('[debug]这个会输出-> ', 123);
console.info('测试测试')
console.log('这个也输出')
```



### <span id="date">date</span>

###### <a id=date.formatTs>formatTs</a> 格式化时间戳

```javascript
const { date } = require('@alrale/common-lib');
// 2021年1月2日3时4分5秒 = 1609527845
const { 
    year, 	// 2021
    month, 	// 1
    day, 	// 2
    hour, 	// 3
    minutes,// 4
    seconds // 5
} = formatTs(1609527845)
// 2009年10月12日13时44分55秒 = 1255326295
const { 
    fullMonth, 	// '10'
    fullDay, 	// '12'
    fullHour, 	// '13'
    fullMinutes,// '44'
    fullSeconds	// '55'
} = formatTs(1255326295000)

const ymd = formatTs(1609527845).getYMD(); // => '2021-1-2 3:4:5'
const fullYmd = formatTs(1609527845).getYYYYMMDD('/', '/'); // => '2021/01/02 03/04/05'
```

### <span id="deep.clone">deep.clone</span>

###### deepClone, deepOClone 深复制

```javascript
const { deepClone, deepOClone } = require('@alrale/common-lib');
// object -> string -> object
const foo1 = { a: 1, b: 2 };
const foo_copy1 = deepClone(foo1); // foo_copy1 !== foo1
// object deep clone -> other object
const foo2 = [{ a: 1, b: 2 }];
const foo_copy2 = deepOClone(foo2); // foo_copy2 !== foo2
```

### <span id="document">document</span>

###### <a id=copyValue>copyValue</a> 复制功能

```javascript
const { copyValue } = require('@alrale/common-lib');
copyValue(value: string /**浏览器需要复制的文本 */): void;
```

### <span id="env">env</span>

###### 客户端环境

```javascript
const { 
    isBrowser,	// 判断是否是浏览器访问 => boolean
    UA,			// userAgent => any
    isIE,		//  => boolean
    isIE9,		// => boolean
    isEdge,		// => boolean
    isAndroid,	// => boolean
    isIos,		// => boolean
    isChrome,	// => boolean
    isFF,		// => boolean
} = require('@alrale/common-lib');
```

### <span id="filter">filter</span>

```javascript

```

### <span id="number">number</span>

```javascript
const { 
    randomInt,
    randomDistinctIntArray,
    randomDistinctRangeArray,
    isNumber,
    isFloat,
    prefixZero,
    isInt
} = require('@alrale/common-lib');
```



###### <a id=number.randomInt>randomInt</a> 随机区间整数

```javascript
const num = randomInt() // default max = 10
num <= 10; // => true
num >= 0;  // => true
const num1 = randomInt(10, 5)
num <= 10  // => true
num >= 5   // => true
```

###### <a id=number.randomDistinctIntArray>randomDistinctIntArray</a> 随机获取整数列表

```javascript
const list = randomDistinctIntArray(10)
list.includes(6); // => true
// 默认[0]
const defaultList = randomDistinctIntArray()
// defaultList equal [0]
```

###### <a id=number.randomDistinctRangeArray>randomDistinctRangeArray</a>

###### 随机区间唯一整数的列表

###### 随机获取固定长度len的数组

###### 最小出现值fromMin

###### 最大出现值toMax

```javascript
// 默认[0~10]
const defaultList = randomDistinctRangeArray()
expect(defaultList.length).toBe(1)

const list = randomDistinctRangeArray(10, 5, 6)
for (let i = 0; i < list.length; i++) {
    const item = list[i];
    expect([5, 6, 7, 8, 9, 10].includes(item)).toBe(true)
    if (i === list.length - 1) done()
}
```

###### <a id=number.prefixZero> prefixZero</a> 整数前置补零

```javascript
prefixZero(2);		// => '02'
prefixZero(20);		// => '20'
prefixZero(20, 3);	// => '020'
prefixZero();		// => ''
prefixZero(2.21);	// => ''
prefixZero(true);	// => ''
prefixZero(20, 6);	// => '000020'
prefixZero(-20);	// => ''
```

###### <a id=number.isNumber>isNumber</a> 判断数字类型,(包含字符串类型数字)

```javascript
isNumber('one');	// => false
isNumber('2');		// => true
isNumber(() => { });// => false
isNumber(1.23);		// => true
isNumber(true); 	// => false
```

###### <a id=number.isInt>isInt</a> 严格校验正负正数

```javascript
isInt(122); 	// => true
isInt(-122); 	// => true
isInt(true); 	// => false
isInt('032'); 	// => true
isInt([]); 		// => false
```

###### <a id=number.isFloat>isFloat</a> 判断是否位float格式

```javascript
isFloat('1'); 			// => false
isFloat('1.2'); 		// => true
isFloat([1.1, 2.2]); 	// => false
isFloat(2.334); 		// => true
```

### <span id="object">object</span>

```javascript
const { sortMapByKey, mapToVArray, objectToArray, makeMap } = require('@alrale/common-lib');
```



###### <a id=object.sortMapByKey>sortMapByKey</a> 对象key排序

```javascript
const object = { 12: { a: 1 }, 4: 4, '7': true, 1: 'haha' };
const resObj = sortMapByKey(object, false); // resObj[12] => { a: 1 }

const map = new Map();
map.set(12, { a: 1 }).set(4, 4).set(7, true).set(1, 'haha');
const resMap = sortMapByKey(map); // resMap.get(1) => 'haha'
```

###### <a id=object.mapToVArray>mapToVArray</a> Map to value数组

```javascript
const map = new Map();
map.set('a', 1).set('b', null).set('c', [1, 2]).set('d', true);
const arr = mapToVArray(map); // arr.includes(true) === true
```

###### <a id=object.objectToArray>objectToArray</a> 对象to 对象数组

```javascript
const obj = { a: 1, b: null, c: [1, 2], d: { val: 'haha' } };
const objArr = objectToArray(obj); // objArr[0].a === 1

const map = new Map();
map.set('a', 1).set('b', null).set('c', [1, 2]).set('d', true);
const mapArr = objectToArray(map); // mapArr.length === map.size
```

###### <a id=object.makeMap>makeMap</a> Make a map and return a function for checking if a key

```javascript
const acceptValue = makeMap('input,textarea,option,select,progress');
const acceptValue2 = makeMap('input,textarea,option,select,progress', true);
const bool = acceptValue('input');	// => true
const bool2 = acceptValue2('INPUT');// => true
```



### <span id="parse.query">parse.query</span>

```javascript
const { parseQuery, decodeUrlSearch } = require('@alrale/common-lib');
```



###### <a id=parseQuery>parseQuery</a> 格式化url参数

```javascript
const url = "https://www.gaodeditu.com?areaName=%E5%8C%97%E4%BA%AC&xml=test";
const params = parseQuery(url); // => { areaName: "北京", xml: "test" }
```

###### <a id=decodeUrlSearch>decodeUrlSearch</a> window.location.search 解码

```javascript
const search = "?areaName=%E5%8C%97%E4%BA%AC&xml=test=";
const params = decodeUrlSearch(search); // => { areaName: "北京", xml: "test=" }
```



### <span id="query.to.string">query.to.string</span>

###### object -> ?xxx=xxx&xxx=xxx

```javascript
const { queryToString } = require('@alrale/common-lib');
const params = queryToString({ a: 1, b: "foo", c: "汉" }); // => ?a=1&b=foo&c=%E6%B1%89
```

### <span id="queue">queue</span>

```javascript
const { ArrayQueue, LinkedQueue } = require('@alrale/common-lib');
```

##### <a id=ArrayQueue>ArrayQueue</a> 集合队列

```javascript
const queue = new ArrayQueue();
const pop = queue.pop()
expect(pop).toBeUndefined()
queue.push({ a: 1 })
queue.size(); // => 1
queue.getFront(); // => { a: 1 }
```

<a id=LinkedQueue>LinkedQueue</a> 链表队列

```javascript
const myQueue = new LinkedQueue();
myQueue.push(1)
myQueue.push(2)
myQueue.push(3)
myQueue.push(4)
const str1 = myQueue.toString()
str1.trim(); // => '1 2 3 4'
const pop = myQueue.pop()
pop.ele; // => 1
const str2 = myQueue.toString();
str2.trim(); // => '2 3 4'
```



### <span id="regular">regular</span>

```javascript

```

### <span id="schedule">schedule</span>

```javascript

```

### <span id="sleep">sleep</span>

```javascript

```

### <span id="store">store</span>

```javascript

```

### <span id="string">string</span>

```javascript

```

### <span id="time.axis">time.axis</span>

```javascript

```

### <span id="to.simplified.chinese">to.simplified.chinese</span>

```javascript

```

### <span id="type.is">type.is</span>

```javascript

```

### <span id="window">window</span>

```javascript

```



## License
[The ISC License](./LICENSE)
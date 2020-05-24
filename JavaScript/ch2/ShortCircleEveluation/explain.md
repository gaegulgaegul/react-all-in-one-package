## 단축 평가 논리 계산법

```JavaScript
true && true // true
true && false // false
true || false // true
true || true // true
```

- 조건부 계산
    - and 연산자 : 특정 값이 유효할 때만 어떤 값을 조회해야 하는 상황에 사용
```JavaScript
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' & 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ""
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1
```

    - or 연산자 : 어떤 값이 없을 때 첫번째 값 대신에 두번째 값 사용
```JavaScript
console.log(false || 'hello'); // hello
console.log('' || '이름없다'); // 이름없다
console.log(null || '널이다~'); // 널이다~
console.log(undefined || 'defined 되지 않았다.'); // defined 되지 않았다.
console.log(0 || '제로다'); // 제로다

console.log(1 || '음?'); // 1
console.log(true || '여기 안본다.'); // true
console.log('와아' || '여기 안봐요'); // 와아
console.log([] || '노노'); // []
```
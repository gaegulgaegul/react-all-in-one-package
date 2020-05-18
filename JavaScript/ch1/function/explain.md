## Function
- ES6 : ECMAScript 6(ES2015)
    - 자바스크립트가 업데이트 되는 버전
    - 매년 업데이트 되고 있다.

- Template Literal
```JavaScript
function hello(name) {
    return 'Hello ${name}!';
}
```

- 화살표 함수
    - 화살표 함수에서 'this'와 그냥 함수에서의 'this'는 다른 개념이다.
```JavaScript
const hello = (name) => {
    console.log(`Hello, ${name}!`);
}

const add = (a, b) => a + b;
```
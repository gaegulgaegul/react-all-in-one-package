## scope

- scope : 변수 또는 함수를 선언하게 될때 어느 범위까지 적용이 가능한지 확인한다.
    - Global : 전역에서 사용 가능하다.
```JavaScript
const value = 'hello';

function myFunction() {
    console.log('myFunction: ');
    console.log(value);
}

function otherFunction() {
    console.log('otherFunction: ');
    const value = 'bye!';
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);
```

    - Function : 특정 함수 내부에서만 사용이 가능하다.
```JavaScript
const value = 'hello!';

function myFunction() {
    const value = 'bye!';
    const anotherValue = 'world';
    function functionInside() {
        console.log('functionInside: ');
        console.log(value);
        console.log(anotherValue);
    }
    functionInside();
}

myFunction();
console.log('global scope: ');
console.log(value);
console.log(anotherValue);
```

    - Block : if,for등 문법에서 중괄호로 묶인 영역 안에서 사용이 가능하다.
```JavaScript
const value = 'hello!';

function myFunction() {
    const value = 'bye!';
    if(true) {
        const value = 'world';
        console.log('block scope: ');
        console.log(value);
    }
    console.log('function scope: ');
    console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value);
```
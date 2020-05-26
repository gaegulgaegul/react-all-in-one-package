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

- Hoisting : 선언되지 않은 변수 또는 함수를 끌어 올려서 사용할 수 있는 작동 방식
    - 호이스팅은 의도치 않은 현상이 발생할 수 있기 떄문에 웬만하면 피해야 한다.
    - const, let은 호이스팅이 발생하지 않지만 var는 호이스팅이 발생한다.
```JavaScript
myFunction();

function myFunction() {
    console.log('Hello world');
}
```
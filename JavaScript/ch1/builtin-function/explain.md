## 내장 함수

- forEach: 배열을 일괄적으로 작업할 때 사용한다.
```JavaScript
for(let i; i<superheroes.length; i++) {
    console.log(superheroes[i]);
}

superheroes.forEach(function(hero) {
    console.log(hero);
});

superheroes.forEach(hero => {
    console.log(hero);
});
```

- map: 배열 안의 모든 변수를 변환할 떄 사용한다.
```JavaScript
const array = [1,2,3,4,5,6,7,8];
const squared = array.map(n => n * n);
console.log(squared);

const items = [
    {
        id:1,
        text:'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);
```
- indexOf: 배열에서 특정 항목이 몇뻔째에 있는지 확인할 때 사용한다.
```JavaScript
const superheroes = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지'
];
const index = superheroes.indexOf('토르');
console.log(index);
```
- findIndex: 배열에서 특정 조건에 해당되는 항목이 몇번째인지 확인할 때 사용한다.
- fidn: 배열에서 특정 조건에 해당되는 항목을 가져온다.
```JavaScript
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        doen: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        doen: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        doen: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        doen: false,
    },
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);

const todo = todos.find(todo => todo.done === false);
console.log(todo);
```

- filter: 특정 조건에 해당하는 원소들을 찾아서 새로운 배열을 만든다.
```JavaScript
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        doen: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        doen: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        doen: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        doen: false,
    },
];

const tasksNotDone = todos.filter(todo => todo.doen);
console.log(tasksNotDone);
```

- splice : 배열에서 특정 항목을 제거하는데 사용한다.(제거하는 과정에서 제거하려는 항목을 지정해줘야 한다.)
```JavaScript
const numbers = [10,20,30,40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 2);
console.log(spliced)
console.log(numbers);
```

- slice : 배열을 잘라낼 때 사용한다.(기존의 배열을 건드리지 않는다.)
```JavaScript
const numbers = [10,20,30,40];
const sliced = numbers.slice(0,2);
console.log(sliced);
console.log(numbers);
```

- shift : 첫번째 원소를 하나씩 추출한다.(기존의 배열을 수정하게 된다.)
```JavaScript
const numbers = [10,20,30,40];

const value = numbers.shift();
console.log(value);
console.log(numbers);
```

pop : 마지막 요소를 하나씩 추출한다.(기존의 배열을 수정하게 된다.)
```JavaScript
const numbers = [10,20,30,40];

const value = numbers.pop();
console.log(value);
console.log(numbers);
```

unshift : 배열 첫번째에 요소를 추가한다.
```JavaScript
const numbers = [10,20,30,40];

numbers.unshift(50);
console.log(numbers);
```

push : 배열 마지막에 요소를 추가한다.
```JavaScript
const numbers = [10,20,30,40];

numbers.push(50);
console.log(numbers);
```

concat : 여러 개의 배열을 하나의 배열로 합친다.(기존의 배열을 건드리지 않는다.)
```JavaScript
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const concated = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(concated);
```

join : 배열을 특정 구분자(seperator)을 사용해서 문자열로 반환한다.
```JavaScript
const array = [1,2,3,4,5];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));
```

reduce : 배열 안의 모든 값을 사용하여 어떠한 값을 연산할 때 사용한다.
```JavaScript
const numbers = [1,2,3,4,5];

let avg = numbers.reduce((accumulator, current, index, array) => {
    if(index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);
console.log(avg);
```
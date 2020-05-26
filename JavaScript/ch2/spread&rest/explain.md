## spread & rest

- spread : 객체 또는 배열을 iterable을 분해해서 개별로소로 만든다.
```JavaScript
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};

const greenCuteSlime = {
    ...purpleCuteSlime,
    color: 'green'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);

console.log(silme === cuteSlime);
console.log(purpleCuteSlime === cuteSlime);

/*************************************/
const animals = ['개','고양이','참새'];
const anotherAnimals = [...animals, '비둘기'];

console.log(animals);
console.log(anotherAnimals);

/*************************************/
const numbers = [1,2,3,4,5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); 
```

- rest : 객체, 배열, 함수의 파라미터에서 사용한다. 특정 값을 제외하고 데이터를 모아오는 역할을 한다.
```JavaScript
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteSlime;
console.log(slime);

/******************************************************/
const numbers = [0,1,2,3,4,5,6];

const [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest);
```
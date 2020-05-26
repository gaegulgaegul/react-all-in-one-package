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
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
const object = { a: 1, b: 2 };
const { a, b } = object;
console.log(a);
console.log(b);

/******************************************/
/*
const object2 = { a: 1 };
function print({ a, b = 2 }) {
    console.log(a);
    console.log(b);
}

print(object2);
*/

const object2 = { c: 1 };
const { c, d = 2 } = object2;
console.log(c);
console.log(d);

/******************************************/
const animal = {
    name: '멍멍이',
    type: '개'
};

const { name: nickname } = animal;

console.log(nickname);

/******************************************/
const array = [1];

const [one, two = 2] = array;

console.log(one);
console.log(two);

/******************************************/
const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
};

/*
const { name, languages } = deepObject.state.information;
const { value } = deepObject;
*/
const {
    state: {
        information: {
            name, languages
        }
    },
    value
} = deepObject;

const extracted = {
    name, languages, value
};
console.log(extracted);
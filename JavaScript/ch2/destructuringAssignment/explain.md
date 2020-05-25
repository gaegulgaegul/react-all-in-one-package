## 비구조화 할당(구조 분해)

- 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게하는 자바스크립트 표현식
- 활용 방법
    - 기본값 설정
```JavaScript
/*
const object2 = { a: 1 };
function print({ a, b = 2 }) {
    console.log(a);
    console.log(b);
}

print(object2);
*/

const object = { a: 1 };
const { a, b = 2 } = object;
console.log(a);
console.log(b);
```

    - 이름을 바꾸는 방법
```JavaScript
const animal = {
    name: '멍멍이',
    type: '개'
};

const { name: nickname } = animal;

console.log(nickname);
```

    - 배열 비구조화 할당
```JavaScript
const array = [1];

const [one, two = 2] = array;

console.log(one);
console.log(two);
```

    - 객체 깊숙한 곳에서 꺼내는 방법
```JavaScript
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
```
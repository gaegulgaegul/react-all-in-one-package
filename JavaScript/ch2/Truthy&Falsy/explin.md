## Truthy & Falsy

- true 혹은 false의 의미를 가지는 값
- 'undefined' & 'null' 체크
```JavaScript
function print(person) {
    if(person === undefined || person === null) {
        return;
    }
    console.log(person)
}

const person = null;

print(person);
```

- falsy & truthy 예시
```JavaScript
// falsy
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);

// truthy
console.log(!3);
console.log(!'hello');
console.log(!['array'];
console.log(![]);
console.log(!{});
```
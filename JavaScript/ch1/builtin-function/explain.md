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
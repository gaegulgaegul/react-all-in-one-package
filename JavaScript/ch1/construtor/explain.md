## 객체
- 어떠한 값을 선언하게 될 떄 하나의 값에 여러가지 값을 넣을 수 있도록 해준다.
- 'key'에 공백을 넣을 경우 따옴표로 감싸준다.

- 비구조화 할당(객체 구조 분해)
    - 객체에서 특정 값을 추출한다.
```JavaScript
function print(hero) {
    const { alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}
```

- 객체 안에 함수 넣기
    - 'this'는 자기가 속해있는 함수 안을 가리킨다.
    - 화살표 함수에서는 'this'가 속해있는 범위를 인식하지 못한다.

- getter : 특정 값을 조회하려 할 때 특정 코드를 실행시키고 연산값을 반환한다.
- setter : 특정 값을 설정할 때마다 변수에 입력한다.
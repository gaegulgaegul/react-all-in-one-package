## 조건부 렌더링

- 특정조건이 참인지 거짓인지 판단하여 다른 결과를 보여준다.
- 값을 설정할 때 boolean값을 설정하지 않아도 기본 true로 설정된다.

- Hello.js
```JavaScript
function Hello({ color, name, isSpecial }) {
    return (
    <div style={{
        color
    }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
    </div>
    );
}
```

- App.js
```JavaScript
function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
    </Wrapper>
  );
}
```
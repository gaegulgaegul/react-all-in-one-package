## props를 통해 컴포넌트에게 값 전달하기

- 컴포넌트를 사용하게 될 때 특정 값을 전달할 때 사용한다.

- props 변수 선언
- Hello.js
```JavaScript
function Hello({ color, name }) {
    return <div style={{
        color
    }}>안녕하세요 {name}</div>;
}
```

- App.js
```JavaScript
function App() {
  return (
    <Hello name="react" color="red" />
  );
}
```

- props를 지정하지 않았을 때 기본적으로 사용하고 싶은 값 설정
- Hello.js
```JavaScript
Hello.defaultProps = {
    name: '이름없음'
};
```

- App.js
```JavaScript
function App() {
  return (
    <>
    <Hello name="react" color="red" />
    <Hello color="pink" />
    </>
  );
}
```

- props children: 태그와 태그 사이의 내용을 의미하는 것
- Wrapper.js
```JavaScript
function Wrapper({ children }) {
    const style = {
        border: '2px solid black',
        padding: 16
    };

    return <div style={style}>{children}</div>
}
```

- App.js
```JavaScript
function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}
```
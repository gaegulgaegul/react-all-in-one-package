## JSX

- 리액트의 컴포넌트를 정의할 때 사용하는 문법

- 태그는 꼭 닫혀있어야 한다.

- 두개 이상의 태그는 하나의 태그로 감싸야한다.
- fragment로 감싸는 것도 가능하다.
```JavaScript
<>
    <Hello />
    <div>안녕히계세요.</div>
</>
```

- JSX 내부에서 변수의 값을 출력하는 방법
```JavaScript
function App() {
  const name = 'react';
  return (
    <>
      <Hello />
      <div>{name}</div>
    </>
  );
}
```

- 스타일과 클래스 네임을 설정하는 방법
- 스타일
```JavaScript
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
    </>
  );
}
```
- 클래스 : 반드시 className으로 선언해야 한다.
```JavaScript
import './App.css';

function App() {
  return (
    <>
      <Hello />
      <div className="gray-box"></div>
    </>
  );
}
```

- 주석 작성 방법
```JavaScript
<>
    { /* 어쩌고 저쩌고 */ }
    <Hello
    // 이런식으로 작성하는 주석은
    />
</>
```
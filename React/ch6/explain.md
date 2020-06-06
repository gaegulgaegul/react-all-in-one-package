## useState를 통한 동적 상태 관리

- 사용자 인터렉트에 따라 값이 바뀌어야 하는 값 관리
- Hooks
- 버튼 클릭 이벤트

- Counter.js
```JavaScript
function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    };
    const onDecrease = () => {
        setNumber(number - 1);
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}
```

- App.js
```JavaScript
function App() {
  return (
    <Counter />
  );
}
```

- 주의사항
- onClick에서 함수를 정해줄 때 '()'를 넣게 되면 리액트 렌더링 시 함수가 실행되게 된다.
- onClick(다른 이벤트 포함) 함수 지정 시 '()'는 넣지 않는다.
```JavaScript
function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    };
    const onDecrease = () => {
        setNumber(number - 1);
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease()}>+1</button>
            <button onClick={onDecrease()}>-1</button>
        </div>
    );
}
```
- 성능 최적화

- Counter.js
```JavaScript
function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    };
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}
```
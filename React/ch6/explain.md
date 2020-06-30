> **useState를 통한 동적 상태 관리**

- 사용자 인터렉트에 따라 값이 바뀌어야 하는 값 관리
- Hooks
- 버튼 클릭 이벤트
- Counter.js

```jsx
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

```jsx
function App() {
	return (
		<Counter />
	);
}
```

- 주의사항
    - onClick에서 함수를 정해줄 때 '()'를 넣게 되면 리액트 렌더링 시 함수가 실행되게 된다.
    - onClick(다른 이벤트 포함) 함수 지정 시 '()'는 넣지 않는다.

```jsx
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

```jsx
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

---

> setState() - 함수 기반 상태 관리

- setState() 함수는 배열을 리턴하는데 첫번째 원보는 상태 값을 저장할 변수이고 두번째 원소는 해당 값을 갱신할 떄 사용할 수 있는 함수입니다.
- setState() 함수에 인자로 해당 상태의 초기 값을 넘길 수 있습니다.

```jsx
const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = useState(<상태 초기 값>);
```
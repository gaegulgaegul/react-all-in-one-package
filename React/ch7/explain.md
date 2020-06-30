> 리액트에서 input 상태 관리하기

- InputSample.js

```jsx
function InputSample() {
	const [text, setText] = useState('');
	const onChange = (e) => {
		setText(e.target.value);
	};
	const onReset = () => {
		setText('');
	};
	return (
	<div>
		<input onChange={onChange} value={text}/>
		<button onClick={onReset}>초기화</button>
		<div>
			<b>값 : </b>
			{text}
		</div>
	</div>
	);
}
```

- onChange 이벤트가 발생하면 e.target.value 값을 통해 이벤트 객체에 담겨있는 현재 텍스트 값을 읽어올 수 있습니다.

- App.js

```jsx
function App() {
	return (
		<InputSample />
	);
}
```
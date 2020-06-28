> props를 통해 컴포넌트에게 값 전달하기

- 컴포넌트를 사용하게 될 때 특정 값을 전달할 때 사용한다.
- props 변수 선언
- Hello.js

```jsx
function Hello({ color, name }) {
	return <div style={{
		color
	}}>안녕하세요 {name}</div>
}
```

- App.js

```jsx
function App() {
	return (
		<Hello name="react" color="red" />
	);
}
```

- props를 지정하지 않았을 때 기본적으로 사용하고 싶은 값 설정
- Hello.js

```jsx
Hello.defaultProps = {
	name: '이름없음'
};
```

- App.js

```jsx
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

```jsx
function Wrapper({ children }) {
	const style = {
		border: '2px solid black',
		padding: 16
	};
	return <div style={style}>{children}</div>
}
```

- App.js

```jsx
function App() {
	return (
	<Wrapper>
		<Hello name="react" color="red" />
		<Hello color="pink" />
	</Wrapper>
	);
}
```

---

> props

- React에서는 사용자가 컴포넌트에 전달해서 보관하길 원하는 데이터(주로 정적인 데이터)
- 컴포넌트 내에서 데이터가 보관되면, 이 데이터는 수정되지 않고 보존되어야 하는 법칙이 성립
- props의 값을 변경하고자 할 때에는 컴포넌트 내부가 아닌, 부모 컴포넌트에서 이에 대한 부분이 변경되어야 합니다.
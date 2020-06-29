> **조건부 렌더링**

- 특정 조건이 참인지 거짓인지 판단하여 다른 결과를 보여준다.
- 값을 설정할 때 boolean값을 설정하지 않아도 기본 true로 설정된다.
- Hello.js

```jsx
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

```jsx
function App() {
	return (
		<Wrapper>
			<Hello name="react" color="red" isSpecial={true} />
			<Hello color="pink" />
		</Wrapper>
	);
}
```

---

React에서 원하는 동작을 수행하는 캡슐화된 별개의 컴포넌트를 생성할 수 있습니다. 그리고 나서, 어플리케이션의 state에 의존하여 그 중 일부만 렌더링시키는 것도 가능합니다.
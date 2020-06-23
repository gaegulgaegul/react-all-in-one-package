## useReducer Hook

- 컴포넌트의 상태를 업데이트 한다.
- action 기반 업데이트
- 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능(다른 파일에 작성 후 불러올 수 있다.)
```JavaScript
function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
```
```JavaScript
const [number, dispatch] = useReducer(reducer, 0);
```
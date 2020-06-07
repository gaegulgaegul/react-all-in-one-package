## 리액트에서 input 상태 관리하기

- InputSample.js
```JavaScript
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

- App.js
```JavaScript
function App() {
  return (
    <InputSample />
  );
}
```
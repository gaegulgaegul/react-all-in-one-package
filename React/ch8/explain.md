## 여러 개의 input 상태 관리하기

- input에 name값을 참조하고 그 값을 나타낸다.
- 객체상태를 업데이트
    - 기존의 상태를 복사하고 나서 새로운 상태로 설정해준다. -> 불변성

- InputSample.js
```JavaScript
function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const { name, nickname } = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
    };
    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}
```
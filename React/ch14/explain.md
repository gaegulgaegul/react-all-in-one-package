## 배열에 항목 수정하기

- map()을 이용해 불변성을 지키며 수정하기

- UserList.js
```JavaScript
function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
    return (
        <div>
            <b style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                users.map(
                    (user) => (
                        <User
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
}
```

- App.js
```JavaScript
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'valopert',
        email: 'public.velopert@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    // setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ))
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}
```
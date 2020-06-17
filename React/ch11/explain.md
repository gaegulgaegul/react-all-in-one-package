## useRef로 컴포넌트 안의 변수 만들기

- 컴포넌트 내부에서 값을 유지하고 싶을 경우(리렌더링) 사용하게 된다.
- 값이 바뀐다고 컴포넌트가 리렌더링 되지 않는다.

- App.js
```JavaScript
function App() {
  const users = [
    {
        id: 1,
        username: 'valopert',
        email: 'public.velopert@gmail.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current); // 4
    nextId.current += 1;
  };

  return (
    <UserList users={users} />
  );
}
```

- UserList.js
```JavaScript
function UserList({ users }) {
    return (
        <div>
            {
                users.map(
                    (user, index) => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    );
}
```
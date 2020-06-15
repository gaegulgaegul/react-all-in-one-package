## 배열 렌더링하기

- 1차원 배열 렌더링
```JavaScript
function UserList() {
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

    return (
        <div>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
        </div>
        <div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
        </div>
        <div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </div>
    );
}
```

- User 컴포넌트를 작성해서 렌더링
```JavaScript
function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

unction UserList() {
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

    return (
        <div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    );
}
```

- 컴포넌트 형태의 배열로 전환
- key의 역할
    - 렌더링한 결과물에서 어떤 값을 가지는지 key를 통해 알 수 있다.
    - 새로운 항목이 추가되거나 업데이트 될 경우 효율적으로 사용할 수 있다.
    - key에 map 함수의 인자인 index를 사용하는 경우 매우 비효율적으로 업데이트 된다.
```JavaScript
function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
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

    return (
        <div>
            {
                users.map(
                    // key가 있는 경우
                    user => (<User user={user} key={user.id}/>)
                    // key가 없는 경우
                    (user, index) => (<User user={user} key={user.id}/>)
                    // index를 key로 사용하면 안됨.
                    (user, index) => (<User user={user} key={index}/>)
                )
            }
        </div>
    );
}
```
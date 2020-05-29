## promise

- 콜백 지옥
```JavaScript
function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if(callback) {
            callback(increased);
        }
    }, 1000);
}

increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('작업 끝!');
                });
            });
        });
    });
});
```

- Promise
    - 비동기 작업을 쉽게 처리하기 위한 함수
    - 오류 발생위치를 알기 어렵다.
    - 특정 조건에 따라 분기를 나누는 작업이 어렵다.
        - resolve : 성공했을 때 실행하는 함수
        - reject : 실패했을 때 실행하는 함수
```JavaScript
function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if(value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }

            console.log(value);
            resolve(value);
        }), 1000;
    });
}

increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
    console.log(e)
});
```
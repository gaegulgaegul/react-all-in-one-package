## 비동기 처리

- 동기적 처리 : 작업이 순차적으로 실행되는 처리 방식
- 비동기적 처리 : 작업을 동시에 처리 하는 방식
```JavaScript
function work(callback) {
    setTimeout(() => {
        const start = Date.work();
        for(let i=0; i< 1000000000; i++) {
    
        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start);
    }, 0);
}

console.log('작업 시작!');
work((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms 걸렸다고 해요.');
});
console.log('다음 작업');
```
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        doen: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        doen: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        doen: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        doen: false,
    },
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);

const todo = todos.find(todo => todo.done === false);
console.log(todo);
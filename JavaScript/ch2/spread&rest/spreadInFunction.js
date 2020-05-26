function subtract(x, y) {
    return x - y;
}
const numbers = [1,2]
const result = subtract(...numbers);
console.log(result);

/********************************************/
function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const result2 = sum(1,2,3,4,5,6,7);
console.log(result2);
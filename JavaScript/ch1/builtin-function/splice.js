const numbers = [10,20,30,40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 2);
console.log(spliced)
console.log(numbers);
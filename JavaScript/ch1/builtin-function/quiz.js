function countBiggerThanTen(numbers) {
    // forEach
/*
    let count = 0;
    numbers.forEach(n => {
        if (n > 10) {
        count++;
        }
    });
    return count;
*/

    // filter
/*
    return numbers.filter(n => n > 10).length;
*/

    // reduce
    return numbers.reduce((acc,cur) => {
        if(cur > 10) {
            return acc += 1;
        } else {
            return acc;
        }
    }, 0);
}

const count = countBiggerThanTen([1,2,3,4,5,10,20,30,40,50,60]);
console.log(count);
function print(person) {
    if(person === undefined || person === null) {
        return;
    }
    console.log(person)
}

const person = null;

print(person);
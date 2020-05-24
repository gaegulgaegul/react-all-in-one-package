const dog = {
    name: '멍멍이'
};

function getName(animal) {
    return animal && animal.name;
}

const name = getName();
console.log(name);
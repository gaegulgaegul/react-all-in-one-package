const namelessDog = {
    name: ''
};

function getName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name);
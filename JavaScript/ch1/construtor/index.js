const dog = {
    name : '멍멍이',
    age : 2
};

console.log(dog);
console.log(dog.name);
console.log(dog.age);

/*******************************************/
const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
};

const captainAmrica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
};
console.log(ironMan);
console.log(captainAmrica);

/*******************************************/
function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}
print(ironMan);
print(captainAmrica);

/*******************************************/
function print({ alias, name, actor }) {
    //const { alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}
print(ironMan);
print(captainAmrica);

/*******************************************/
const dog = {
    name : '멍멍이',
    sound : '멍멍',
    say : function() {
        console.log(this.sound);
    }
}

const cat = {
    name : '야옹이',
    sound : '야옹',

}

cat.say = dog.say;
dog.say();
cat.say();

const catSay = cat.say;
catSay();

/*******************************************/
const numbers = {
    a : 1,
    b : 2,
    get sum() {
        console.log('sum함수가 실행됩니다.!');
        return this.a + this.b;
    }
}

console.log(numbers.sum);

/*******************************************/
const dog = {
    _name : '멍멍이',
    get name() {
        console.log('_name을 조회합니다..');
        return this._name;
    },
    set name(value) {
        console.log('이름이 바뀝니다.. ' + value);
        this._name = value;
    }
}

console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog.name);

/*******************************************/
const numbers = {
    _a : 1,
    _b : 2,
    sum : 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
}

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
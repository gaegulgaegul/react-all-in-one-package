## 프로토타입 & 클래스

- 객체 생성자 : 함수를 통해 새로운 객체를 만들고 그 안에 넣고 싶은 값, 함수를 넣는다.
```JavaScript
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function() {
        console.log(this.sound);
    }
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();
```

- 프로토 타입 : 객체 생성자를 만들 때 객체들 끼리 공유할 수 있는 객체 또는 함수를 선언한다.(어떤 값을 재사용하고 싶을 떄 사용한다.)
```JavaScript
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Aninmal.prototype.say = function() {
    console.log(this.sound);
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();
```

- 상속 : 부모 생성자의 기능을 받으면서 새로운 기능을 추가하는 것
```JavaScript
/*
function Dog(name, sound) {
    this.type = "개";
    this.name = name;
    this.sound = sound;
}

function Cat(name, sound) {
    this.type = "고양이";
    this.name = name;
    this.sound = sound;
}
Dog.prototype.say = function() {
    console.log(this.sound);
}
Cat.prototype.say = function() {
    console.log(this.sound);
}
*/
// >>> 상속을 이용하여 구현
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Aninmal.prototype.say = function() {
    console.log(this.sound);
}

function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
```
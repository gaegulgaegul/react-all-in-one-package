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
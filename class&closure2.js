// 클래스를 확장하려면 어떻게 해야할까?


// super class
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    getInfo() {
        return this.name + ' ' + this.sound + '클라이언트 입니다';
    }
}


// sub class

// function Friends(name, sound){
//     Animal.call(this, name, sound);
// }

// Friends 클래스는 Animal 클래스로부터 파생된 거라고 생각하면 편하다. (extends의 개념임.)
class Friends extends Animal{
    constructor(name, sound){
        super(name, sound)
    }
}

// Friends.prototype = Object.create(Animal.prototype);
// Friends.prototype.constructor = Friends;

const dog = new Friends('unidocu', 'dev');
const cat = new Friends('unidocu', 'prd');

console.log(dog.constructor.name)
console.log(cat.constructor.name)

console.log(dog instanceof Friends)
console.log(dog instanceof Animal)

console.log(dog.getInfo());
console.log(cat.getInfo());

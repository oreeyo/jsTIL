// 클래스와 인스턴스 활용

/*

function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function(){
        return this.name + '입니다';
    };
}

*/

class Person {
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }

    getName() {
        return this.name + '입니다';
    }
}



const unipost = new Person('unipost', 15, 'GangNam');
const me = new Person('kim', 29, 'SeoCho');


console.log(unipost);
console.log(me);


console.log(unipost.getName());
console.log(me.getName());
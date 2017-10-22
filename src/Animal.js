class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log("이름: " + this.name);
        console.log("나이: " + this.age);
    }
}
class Bird {
    constructor(kind) {
        this.kind = kind;
    }
    printInfo() {
        console.log("이 새의 종류는: " + this.kind);
        console.log("test");
    }
}
class Chicken extends Bird {
    constructor(kind) {
        super(kind);
    }
    printInfo() {
        super.printInfo();
    }
}
function printSomething(a) {
    a.printInfo();
}
let dd = new Cat("고양이", 1);
dd.printInfo();
let dd2 = new Cat("고양이2", 2);
dd2.printInfo();
let c = new Bird("닭");
console.log(typeof (c));
//# sourceMappingURL=Animal.js.map
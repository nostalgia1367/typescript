var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.printInfo = function () {
        console.log("이름: " + this.name);
        console.log("나이: " + this.age);
    };
    return Cat;
}());
function printSomething(a) {
    a.printInfo();
}
var dd = new Cat("고양이", 1);
dd.printInfo();
var dd2 = new Cat("고양이2", 2);
dd2.printInfo();
//# sourceMappingURL=Animal.js.map
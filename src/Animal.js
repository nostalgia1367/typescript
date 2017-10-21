var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Bird = /** @class */ (function () {
    function Bird(kind) {
        this.kind = kind;
    }
    Bird.prototype.printInfo = function () {
        console.log("이 새의 종류는: " + this.kind);
        console.log("test");
    };
    return Bird;
}());
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken(kind) {
        return _super.call(this, kind) || this;
    }
    Chicken.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
    };
    return Chicken;
}(Bird));
function printSomething(a) {
    a.printInfo();
}
var dd = new Cat("고양이", 1);
dd.printInfo();
var dd2 = new Cat("고양이2", 2);
dd2.printInfo();
var c = new Bird("닭");
console.log(typeof (c));
//# sourceMappingURL=Animal.js.map
var Robot = /** @class */ (function () {
    function Robot() {
        this.speed = 30;
    }
    Robot.prototype.run = function () {
        return "로봇이" + this.speed + "정도로 뜁니다.";
    };
    Robot.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Robot;
}());
var Person = /** @class */ (function () {
    function Person() {
        this.speed = 30;
    }
    Person.prototype.run = function () {
        return this.speed + "정도로 뜁니다";
    };
    Person.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Person;
}());
var p = new Person();
//let p:Action = new Person();
p.setSpeed(50);
var str4 = p.run();
console.log(str4);
var rb = new Robot();
rb.setSpeed(1000);
console.log(rb.run());
str4 = rb.run();
console.log(str4);
rb = p;
console.log(rb.run());
//# sourceMappingURL=interface.js.map
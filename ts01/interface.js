class Robot {
    constructor() {
        this.speed = 30;
    }
    run() {
        return "로봇이" + this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
class Person {
    constructor() {
        this.speed = 30;
    }
    run() {
        return this.speed + "정도로 뜁니다";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
let p = new Person();
//let p:Action = new Person();
p.setSpeed(50);
let str4 = p.run();
console.log(str4);
let rb = new Robot();
rb.setSpeed(1000);
console.log(rb.run());
str4 = rb.run();
console.log(str4);
rb = p;
//# sourceMappingURL=interface.js.map
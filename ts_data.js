var ts_num1 = 3;
//ts_num1 = "adfadf";
ts_num1 = 6;
var ts_num2 = 5;
var ts_str = "string";
var ts_str2 = "string2";
var numArr = [3, 4, 5];
console.log("ts_num1" + ts_num1 + ",ts_num2: " + ts_num2);
console.log(ts_str);
console.log(ts_str2);
console.log(numArr);
var tp;
tp = ["string1", 2];
var anyTest = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);
var anyArr = [1, 2, true];
function setUser() {
    return "abc";
}
function testObject() {
    return "abc";
}
var strTest = testObject();
console.log("데이터 타입은? " + typeof strTest + "data: " + strTest);
console.log(strTest.charAt(1));
console.log(strTest.length);
console.log(strTest.substr(1));
function testFunc(str, num) {
    console.log("str = " + str);
    console.log("num = " + num);
}
function throwError() {
    throw new Error("nonono");
}
var ajaxUtil = function (ti) {
    var str = "this_str";
    var num = 3;
    this.print = function () {
        console.log(ti.str);
        console.log(ti.num);
    };
};
var test1 = { str: "홍길동", num: 30 };
var au = new ajaxUtil(test1);
au.print();
var Car = /** @class */ (function () {
    function Car(pCarName) {
        this.pCarName = pCarName;
        this.carName = pCarName;
    }
    return Car;
}());
var hyundai = new Car("Sonata");
var pStr = "hyundai차동차 중 제 차는? " + hyundai.carName;
pStr += hyundai.carName;
console.log(pStr);
//# sourceMappingURL=ts_data.js.map
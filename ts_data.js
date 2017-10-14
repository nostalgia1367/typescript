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
function setUser(name) {
    return name;
}
console.log(setUser('더조은'));
function testObject() {
    return "abc";
}
var strTest = testObject();
console.log("데이터 타입은? " + typeof strTest + "data: " + strTest);
console.log(strTest.charAt(1));
console.log(strTest.length);
console.log(strTest.substr(1));
//# sourceMappingURL=ts_data.js.map
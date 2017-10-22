var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Notebook"] = 1] = "Notebook";
    Computer[Computer["macbook"] = 2] = "macbook";
    Computer[Computer["Laptop"] = 3] = "Laptop";
})(Computer || (Computer = {}));
let cp = Computer.macbook;
console.log(cp);
let enumStr1 = "str";
let enumStr2 = "str";
let enumStr3 = new String("str");
let enumStr4 = new String("str");
String.prototype.equals = function (str) {
    if (typeof str == "object") {
        return str.toString() == this.toString();
    }
};
console.log("str1 == str2: " + (enumStr1 == enumStr2));
console.log("str1 == str3: " + (enumStr1 == enumStr3));
console.log("str2 == str3: " + (enumStr2 == enumStr3));
console.log("str1 === str2: " + (enumStr1 === enumStr2));
console.log("str1 === str3: " + (enumStr1 === enumStr3));
console.log("str2 === str3: " + (enumStr2 === enumStr3));
console.log("str1 equals str3: " + enumStr1.equals(enumStr3));
console.log("str3 equals str4: " + enumStr3.equals(enumStr4));
console.log(enumStr1.toString());
console.log(enumStr3.toString());
//# sourceMappingURL=enumExample.js.map
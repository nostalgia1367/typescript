enum Computer{Desktop, Notebook, macbook, Laptop}

let cp:Computer = Computer.macbook;
console.log(cp);

let enumStr1 : string = "str";
let enumStr2 : string = "str";
let enumStr3 : String = new String("str");
let enumStr4 : String = new String("str");
String.prototype.equals = function(str){
    if(typeof str=="object"){
        return str.toString() == this.toString();
    }
}
console.log("str1 == str2: "+(enumStr1==enumStr2));
console.log("str1 == str3: "+(enumStr1==enumStr3));
console.log("str2 == str3: "+(enumStr2==enumStr3));

console.log("str1 === str2: "+(enumStr1===enumStr2));
console.log("str1 === str3: "+(enumStr1===enumStr3));
console.log("str2 === str3: "+(enumStr2===enumStr3));

console.log("str1 equals str3: "+ enumStr1.equals(enumStr3));
console.log("str3 equals str4: "+ enumStr3.equals(enumStr4));

console.log(enumStr1.toString());
console.log(enumStr3.toString());
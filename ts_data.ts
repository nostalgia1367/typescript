let ts_num1 : number =3;
//ts_num1 = "adfadf";
ts_num1 = 6;

let ts_num2 : number = 5;

let ts_str : string = "string";
let ts_str2 : string = "string2";

let numArr : Array<number> = [3,4,5];

console.log("ts_num1"+ts_num1+",ts_num2: "+ts_num2);
console.log(ts_str);
console.log(ts_str2);
console.log(numArr);

let tp : [string, number] ;
tp = ["string1",2];

let anyTest : any = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);

let anyArr : any[] = [1,2,true];

function setUser(): string{
    return "abc";
}


function testObject(){
    return "abc";
}

var strTest = testObject();
console.log("데이터 타입은? "+typeof strTest +"data: "+ strTest);

console.log(strTest.charAt(1));
console.log(strTest.length);
console.log(strTest.substr(1));
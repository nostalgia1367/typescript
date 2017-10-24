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
console.log(numArr+"");

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

function testFunc(str:string, num:number) : void{
    console.log("str = "+str);
    console.log("num = "+num);
}

function throwError():never{
    throw new Error("nonono");
}

interface testIter{
    str : string,
    num : number
}
let ajaxUtil = function(ti:testIter):void{
    let str:string = "this_str";
    let num:number = 3;
    this.print = function():void{
        console.log(ti.str);
        console.log(ti.num);
    }
}

var test1 = {str:"홍길동",  num:30}
var au = new ajaxUtil(test1);
au.print();

class Car{
    carName : string;
    constructor(public pCarName:string){
        this.carName = pCarName;
    }
}

let hyundai = new Car("Sonata");
let pStr:string ="hyundai차동차 중 제 차는? "+hyundai.carName;
pStr += hyundai.carName;
console.log(pStr);
console.log(pStr);

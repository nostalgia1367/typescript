/*
@since
@comment 제네릭과 for문을 이용하여 데이터를 삽입하는 예제
*/
let userList:Array<number> = new Array();

for(let i:number = 0; i<5; i++){
    addUserList(userList,i);
}

function addUserList(userList:Array<number>,num:number){
    userList.push(num);
}

console.log(userList);

/*

*/
let testList = new Array();
testList.push("스트링");//string
testList.push("111"); //number
testList.push("2222"); //number
testList.push("12");//string
testList.push(true); //boolean
console.log("testList의 for()");
console.log("testList의 길의: "+testList.length);
// for(let i:number=0; i < testList.length; i++){
//     //console.log(testList.pop());

//     console.log(testList[i]);
// }
console.log(testList);
testList.forEach(e => {
    //console.log(testList.pop());
    console.log(testList);
});

class Exam{
    public name : string;
}
//let userList:Array<number> = new Array();
let examList : Array<Exam> = new Array<Exam>();

let e:Exam = new Exam();
e.name = "e1";
examList.push(e);

e = new Exam();
e.name = "e2";
examList.push(e);


//testList.forEach(fn:(e:any,index:number,testList:any[]=>{

//}));

function initList(examList:Array<Exam>):void{
    examList = null;
}

let tList:Array<boolean> = new Array<boolean>();
tList.push(true);


/**
 * 상수 값 선언 const
*/
const cst:number = 3; //constant 
// cst = 5;


let add = function(n1:number|string, n2:number|string):number|string{
    if(typeof n1 != "number") return "n1은 숫자가 아닙니다.";
    if(typeof n2 != "number") return "n2는 숫자가 아닙니다.";

    return n1+n2;
}

console.log("add함수 호출: "+add(1,"1"));
console.log("add함수 호출: "+add(1,1));



class Lotto{
    private numbers : Array<number>;
    constructor(){
        this.numbers = new Array<number>();
        //Array<number>();
        this.makeNumbers();
    }

    private makeNumbers() : void{
        while(this.numbers.length < 6){
            let num:number = Math.floor(Math.random()*20)+1;
            console.log(this.numbers);
            //중복검사
            //if(this.numbers.indexOf(num) != -1){
              if(this.valiNumbers(num)){  
                continue;
            }
            this.numbers.push(num);
        }
    }
    private valiNumbers(num:number):boolean{
        return this.numbers.indexOf(num) !=-1;
    }
    public getNumbers() : Array<number>{
        return this.numbers;
    }

}

let lot:Lotto = new Lotto();
//lot.makeNumbers();
console.log(lot.getNumbers());


//CDB, TDD, MVC

//개발방법
// 컴포넌트 기반, 모듈 기반



let arrs1:Lotto[] = [new Lotto()];
//let arrs2:Array<Lotto> = [new Lotto()];



for(let arrindex in arrs1){
    console.log(arrs1[arrindex]);
}
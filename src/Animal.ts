interface Animal{
    name:string;
    age:number;
    height:number;
    printInfo():void;
}


class Cat implements Animal{
    name : string;
    age : number;
    height : number;
    
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;    
    }

    printInfo(){
        console.log("이름: "+ this.name);
        console.log("나이: "+ this.age);
    }
}

class Bird implements Animal{
    name : string;
    age : number;
    height : number;
    kind : string;

    constructor(kind:string){
        this.kind = kind;
    }

    printInfo() : void {
        
        console.log("이 새의 종류는: "+ this.kind);
        console.log("test");
    }
}

class Chicken extends Bird{
    constructor(kind:string){
        super(kind);
    }
    printInfo() : void {
        super.printInfo();
    }
}


function printSomething(a:Animal){
    a.printInfo();
}

let dd:Cat = new Cat("고양이",1);
dd.printInfo();

let dd2:Animal = new Cat("고양이2",2);
dd2.printInfo();

let c:Bird = new Bird("닭");
console.log(typeof(c));

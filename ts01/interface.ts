interface Action{
    //규격
    //test : String;
    //test2 : string;
    run() : string;
    setSpeed(speed:number) : void;

}

class Robot implements Action{
    speed:number = 30;
    run(){
        return "로봇이"+ this.speed +"정도로 뜁니다.";
    }
    setSpeed(speed:number):void{
        this.speed = speed;
    }
    
}

class Person implements Action{
    speed : number = 30;
    run(){
        return this.speed +"정도로 뜁니다";
    }
    setSpeed(speed:number):void{
        this.speed = speed;
    }
}

let p:Person = new Person();
//let p:Action = new Person();
p.setSpeed(50);
let str4 : string = p.run();

console.log(str4);

let rb:Action = new Robot();
rb.setSpeed(1000);
console.log(rb.run());

str4 = rb.run();
console.log(str4);
rb = p;


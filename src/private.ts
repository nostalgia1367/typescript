class UserDTO{
    private name : string;
    private age : number;
    public address : string;
    public setName(name:string):void{
        this.name = name;
    }
    public getName():string{
        return this.name;
    }
}

let hong:UserDTO = new UserDTO();
// 접근제어자가 private 이기때문에 안됨..
//hong.name = "abc";
hong.address = "서울";
hong.setName("홍길동");
console.log("get:"+hong.getName());
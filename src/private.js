class UserDTO {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let hong = new UserDTO();
// 접근제어자가 private 이기때문에 안됨..
//hong.name = "abc";
hong.address = "서울";
hong.setName("홍길동");
console.log("get:" + hong.getName());
//# sourceMappingURL=private.js.map
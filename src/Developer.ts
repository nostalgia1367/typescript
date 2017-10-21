interface Work{
    goForWork() : void;
    doWorking() : void;
    goOut() : void;
}

class Developer implements Work{
    goForWork(): void{
        console.log("일하러 가자");
    }
    doWorking(): void{
        console.log("일 중");
    }
    goOut(): void{
        console.log("퇴근 중");
    }
}


let dev:Developer = new Developer();
dev.goForWork();
dev.doWorking();
dev.goOut();


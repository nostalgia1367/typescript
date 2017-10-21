var Developer = /** @class */ (function () {
    function Developer() {
    }
    Developer.prototype.goForWork = function () {
        console.log("일하러 가자");
    };
    Developer.prototype.doWorking = function () {
        console.log("일 중");
    };
    Developer.prototype.goOut = function () {
        console.log("퇴근 중");
    };
    return Developer;
}());
var dev = new Developer();
dev.goForWork();
dev.doWorking();
dev.goOut();
//# sourceMappingURL=Developer.js.map
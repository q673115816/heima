"use strict";
// interface SumInterFace{
//     (a: number,b:number): number
// }
var XiaoMing = /** @class */ (function () {
    function XiaoMing() {
        this.name = '小明';
        this.age = 18;
    }
    XiaoMing.prototype.eat = function () {
    };
    return XiaoMing;
}());
var pp = {
    x: 1,
    y: '66',
    z: {}
};
// 接口继承类 
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
        this.type = '777';
    }
    Bird.prototype.fly = function () {
    };
    return Bird;
}());
var qqq = new Bird('这是qqq鸟');
console.log(qqq.name);
var flyBird = {
    name: '123',
    type: 'wtf',
    fly: function () {
    }
};

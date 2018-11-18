"use strict";
var a = 555;
var obj = {
    name: 'jack'
};
var Cat = /** @class */ (function () {
    function Cat(type) {
        this.type = type;
        this._age = 17;
        this.name = "加菲";
    }
    Object.defineProperty(Cat.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value >= 18 || value <= 14) {
                throw Error('名字不jk');
            }
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return Cat;
}());
var cat = new Cat('胖');
console.log(cat.age);
cat.age = 19;

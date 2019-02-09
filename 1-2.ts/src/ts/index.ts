let a: number = 555;

const obj: object = {
    name: 'jack'
}

class Cat {

    readonly name: string
    constructor(public type: string) {
        this.name = "加菲"
    }

    private _age: number = 17

    get age(): number {
        return this._age
    }

    set age(value: number) {
        if(value>=18 || value <= 14) {
            throw Error('名字不jk');
        }
        this._age = value
    }
}

var cat = new Cat('胖')

console.log(cat.age)
cat.age = 19
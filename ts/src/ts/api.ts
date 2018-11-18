// interface SumInterFace{
//     (a: number,b:number): number
// }


// let sum: SumInterFace = function(a:number,b:number) {
//     return a + b
// }

interface PersonInterFace {
    name : string,
    age: number,
    eat():void
}

class XiaoMing implements PersonInterFace {
    name: string = '小明'
    age: number = 18
    eat() {

    }
    constructor() {
        
    }
}
// 接口继承
interface point1 {
    x: number
}

interface point2 {
    y: string
}

interface point3 extends point1,point2 {
    z: object
}

let pp: point3 = {
    x: 1,
    y: '66',
    z: {

    }
}

// 接口继承类 

class Bird {
    type: string = '777'
    fly() {

    }
    constructor(public name: string) {
    }
}

let qqq = new Bird('这是qqq鸟')

qqq.name = '这不是qq鸟'
console.log(qqq.name)

interface fly extends Bird {

}


let flyBird :fly = {
    name: '123',
    type: 'wtf',
    fly() {
        
    }

}
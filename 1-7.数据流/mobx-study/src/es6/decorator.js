@fn
@fn2(10)
class MyClass {}

function fn(target) {
    target.foo = 'bar'
}

function fn2(val) {
    return function (target) {
        target.value = val
    }
}

console.log(MyClass.foo)
console.log(MyClass.value)
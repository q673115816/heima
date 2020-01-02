console.log('lib')

exports.hello = 'world'

// module.exports = function add(a, b) {
//     return a + b
// } 

setTimeout(() => {
    console.log(exports)
}, 1000)
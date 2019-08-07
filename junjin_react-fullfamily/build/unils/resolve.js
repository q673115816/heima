const path = require('path')

module.exports = function(src) {
    return path.resolve(__dirname, '../', src)
}
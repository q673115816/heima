
var counterReducer = require('./counterReducer')
var infoReducer = require('./infoReducer')
var combineReducers = require('../combineReducers')
// 属性名与初始值的属性名一一对应
const reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer
})
module.exports = reducer


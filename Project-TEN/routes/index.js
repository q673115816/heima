const express = require('express')
const Router = express.Router()
const {
    IndexRoute,
    homeRoute,
    testRoute,
    registerRoute
} = require('./route')

Router
.get('/', IndexRoute)
.get('/index', IndexRoute)
.get('/home', homeRoute)
.get('/register', registerRoute)
.get('/test', testRoute)

module.exports = Router
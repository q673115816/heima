const express = require('express')
const Router = express.Router()
const {
    IndexRoute,
    homeRoute,
    testRoute,
    signupRoute,
} = require('./route')

const {
    apiSignup,
    apiSignin
} = require('./api')

const user = require('../service/user')
Router
    .get('/', IndexRoute)
    .get('/index', IndexRoute)
    .get('/home', homeRoute)
    .get('/signup', signupRoute)
    .get('/test', testRoute)
Router
    .get('/api/find', user)
    .post('/api/signup', apiSignup)
    .post('/api/signin', apiSignin)

module.exports = Router
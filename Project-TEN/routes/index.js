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
Router
    .get('/', IndexRoute)
    .get('/index', IndexRoute)
    .get('/home', homeRoute)
    .get('/signup', signupRoute)
    .get('/test', testRoute)
    .post('/api/signup', apiSignup)
    .post('/api/signin', apiSignin)

module.exports = Router
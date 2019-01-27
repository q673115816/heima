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

const {
    findUserBynickname
} = require('../service/user')
Router
    .get(['/', '/index', 'index.html'], IndexRoute)
    .get(['/home', 'home.html'], homeRoute)
    .get(['/signup', 'signup.html'], signupRoute)
    .get(['/test', 'test.html'], testRoute)
Router
    .get('/api/find', findUserBynickname)
    .post('/api/signup', apiSignup)
    .post('/api/signin', apiSignin)

module.exports = Router
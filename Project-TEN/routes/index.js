const express = require('express')
const Router = express.Router()
const {
    IndexRoute,
    homeRoute,
    testRoute,
    signupRoute,
    updateRoute
} = require('./route')

const {
    apiSignup,
    apiSignin
} = require('../controller')

const {
    findUserBynickname
} = require('../service/user')

const find = require('../controller/find')
const deleteUser = require('../controller/delete')
Router
    .get(['/', '/index', '/index.html'], IndexRoute)
    .get(['/home', '/home.html'], homeRoute)
    .get(['/signup', '/signup.html'], signupRoute)
    .get(['/test', '/test.html'], testRoute)
    .get(['/update/:id', '/update.html'], updateRoute)
Router
    .get('/api/find', find)
    .delete('/api/delete/:id', deleteUser)
    .post('/api/signup', apiSignup)
    .post('/api/signin', apiSignin)
    .patch('/api/:id/profile', apiProfile)

module.exports = Router
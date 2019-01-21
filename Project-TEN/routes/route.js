const IndexRoute = async (req, res) => res.render('index.html')
const homeRoute = async (req, res) => res.render('home.html')
const registerRoute = async (req, res) => res.render('register.html')
const testRoute = async (req, res) => res.render('test.html')
module.exports = {
    IndexRoute,
    homeRoute,
    registerRoute,
    testRoute,
}
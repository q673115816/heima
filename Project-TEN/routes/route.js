const user = require('../service/user');

const IndexRoute = async (req, res) => {
    console.log('进入首页');

    res.render('index.html')
}
const homeRoute = async (req, res) => {
    res.render('home.html')
}
const signupRoute = async (req, res) => {
    console.log('进入注册');
    
    res.render('signup.html')
}
const signinRoute = async (req, res) => {
    console.log('进入登录');
    
    res.render('signin.html')
}
const testRoute = async (req, res) => {
    res.render('test.html')
}
const updateRoute = async (req, res) => {
    console.log('进入更新');
    
    const id = req.params.id
    const { data } = await user.findUserById(id)
    console.log(data);
    res.render('update.html', {data})
}
module.exports = {
    IndexRoute,
    homeRoute,
    signupRoute,
    signinRoute,
    testRoute,
    updateRoute,
}
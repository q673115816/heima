const user = require('../service/user')

const signin = async (req, res) => {
    console.log('登录请求:');
    const {
        body
    } = req
    const {
        email,
        password
    } = body
    const {
        data
    } = await user.signin({
        email,
        password
    })
    res.status(200).json({
        data,
        code: 200,
        msg: '登录成功：'
    })
}



module.exports = signin
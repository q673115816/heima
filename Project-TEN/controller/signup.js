const user = require('../service/user')

const signup = async (req, res) => {
    console.log('注册请求:');
    const {
        body
    } = req
    const {
        nickname,
        email,
        password
    } = body

    const hasNickname = await user.findUserBynickname({
        nickname
    })
    if(hasNickname.data.length > 0) {
        res.status(409).json({
            msg: '昵称已存在',
            code: 409
        })
        return false;
    }

    const {data} = await user.signup({
        nickname,
        email,
        password
    })

    res.status(200).json({
        data,
        msg: '注册成功',
        code: 200
    })
}



module.exports = signup
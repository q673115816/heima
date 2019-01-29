const request = require('../../utils/request')

const user = require('../../service/user')

const apiSignup = async (req, res) => {
    console.log('注册请求:');
    const {
        body
    } = req
    const {
        nickname,
        email,
        password
    } = body

    try {
        const data = await user.signup({
            nickname,
            email,
            password
        })

        res.status(200).json({
            data,
            msg: '注册成功',
            code: 200
        })

    } catch (err) {

        console.log('错误：', err);
        res.send(err)

    }
    // request({
    //         method: 'post',
    //         url: url,
    //         data: body,
    //     })
    //     .then(({
    //         status: code,
    //         data
    //     }) => {
    //         console.log('注册成功：', data);
    //         res.status(code).json({
    //             data,
    //             msg: '注册成功',
    //             code
    //         })
    //     }).catch(err => {
    //         console.log('错误：', err);
    //         res.send(err)
    //     })
}



module.exports = apiSignup
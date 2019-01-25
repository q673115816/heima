const request = require('../../utils/request')
const url = '/users/signup'


const apiSignup = async (req, res) => {
    console.log('注册请求:');
    const {
        body
    } = req
    const {
        signupEmail: email,
        signupPassword: password,
        signupNickname: nickname,
    } = body
    // const data = {
    //     email,
    //     password,
    //     nickname
    // }
    const data = {
        email,
        password,
        nickname
    }
    console.log(data);

    request({
            method: 'post',
            timeout: 3000,
            url: url,
            data,
        })
        .then(({
            status: code,
            data
        }) => {
            console.log('注册成功：', data);

            res.send({
                code,
                data,
                msg: '注册成功'
            })
        }).catch(err => {
            console.log('错误：', err);

            res.send(err)
        })
}



module.exports = apiSignup

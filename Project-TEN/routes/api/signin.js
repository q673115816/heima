const axios = require('axios')
const {
    APIURL
} = require('../../config')
const url = '/users/signin'


const apiSignin = async (req, res) => {
    console.log('登录请求:');
    const {
        body
    } = req
    const {
        signinEmail: email,
        signinPassword: password,
    } = body
    // const data = {
    //     email,
    //     password,
    //     nickname
    // }
    const data = {
        email,
        password
    }
    console.log(data);

    axios({
            baseURL: APIURL,
            method: 'post',
            timeout: 3000,
            url: url,
            data,
        })
        .then(({
            status: code,
            data
        }) => {
            console.log('登录成功：', data);

            res.send({
                code,
                data,
                msg: '登录成功'
            })
        }).catch(err => {
            console.log('错误：', err);

            res.send(err)
        })
}



module.exports = apiSignin
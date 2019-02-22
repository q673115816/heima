const request = require('../utils/request')
const url = '/users/signin'


const signin = async (req, res) => {
    console.log('登录请求:');
    const {
        body
    } = req

    console.log(data);

    request({
            method: 'post',
            url: url,
            data: body,
        })
        .then(({
            status: code,
            data
        }) => {
            console.log('登录成功：', data);

            res.status(code).json({
                data,
                msg: '登录成功：'

            })
        }).catch(err => {
            console.log('错误：', err);

            res.send(err)
        })
}



module.exports = signin
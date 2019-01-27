const request = require('../../utils/request')
const url = '/users/signup'


const apiSignup = async (req, res) => {
    console.log('注册请求:');
    const {
        body
    } = req
    request({
            method: 'post',
            url: url,
            data: body,
        })
        .then(({
            status: code,
            data
        }) => {
            console.log('注册成功：', data);
            res.status(code).json({
                data,
                msg: '注册成功',
                code
            })
        }).catch(err => {
            console.log('错误：', err);
            res.send(err)
        })
}



module.exports = apiSignup
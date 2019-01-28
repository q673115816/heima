const request = require('../utils/request')

async function findUserBynickname(req, res) {
    let {
        query: params
    } = req;
    console.log(params);
    const {nickname = '' } = params
    if(!nickname) {
        params = {}
    }
    request({
        url: '/users',
        params
    }).then(result => {
        console.log(result);
        const {
            status,
            data
        } = result
        res.status(status).json({
            msg: '查询成功',
            data
        })
    })
}

async function findUserByusername(req, res) {
    const params = req.query
}




module.exports = {
    findUserBynickname
}

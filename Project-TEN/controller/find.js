const user = require('../service/user')
async function find(req, res) {
    console.log('查询昵称', new Date().toLocaleString());

    const {
        nickname
    } = req.body
    
    const { data } = await user.findUserBynickname(nickname)
    
    res.status(200).json({
        data,
        msg: '查询成功',
        code: 200
    })
}

module.exports = find
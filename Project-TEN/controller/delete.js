const request = require('../utils/request')
const user = require('../service/user');
async function deleteUser(req, res) {
    console.log('进入删除', new Date().toLocaleString());
    const id = req.params.id
    const {
        data
    } = await user.deteleUserById(id)
    res.status(200).json({
        data,
        msg: '删除成功',
        code: 200
    })
}
module.exports = deleteUser
const user = require('../service/user')

async function profile(req, res) {
    console.log('.profile');
    const id = req.params.id
    const { body } = req
    console.log(id);
    console.log(body);

    const {data} = await user.updateUser(id, body)
    res.status(200).json({
        data,
        msg: '更新成功',
        code: 200
    })
}



module.exports = profile
const user = require('../service/user')

async function profile(req, res) {
    console.log('.profile');
    const id = req.params.id
    const { body } = req
    console.log(id);
    console.log(body);

    const result = await user.updateUser(id, body)
    console.log(result);
    
    // res.status(200).json({
    //     msg: '更新成功',
    //     result,
    //     code: 200
    // })
}



module.exports = profile
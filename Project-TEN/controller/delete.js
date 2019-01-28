const request = require('../utils/request')
async function deleteUser(req, res) {
    console.log('进入删除', new Date().toLocaleString());
    
    console.log(req);
    return false;
    const {
        data
    } = await request({
        method: 'DELETE',
        url: ''
    })
}
module.exports = deleteUser
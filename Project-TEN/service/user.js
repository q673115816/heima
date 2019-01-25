const rquuest = require('../utils/request')

async function findUserByUserId(userid) {
    return await request({
        url: '/users',
        param: {
            userid
        }
    })
}





module.exports = {
    findUserByUserId
}
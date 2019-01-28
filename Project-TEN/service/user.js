const request = require('../utils/request')

async function signup(user) {
    console.log(user);
    
     const { data } = await request({
            method: 'POST',
            url: '/users/signup',
            data: user,
        })
        return data
}


async function findUserBynickname(nickname) {
    const { data } = await request({
        url: '/users',
        params: nickname
    })
    return data
}

async function findUserByusername(username) {
    const {
        data
    } = await request({
        url: '/users',
        params: username
    })
    return data
}

async function deteleUserById(id) {
    const result = request({
        method: 'DELETE',
        url: `/users/${id}`
    })
    return result
}




module.exports = {
    signup,
    deteleUserById,
    findUserBynickname,
    findUserByusername
}
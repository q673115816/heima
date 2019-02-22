const request = require('../utils/request')

async function signup(user) {
    console.log(user);
    
     const {
         result
     } = await request({
            method: 'POST',
            url: '/users/signup',
            data: user,
        })
        return result
}


async function findUserBynickname(nickname) {
    const { result } = await request({
        url: '/users',
        params: nickname
    })
    return result
}

async function findUserByusername(username) {
    const {
        result
    } = await request({
        url: '/users',
        params: username
    })
    return result
}

async function findUserById(id) {
    const {
        result
    } = await request({
        url: `/users/${id}`
    })
    return result
}

async function deteleUserById(id) {
    const result = await request({
        method: 'DELETE',
        url: `/users/${id}`
    })
    return result
}

async function updateUser(id, data) {
    console.log('updateUser');
    
    const result = await request({
        method: 'PATCH',
        url: `/users/${id}/profile`,
        data
    }) 
    return result
}




module.exports = {
    signup,
    deteleUserById,
    findUserById,
    findUserBynickname,
    findUserByusername,
    updateUser
}
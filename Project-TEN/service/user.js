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

async function findUserById(id) {
    const {
        data
    } = await request({
        url: `/users/${id}`
    })
    return data
}

async function deteleUserById(id) {
    const data = await request({
        method: 'DELETE',
        url: `/users/${id}`
    })
    return data
}

async function updateUser(id, data) {
    const data = await request({
        method: 'PATCH',
        url: `/users/${id}/profile`,
        data
    }) 
}




module.exports = {
    signup,
    deteleUserById,
    findUserById,
    findUserBynickname,
    findUserByusername
}
import nickname from './nickname'
import username from './username'
export default function (state = {}, action = {}) {
    return {
        username: username(state.username, action),
        nickname: nickname(state.nickname, action)
    }
}
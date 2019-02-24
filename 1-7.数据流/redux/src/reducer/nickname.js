export default function (state = [], action) {
    const {
        type,
        payload
    } = action
    switch (type) {
        case 'change_nickname':
            return payload;
        default:
            break;
    }
}
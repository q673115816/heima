module.exports = timeMiddleware = (store) => (next) => (action) => {
    console.log('time', new Date().getTime());
    next(action)
}
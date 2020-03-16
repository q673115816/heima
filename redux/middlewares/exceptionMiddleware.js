module.exports = exceptionMiddleware = (store) => (next) => (action) => {
    try {
        // loggerMiddleware(action)
        next(action)
    } catch (err) {
        console.log('错误报告', err);
    }
}
const axios = require('axios')
const {
    APIURL
} = require('../config/config.default')
const instance = axios.create({
    baseURL: APIURL
});

module.exports = instance
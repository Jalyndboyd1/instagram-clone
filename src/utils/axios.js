const axios = require('axios').default

const baseInstance = axios.create({
    baseURL: 'http://localhost:4000'
})

module.exports = baseInstance
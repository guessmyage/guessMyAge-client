const axios = require('axios').create({
    baseURL: 'http://localhost:3000',
    headers: {
        token : localStorage.getItem('token')
    }
})

module.exports = axios

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const result = require('dotenv').config()

    if (result.error) {
        throw result.error
    }
}

require('./server')
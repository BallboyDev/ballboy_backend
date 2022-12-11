const mongoose = require('mongoose')
const { logs } = require('../utils')

const connect = () => {
    const {
        MONGO_URL,
        MONGO_PORT,
        MONGO_USERNAME,
        MONGO_PASSWORD,
        MONGO_DATABASE
    } = process.env

    const connect_url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URL}:${MONGO_PORT}/admin`

    mongoose.connect(connect_url, {
        dbName: MONGO_DATABASE,
        // userNewUrlParser: true,
        // userCreateIndex: true
    }, (err) => {
        if (err) {
            logs.error(err)
        } else {
            logs.log('connected MongoDB')
        }
    })
}

mongoose.connection.on('error', (err) => {
    logs.error('Connect ERROR', err)
})

mongoose.connection.on('disconnected', () => {
    logs.debug('Try Reconnection...')
    connect()
})

module.exports = connect;
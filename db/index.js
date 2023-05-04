const mongoose = require('mongoose')
const { logs } = require('../utils')

const dbHost = {
    "dev": "mongodb+srv://goorm_admin:Qkfflrkwk@goorm-dev-cluster-qdxgg.mongodb.net/goorm_ide?retryWrites=true",
    "op": "mongodb+srv://goorm_admin:!tmzlak@goorm-cluster-210305.nqc7m.mongodb.net/goorm_ide?retryWrites=true&w=majority",
    "lge": "mongodb+srv://goorm_admin:9dpfwlfma@lge-op-cluster-usiqc.mongodb.net/goorm_test?retryWrites=true",
}

const connect = () => {
    mongoose.connect(dbHost.dev, {}, (err) => {
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
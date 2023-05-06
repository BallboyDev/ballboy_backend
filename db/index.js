const mongoose = require('mongoose')
const { logs } = require('../utils')
mongoose.Promise = global.Promise;

const dbHost = {
    "dev": "mongodb+srv://goorm_admin:Qkfflrkwk@goorm-dev-cluster-qdxgg.mongodb.net/goorm_ide?retryWrites=true",
    "op": "mongodb+srv://goorm_admin:!tmzlak@goorm-cluster-210305.nqc7m.mongodb.net/goorm_ide?retryWrites=true&w=majority",
    "lge": "mongodb+srv://goorm_admin:9dpfwlfma@lge-op-cluster-usiqc.mongodb.net/goorm_test?retryWrites=true",
}

const connect = async (service) => {
    mongoose.connect(dbHost[service], {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }, (err) => {
        if (err) {
            logs.error(err)
        } else {
            logs.log('connected MongoDB')
        }
    })
}

const disconnect = () => {
    mongoose.disconnect();
}

mongoose.connection.on('error', (err) => {
    logs.error('Connect ERROR', err)
    connect()
})

mongoose.connection.on('disconnected', () => {
    logs.log('disconnected MongoDB')
})

module.exports = {
    connect,
    disconnect
};
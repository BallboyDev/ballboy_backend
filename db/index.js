const mongoose = require('mongoose')
const { logs } = require('../utils')
mongoose.Promise = global.Promise;

const dbHost = {
    "dev": "mongodb+srv://goorm_admin:Qkfflrkwk@goorm-dev-cluster-qdxgg.mongodb.net/goorm_ide?retryWrites=true",
    "op": "mongodb+srv://goorm_admin:!tmzlak@goorm-cluster-210305.nqc7m.mongodb.net/goorm_ide?retryWrites=true&w=majority",
    "lge": "mongodb+srv://goorm_admin:9dpfwlfma@lge-op-cluster-usiqc.mongodb.net/goorm_test?retryWrites=true",
}

// const connect = () => {
//     mongoose.connect(dbHost.op, {}, (err) => {
//         if (err) {
//             logs.error(err)
//         } else {
//             logs.log('connected MongoDB')
//         }
//     })
// }

// mongoose.connection.on('error', (err) => {
//     logs.error('Connect ERROR', err)
// })

// mongoose.connection.on('disconnected', () => {
//     logs.debug('Try Reconnection...')
//     connect()
// })

// module.exports = connect;

async function connectDb(where) {
    if (where === "codepro") {
        where = "lge";
    }
    if (!where) {
        throw new Error("params required.");
    }
    return new Promise((resolve, reject) => {
        mongoose.connect(dbHost[where], {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        mongoose.connection.once("open", resolve);
        mongoose.connection.on(
            "error",
            reject ||
            ((e) => {
                logs.error("error", e);
                process.exit();
            })
        );
    });
}

/**
 * db 연결 해제
 */
async function disconnectDb() {
    return mongoose.disconnect();
}

module.exports = {
    connectDb,
    disconnectDb,
};

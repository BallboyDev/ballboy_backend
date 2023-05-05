const mongoose = require("mongoose");
const { dbHost, redisClusterConfig } = require("/opt/configs/config.json");
mongoose.Promise = global.Promise;

const ioredis = require("ioredis");
const session = require("express-session");
const redisConnector = require("connect-redis")(session);

const redisStore = new redisConnector({
    client: new ioredis.Cluster(redisClusterConfig),
});

// mongoose.set("debug", true);

/**
 * db에 연결하는 함수
 * @param {string} where 어떤 db에 접속할 지. 'op', 'dev', 'lge' 중 하나 입력.
 */
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
                console.log("error", e);
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
    redisStore,
};

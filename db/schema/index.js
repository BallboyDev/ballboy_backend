// const test = require('./testInfo')
const exam = require('./examInfo')
const user = require('./userInfo')

module.exports = {
    db: {
        // test: test.getDb()
        exam: exam.getDb(),
        user: user.getDb()
    },
    field: {},
    constant: {
        user: user.getConstants()
    }
}
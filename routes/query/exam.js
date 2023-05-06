const { db } = require('../../db/schema')

module.exports = {
    findOne: (filter, select = {}, sort = {}) =>
        db.exam.findOne(filter).select(select).sort(sort).lean().exec()
}
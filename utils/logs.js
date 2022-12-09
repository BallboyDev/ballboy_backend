const moment = require('moment')

const logs = {
    log: (param) => {
        console.log(param)
    },

    debug: (param) => {
        console.log(`[ ${moment().format('YYYY-MM-DD hh:mm:ss')} ] [DEBUG] >>> ${param}`)
    },

    warning: () => {
        console.log(`[ ${moment().format('YYYY-MM-DD hh:mm:ss')} ] [WARNING] >>> ${param}`)
    },

    error: () => {
        console.log(`[ ${moment().format('YYYY-MM-DD hh:mm:ss')} ] [ERROR] >>> ${param}`)
    },
}

module.exports = logs
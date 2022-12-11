const moment = require('moment')

const logs = {
    log: (...params) => {
        if (!logSet('log')) return

        console.log(`[ LOG ] / [ ${moment().format('YYYY-MM-DD hh:mm:ss')} ]`)
        params.map((param) => {
            console.log('    ', param)
        })
    },

    debug: (...params) => {
        if (!logSet('debug')) return

        console.log(`[ DEBUG ] / [ ${moment().format('YYYY-MM-DD hh:mm:ss')} ]`)
        params.map((param) => {
            console.log('    ', param)
        })
    },

    warning: (...params) => {
        if (!logSet('warning')) return

        console.log(`[ WARNING ] / [ ${moment().format('YYYY-MM-DD hh:mm:ss')} ]`)
        params.map((param) => {
            console.log('    ', param)
        })
    },

    error: (...params) => {
        if (!logSet('error')) return

        console.log(`[ ERROR ] / [ ${moment().format('YYYY-MM-DD hh:mm:ss')} ]`)
        params.map((param) => {
            console.log('    ', param)
        })
    },
}

const logSet = (log) => {
    const env = process.env.DEBUG_SET.split(',')
    return env.includes(log)
}

module.exports = logs
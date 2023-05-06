const moment = require('moment')

const logs = {
    log: (...params) => {
        if (!logSet('log')) return

        console.group(`[ LOG ] / [ ${moment().format('YYYY-MM-DD hh:mm:ss')} ]`)
        params.map((param) => {
            console.log(param)
        })
        console.groupEnd()
    },

    debug: (...params) => {
        if (!logSet('debug')) return

        console.group(`[ DEBUG ] / [ ${moment().format('YYYY-MM-DD hh:mm:ss')} ]`)
        params.map((param) => {
            console.log(param)
        })
        console.groupEnd()
    },

    warning: (...params) => {
        if (!logSet('warning')) return

        console.group(`[ WARNING ] / [ ${moment().format('YYYY-MM-DD hh:mm:ss')} ]`)
        params.map((param) => {
            console.log(param)
        })
        console.groupEnd()
    },

    error: (...params) => {
        if (!logSet('error')) return

        console.group(`[ ERROR ] / [ ${moment().format('YYYY-MM-DD hh:mm:ss')} ]`)
        params.map((param) => {
            console.log(param)
        })
        console.groupEnd()
    },

    logTest: () => {
        logs.log('log Test >>> log')
        logs.debug('log Test >>> debug')
        logs.warning('log Test >>> warning')
        logs.error('log Test >>> error')
    }
}

const logSet = (log) => {
    const env = process.env.DEBUG_SET.split(',')
    return env.includes(log)
}

module.exports = logs
const moment = require('moment')

exports.log = (param) => {
    console.log(param)
}

exports.debug = (param) => {
    console.log(`[ ${moment().format('YYYY-MM-DD hh:mm:ss')} ] [DEBUG] >>> ${param}`)
}

exports.warning = () => {
    console.log(`[ ${moment().format('YYYY-MM-DD hh:mm:ss')} ] [WARNING] >>> ${param}`)
}

exports.error = () => {
    console.log(`[ ${moment().format('YYYY-MM-DD hh:mm:ss')} ] [ERROR] >>> ${param}`)
}

const router = require('express').Router()
const {logs} = require('../../utils')

router.get('/', (req, res, next) => {
    // res.status
    res.status(200).json({})
})

module.exports = router
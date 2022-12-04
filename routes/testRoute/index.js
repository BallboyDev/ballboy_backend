const router = require('express').Router()

router.get('/', async (req, res, next) => {
    res.status(200).json({
        data: 'test data',
        err: {}
    })
})

router.get('/err', async (req, res, next) => {
    res.status(200).json({
        data: 'err test data',
        err: {}
    })
})

module.exports = router
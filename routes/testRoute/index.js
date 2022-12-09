const router = require('express').Router()
const logs = require('../../utils').logs

router.get('/', async (req, res, next) => {
    res.status(200).json({
        data: {
            method: 'GET',
            param: { ...req.query },
            api: '/test'
        },
    })
})

router.get('/err', async (req, res, next) => {
    res.status(200).json({
        data: 'err test data',
        err: {}
    })
})

module.exports = router
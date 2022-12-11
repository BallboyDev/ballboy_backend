const router = require('express').Router()
const logs = require('../../utils').logs

const setData = () => {
    // default value: 'testRouter init api'

    const env = process.env.DEBUG_SET.split(',')

    return env
}

router.get('/', async (req, res, next) => {
    res.status(200).json({
        data: setData()
    })
})

router.get('/err', async (req, res, next) => {
    res.status(500).json({
        err: {
            ...req.query
        }
    })
})

router.get('/database', (req, res, next) => {

})

module.exports = router
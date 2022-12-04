const router = require('express').Router()

router.get('/', async (req, res, next) => {
    console.log('base')
    res
        .status(201)
        .json({
            data: 'base api "/"',
            err: {

            }
        })
})

module.exports = router
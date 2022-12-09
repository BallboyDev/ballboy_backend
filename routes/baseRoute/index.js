const router = require('express').Router()

router.get('/', async (req, res, next) => {
    res.status(200).json({
        data: {
            method: 'GET',
            param: { ...req.query },
            api: '/'
        },
    })
})

module.exports = router
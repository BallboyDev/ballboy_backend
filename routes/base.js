const router = require('express').Router()
const { db } = require('../db/schema')

router.get('/', async (req, res, next) => {
    // const data = await db.test.findOne()
    // console.log('ballboy data >>> ', data)

    res.status(200).json({
        data: {
            method: 'GET',
            // param: data,
            api: '/'
        },
    })
})

module.exports = router
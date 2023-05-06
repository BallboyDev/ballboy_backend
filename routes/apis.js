const router = require('express').Router()
const service = require('./service')

router.get('/', async (req, res, next) => {
    res.status(200).json({
        data: {
            method: 'GET',
            param: { ...req.query },
            api: '/exam'
        },
    })
})

router.get('/examInfo', async (req, res, next) => {
    const { examIndex, examSeq, examTitle } = req.query

    let examInfo = {}
    if (examIndex || false) {
        // 시험 인덱스 값으로 시험 정보 찾기
        examInfo = await service.getExamInfoByIndex(examIndex)

    } else if (examSeq || false) {
        // 시험 시퀀스 값으로 시험 정보 찾기
        examInfo = await service.getExamInfoBySeq(examSeq)

    } else if (examTitle || false) {
        // 시험 이름으로 시험 정보 찾기
        // examInfo = await service.getExamInfoByTitle(examTitle)

    } else {
        // 에러
    }

    res.status(200).json({ data: { examInfo } })
})

module.exports = router
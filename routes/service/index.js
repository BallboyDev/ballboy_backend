const modExam = require('../query/exam')

const service = {
    getExamInfoByIndex: async (examIndex) => {
        const examInfo = await modExam.findOne({ index: examIndex })

        return examInfo
    },
    getExamInfoBySeq: async (examSeq) => {
        const examInfo = await modExam.findOne({ sequence: examSeq })

        return examInfo
    },
    getExamInfoByTitle: async (examTitle) => {
        // const examInfo = await modExam.findOne({title: /examTitle/})

        // return examInfo
    }
}

module.exports = service
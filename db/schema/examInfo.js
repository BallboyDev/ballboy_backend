const mongoose = require('mongoose')

const field = {
    /* deprecated */
    students: Array, // to_be_removed
    normal_quizlist: Array,
    normal_datalist: Array,
    /** *********** */
    type: String,
    lecture_index: String,
    lecture_subject: String,
    index: String,
    sequence: Number,
    url_slug: String,
    edwith_lectureId: String, // edwith
    author: String,
    title: String,
    // language: String,
    description: String,
    quizlist: { type: Array, default: [] },
    datalist: { type: Array, default: [] },
    create_time: Date,
    start_date: Date,
    waitingDate: Date,
    useWaitingDate: Boolean,
    end_date: Date,
    is_sample: Boolean,
    opened: Array,
    use_opened: Boolean,
    category: String, // assignment -> submit only, exam -> eaxm mode
    allow_exceed_deadline_access: Boolean, // 시험 종료 후 열람 가능 옵션
    allow_exceed_deadline: Boolean, // 시험 종료 후 제출 가능 옵션
    show_student_difficulty: Boolean,
    show_student_scoring: Boolean,
    show_student_limit_time: Boolean,
    exceed_deadline_days: Number,
    exceed_deadline_penalty_percent: Number,
    show_exam_result: String, // none, on_submit, on_end
    showExamResult: {
        beforeEnd: { type: Boolean, default: false },
        afterEnd: { type: Boolean, default: false },
    },
    use_goorm_ide: Boolean,
    use_random_quiz: Boolean,
    use_time_limit: Boolean,
    use_finish: Boolean, // 시험 끝내기 기능 사용 유무
    finishWebhookSrc: String, // 시험 끝내기시 트리거 할 웹 훅 주소
    use_quiz_filter: Boolean,
    quiz_filter: [
        {
            index: String,
            rule: Object,
            score: Number,
            count: { type: Number, default: 1 },
        },
    ],
    limit_time: Number,
    rank: {
        use: { type: Boolean, default: false },
        options: Object,
    },
    accessibleIpAddresses: Array, // Array in Array. each item length is [4] or [8]. [4] is has '*' and band block like '192.168.0.*'. [8] is like '0.0.0.0 ~ 255.255.255.255'

    // 웹캠, 화면캡쳐 사용 여부 및 옵션
    useRecording: {
        webcam: {
            enabled: { type: Boolean, default: false },
            required: { type: Boolean, default: false },
        },
        screen: {
            enabled: { type: Boolean, default: false },
            required: { type: Boolean, default: false },
        },
        mobile: {
            enabled: { type: Boolean, default: false },
            required: { type: Boolean, default: false },
        },
    },
    use_id_verification: Boolean, // 웹캠 사용 시 신분증 검증 진행 여부
    useFirstEnterWaitingRoom: { type: Boolean, default: false }, // 시험에 접근할 때, 대기실 부터 들릴지 여부
    entranceWaitingRoomTimeBeforeExam: { type: Number, default: 60 },
    useRealTimeSupervisor: { type: Boolean, default: false }, // 실시간 감독 기능 사용 여부
    entryPasswords: Object, // Key is group index or 'default'. 'default' is not use 'opened'
    entryPasswordsGuideMessage: Object,
    entryPasswordsValidityTime: Number,
    use_agreement: Boolean, // 시험동의서 true || false
    agreement: String, // 시험동의서내용
    hide_quiz_title: Boolean, // 일반문제 퀴즈 제목숨기기 옵션
    isPublic: { type: Boolean, default: false }, // 로그인 없이 들어갈 수 있는지 여부 (level 등에서 seo 측면에서 사용하기 위함)
    isExperienceable: { type: Boolean, default: false }, // 체험하기
    submissionStatusHiddenInfo: {
        // 제출 현황에서 숨겨진 항목
        sourceCode: Boolean, // 제출한 코드
        score: Boolean, // 점수
    },

    /* 채점 및 순위 산정 방식 관련 필드 */
    /**
     * 패널티 방식 변경에 따른 type 변경
     * Boolean -> Number
     * 패널티 방식이 ICPC, 시간 방식으로 변경되어 0: 없음, 1: ICPC, 2: 시간 방식으로 변경하기 위해 타입 변경
     * @author jack
     */
    use_penalty: { type: Number, default: 0 }, // 시험에 페널티 적용 여부
    use_highest_score: { type: Boolean, default: false }, // 제출된 최고점수를 유효점수로 사용 여부 (기본적으로는 마지막 제출 점수 사용)
    disable_partial_grading: { type: Boolean, default: false }, // 부분점수 비허용 여부
    /**
     * 패널티 방식 변경에 따른 디폴트 값 변경
     * 시간 패널티 방식에는 패널티를 부여하지않기 때문에 ICPC 방식에서만 사용하는 값으로 디폴트는 5%
     * @author jack
     */
    submit_penalty: { type: Number, default: 5 }, // 제출 페널티 점수 (유저가 입력한 값 * 60 * 1000) - 페널티 시간의 단위가 ms
    /**/

    useQna: { type: Boolean, default: false }, // was lecture_info.useExamQna

    enableAutosave: Boolean, // 에디터 자동 저장 기능 활성화/비활성화
    enableAutocomplete: Boolean, // 에디터 자동완성 기능 활성화/비활성화
    enableCopy: { type: Boolean, default: true }, // 에디터에서 복사 허용 여부
    enablePaste: { type: Boolean, default: true }, // 에디터에서 불여넣기 허용 여부,
    similarity_csv_path: String, // 유사도 검사 csv 경로
};

const db = mongoose.model('exam', mongoose.Schema(field))

module.exports = {
    getDb: () => db,
}
const mongoose = require('mongoose')

const duration = 60 * 60 * 24; // seconds

const constants = {
    LEVEL: {
        STUDENT: 1,
        EDUCATOR: 2,
        GOORM_ADMIN: 10,
    },
};

const user_fields = {
    id: String,
    pw: String,
    pw_picture: Number,
    name: String,
    email: String,
    recommend_email: String,
    type: String,
    level: Number,
    friends: Array,
    friend_requested: Array,
    friend_requesting: Array,
    last_access_time: Date,
    uid: Number,
    gid: Array,
    preference: String,
    nation: String,
    affiliation: String,
    access_type: String,
    comment: String,
    image: String,
    workspace: String,
    last_workspace: String,
    mode: Array,
    signup_date: Date,
    state: String,
    service_type: String,
    access_time: Number,
    pricing_type: String,
    access_2015_4: Number,
    access_2015_5: Number,
    access_2015_6: Number,
    access_2015_7: Number,
    access_2015_8: Number,
    access_2015_9: Number,
    access_2015_10: Number,
    access_2015_11: Number,
    access_2015_12: Number,
    netffice_sid: String,
    google_token: String,
    use_tabs: Array,
    lecture_index: String /* goormEDU */,
    group_index: String,
    org: String, // accessed channel
    teacher: Boolean,
    pw_verify_code: String,
    pw_verify_date: Date,
    school_grade: Number,
    school_class: String,
    school_number: Number,
    school_year: Number,
    univ_major: String,
    univ_number: String,
    corp_dept: String,
    corp_number: String,
    channel_admin_added: Boolean,
    disabled: Boolean,
    signature_image: String,
    new_notification: Boolean,
    last_notified_date: Date,
    nearest_notify_reservate_date: Date,
    possession: { type: Number, default: 0 }, // total revenue
    withdraw_price: { type: Number, default: 0 },
    reserve_withdraw_price: { type: Number, default: 0 },
    withdraw_pw: String,
    edwith_neoId: String, // edwith
    crusadersquest_email: { type: String, trim: true },
    mailing: { type: Boolean, default: false },
    serviceMailing: { type: Boolean, default: false },
    login_id: String,
    login_channel: String,
    login_lecture: String,
    canChangeInfo: { type: Boolean, default: false },
    requiredChangePassword: { type: Boolean, default: false },
    language: String,
    realName: String, // 수료증 발급을 위한 이름
    inviteTicketId: String, // 임시 지원자용 초대 티켓ID,

    /* 
        본인인증이 된 채널 (비독립 채널을 위해 array형식으로 구현)
        유저가 본인인증이 되었는지만 체크하고 본인인증을 해야하는 대상인지 체크하는 용도로 사용하면 안됨(본인 인증 대상은 role도 같이 비교하여 판단)
    */
    certificatedChannelList: Array,
};

const db = mongoose.model('user', mongoose.Schema(user_fields))

module.exports = {
    getDb: () => db,
    getConstants: () => constants
}

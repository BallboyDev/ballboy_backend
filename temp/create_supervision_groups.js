// 빈 감독그룹을 일괄 생성한다.

const DB_WHERE = "op"; // op or dev
const EXAM_SEQUENCE = 183118; // 시험 시퀀스
const SUPERVISOR_GROUP_NAME_PREFIX = "감독실-"; // 시작하는 감독그룹 이름
const SUPERVISOR_GROUP_SIZE = 8; // 한 번에 몇 개 만들건지
// ==============================
const axios = require("axios");
const mongoose = require("mongoose");
const { connectDb } = require("../../db/db_access");
mongoose.Promise = global.Promise;
const { EXAM, LECTURE } = require("../../db/SCHEMA");
const db = {
    exam: mongoose.model("exam", EXAM.schema),
    lecture: mongoose.model("lecture", LECTURE.schema),
};
const { waitForType } = require("../../utils/input-system");

// 시험 정보를 가져온다
async function getExam() {
    const exam = await db.exam
        .findOne(
            { sequence: EXAM_SEQUENCE },
            { _id: 0, index: 1, lecture_index: 1, title: 1 }
        )
        .lean()
        .exec();
    if (!exam) {
        throw new Error("시험 정보를 찾을 수 없음");
    }
    return exam;
}

// 평가 정보 가져온다.
async function getAssessment(assessmentIndex) {
    if (!assessmentIndex) {
        throw new Error("!assessmentIndex");
    }
    const assessment = await db.lecture
        .findOne(
            { index: assessmentIndex },
            { _id: 0, index: 1, subject: 1, origin_channel_index: 1 }
        )
        .lean()
        .exec();
    if (!assessment) {
        throw new Error("cannot find assessment");
    }
    return assessment;
}

async function loginWithGoormAdmin() {
    if (!DB_WHERE) {
        throw new Error("ERROR - DB_WHERE undefined");
    }

    const loginApiUrl =
        DB_WHERE === "lge"
            ? "https://codepro-accounts.lge.com/api/login"
            : "https://accounts.goorm.io/api/login";

    const devthAdminAccount = require("/opt/configs/devthAdminAccount.json");
    if (!devthAdminAccount.email || !devthAdminAccount.pw) {
        throw new Error("ERROR - devthAdminAccount not found");
    }

    const {
        data: { result, token },
    } = await axios.post(loginApiUrl, {
        email: devthAdminAccount.email,
        pw: devthAdminAccount.pw,
    });

    if (!result || !token) {
        throw new Error("ERROR - login failed");
    }
    return token;
}

async function createSupervisorGroup(
    token,
    examIndex,
    lectureIndex,
    channelIndex,
    supervisionGroupName
) {
    if (
        !token ||
        !examIndex ||
        !channelIndex ||
        !lectureIndex ||
        !supervisionGroupName
    ) {
        throw new Error(
            "!token || !examIndex || !channelIndex || !lectureIndex ||  !supervisionGroupName"
        );
    }
    let domain = DB_WHERE === "lge" ? "lge.com" : "goorm.io";
    const { data } = await axios({
        method: "post",
        url: `https://${channelIndex}.${domain}/api/supervisionGroup`,
        data: {
            examIndex,
            lectureIndex,
            supervisionGroupName,
        },
        headers: {
            "Content-Type": "application/json",
            Cookie: `goormaccounts.sid=${token}`,
        },
    });
    console.log(
        `${supervisionGroupName} 생성 성공 여부: ${data?.result || false}`
    );
    return data?.result;
}

async function main() {
    try {
        await connectDb(DB_WHERE);
        const exam = await getExam();
        const { index: examIndex, lecture_index: lectureIndex } = exam;
        const assessment = await getAssessment(lectureIndex);
        const token = await loginWithGoormAdmin();
        const { origin_channel_index: channelIndex } = assessment;
        if (!SUPERVISOR_GROUP_NAME_PREFIX?.trim()) {
            throw new Error("감독실 이름 접두어를 입력해주세요.");
        }
        const confirm = await waitForType(
            `- 채널: "${channelIndex}"
- 평가: "${assessment.subject}"
- 시험: "${exam.title}"
- 감독그룹: "${SUPERVISOR_GROUP_NAME_PREFIX}1" ~ "${SUPERVISOR_GROUP_NAME_PREFIX}${SUPERVISOR_GROUP_SIZE}"
일괄 추가하시겠습니까?(yes/no):`
        );
        if (!confirm.match(/yes/i)) {
            console.log("CANCELED");
            return;
        }
        for (const [idx, v] of Object.entries(
            new Array(SUPERVISOR_GROUP_SIZE).fill(true)
        )) {
            await createSupervisorGroup(
                token,
                examIndex,
                lectureIndex,
                channelIndex,
                `${SUPERVISOR_GROUP_NAME_PREFIX}${+idx + 1}`
            );
        }
    } catch (error) {
        console.log(error);
    } finally {
        process.exit();
    }
}

main();

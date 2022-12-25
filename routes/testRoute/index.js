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

router.get('/json', async (req, res, next) => {
    res.status(200).json(tempJsonData)
})

router.get('/database', (req, res, next) => {

})

const tempJsonData = {
    "data": [
        {
            "_id": "shinhan",
            "channelIndex": "shinhan",
            "channelName": "신한은행",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_cfgWW_1649150523026",
                    "subject": "신한은행 직무역량 평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_pJmFa_1649156603686",
                            "title": "역량 평가 시험 (필기)",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "semteul-ms",
            "channelIndex": "semteul-ms",
            "channelName": "마포중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_JFThf_1653418334490",
                    "subject": "다시 풀어보는 2016/2017 정보올림피아드 지역 대회 초등부 기출 문제",
                    "examInfo": [
                        {
                            "examIndex": "ex_gzUeZ_1653418338278",
                            "title": "2017년",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "neulpureun-hs",
            "channelIndex": "neulpureun-hs",
            "channelName": "늘푸른고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_gZWgJ_1641112653806",
                    "subject": "겨울방학 파이썬 특강",
                    "examInfo": [
                        {
                            "examIndex": "ex_lEgWO_1641112743032",
                            "title": "문자열 실습",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_cOjkG_1641112732251",
                            "title": "연산자 실습",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_nDBbD_1641112714009",
                            "title": "기초입출력 실습",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_VEbFM_1641112755717",
                            "title": "제어문실습",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_JiQeb_1641112696219",
                            "title": "출력하기 실습",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_nRHNM_1641112764932",
                            "title": "기초 종합",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_fxske_1652594827800",
                    "subject": "2022파이썬 실습",
                    "examInfo": [
                        {
                            "examIndex": "ex_skOzw_1656287934381",
                            "title": "2022학년도 1학기 알고리즘 논술 수행(3학년4,7반)",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_HuKsH_1653224982995",
                            "title": "연산자 실습",
                            "userCount": 60.0
                        },
                        {
                            "examIndex": "ex_kPmkq_1653225065703",
                            "title": "문자열 실습",
                            "userCount": 59.0
                        },
                        {
                            "examIndex": "ex_HpdGa_1654819995083",
                            "title": "기초 종합",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_uohTe_1655797218576",
                            "title": "2022학년도 1학기 알고리즘 논술 수행(3학년2,9반)",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_efnEl_1655819204000",
                            "title": "2022학년도 1학기 알고리즘 논술 수행(3학년6,10반)",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_nhmis_1653438469769",
                            "title": "제어문실습",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_MiZXs_1656040160507",
                            "title": "2022학년도 1학기 알고리즘 논술 수행(3학년1,8반)",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_afmMl_1655816608027",
                            "title": "2022학년도 1학기 알고리즘 논술 수행(3-5반)",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_Unsfu_1652594914540",
                            "title": "기초입출력 실습",
                            "userCount": 96.0
                        },
                        {
                            "examIndex": "ex_GbOjg_1652594914596",
                            "title": "출력하기 실습",
                            "userCount": 75.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "telepix",
            "channelIndex": "telepix",
            "channelName": "텔레픽스주식회사",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_Safjf_1653872790757",
                    "subject": "텔레픽스 2022 임베디드 SW 엔지니어 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_ldikg_1653875002290",
                            "title": "임베디드 SW 엔지니어 코딩테스트",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ahyla_1648776026054",
                    "subject": "텔레픽스 프론트/백엔드 SW 인재 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_amOda_1648779191507",
                            "title": "프론트/백엔드 SW 인재 1차 코딩테스트",
                            "userCount": 16.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_TJjtf_1643261996816",
                    "subject": "텔레픽스 2022년 AI 엔지니어 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_bJcdk_1643273283558",
                            "title": "텔레픽스 2022년 상반기 공채 코딩테스트",
                            "userCount": 20.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "daily-funding",
            "channelIndex": "daily-funding",
            "channelName": "(주)데일리펀딩",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_wbFon_1620632333357",
                    "subject": "데일리펀딩 코딩챌린지",
                    "examInfo": [
                        {
                            "examIndex": "ex_TQmJb_1653955114249",
                            "title": "데일리펀딩 제14회 코딩챌린지",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_iTlaX_1643170885975",
                            "title": "데일리펀딩 제12회 코딩챌린지",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_hbhfe_1648535161839",
                            "title": "데일리펀딩 제13회 코딩챌린지",
                            "userCount": 9.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "dimigo-assertive-hs",
            "channelIndex": "dimigo-assertive-hs",
            "channelName": "어썰티브",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_Kdidc_1651402254889",
                    "subject": "C언어 벼락치기",
                    "examInfo": [
                        {
                            "examIndex": "ex_eQaXe_1651463206253",
                            "title": "1",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "jnpmedi",
            "channelIndex": "jnpmedi",
            "channelName": "제이앤피메디",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_fyvlQ_1657159546948",
                    "subject": "제이앤피메디 개발자 상시 채용",
                    "examInfo": [
                        {
                            "examIndex": "ex_EHvGI_1657160248460",
                            "title": "2022 제이앤피메디 개발자 상시 채용",
                            "userCount": 6.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_DSbGa_1643162988300",
                    "subject": "2022 제이앤피메디 개발자 상시 채용",
                    "examInfo": [
                        {
                            "examIndex": "ex_ebYha_1643163174690",
                            "title": "제이앤피메디 웹서비스 개발자 상시 채용",
                            "userCount": 23.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Brilb_1652074634708",
                    "subject": "2022 제이앤피메디 개발자 상시 채용",
                    "examInfo": [
                        {
                            "examIndex": "ex_dwnIi_1652074783649",
                            "title": "제이앤피메디 웹서비스 개발자 상시 채용",
                            "userCount": 17.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "smartspace-hs",
            "channelIndex": "smartspace-hs",
            "channelName": "스마트스페이스",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_kPwpx_1653219591663",
                    "subject": "자바강의2",
                    "examInfo": [
                        {
                            "examIndex": "ex_eIBRV_1653357412505",
                            "title": "논리 연산자",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_jQjjA_1653266119479",
                            "title": "연산자",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_cyCnQ_1653357527318",
                            "title": "반복문 - 심화",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_MaNeA_1653268445978",
                            "title": "조건문",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_IRcaY_1654589366421",
                            "title": "코딩 테스트",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_hjFrM_1653265909127",
                            "title": "반복문 - 기초",
                            "userCount": 12.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dKfsL_1653056526921",
                    "subject": "자바강의",
                    "examInfo": [
                        {
                            "examIndex": "ex_VdfEj_1653265235232",
                            "title": "주석과 세미콜론에 대하여",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_YVjxf_1653224637769",
                            "title": "parimary type",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_eQckE_1653264834363",
                            "title": "상수 ~ 형변환",
                            "userCount": 15.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "rachelblue",
            "channelIndex": "rachelblue",
            "channelName": "레이첼블루",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_vfmzc_1655176833457",
                    "subject": "[2022] 레이첼블루 개발자 채용",
                    "examInfo": [
                        {
                            "examIndex": "ex_gKUbk_1655690397268",
                            "title": "Junior Developer",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_pWTaD_1655190046988",
                            "title": "Junior Developer",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_IVEhb_1655703865862",
                            "title": "Senior Developer",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "demo-channel",
            "channelIndex": "demo-channel",
            "channelName": "demo-channel",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_ehlTo_1647329954944",
                    "subject": "[조폐공사] Demo 강좌",
                    "examInfo": [
                        {
                            "examIndex": "ex_dhpjq_1647330045986",
                            "title": "[Demo] 시험",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_lIpud_1647329986112",
                    "subject": "[카카오페이] Demo 강좌",
                    "examInfo": [
                        {
                            "examIndex": "ex_Mddwr_1647330173845",
                            "title": "[Demo] 시험",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_NhYfx_1642991098788",
                    "subject": "구름EDU 기능 세미나",
                    "examInfo": [
                        {
                            "examIndex": "ex_GlWdk_1643078781706",
                            "title": "아이리스 품종 예측",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_HdNWN_1643024247128",
                            "title": "시험1",
                            "userCount": 5.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "pulse9",
            "channelIndex": "pulse9",
            "channelName": "펄스나인9",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_PPMhc_1652406594505",
                    "subject": "2022년 5월 펄스나인 인턴 코딩 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_wGNIF_1652673514159",
                            "title": "Pulse9 코딩테스트",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_PngHO_1649833138608",
                    "subject": "펄스나인 연구팀 인턴 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_Khwdc_1649833249035",
                            "title": "펄스나인 연구팀 인턴 코딩테스트",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_YAiJL_1642405674723",
                    "subject": "펄스나인 2022년 상반기 주니어 백앤드엔지니어 채용 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_kaaFB_1642409876771",
                            "title": "상반기 주니어 백앤드엔지니어 채용 코딩테스트",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "lg",
            "channelIndex": "lg",
            "channelName": "엘지전자",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_NbyJL_1650329255354",
                    "subject": "TEST 평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_iEjYm_1650329480928",
                            "title": "엘지전자 테스트",
                            "userCount": 3.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_zTbgh_1650338305776",
                    "subject": "'22.4월 H&A DX역량인증 Lv.1",
                    "examInfo": [
                        {
                            "examIndex": "ex_TLaTZ_1650346622400",
                            "title": "111",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "logiket",
            "channelIndex": "logiket",
            "channelName": "(주)로지켓",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_QGkwf_1632799396182",
                    "subject": "[로지켓] 물류 플랫폼 프론트엔드 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_gbFWk_1644397618403",
                            "title": "[로지켓] 프론트엔드 코딩테스트",
                            "userCount": 5.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kisb",
            "channelIndex": "kisb",
            "channelName": "한국투자저축은행",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_YbFxw_1649639005187",
                    "subject": "[한국투자저축은행] 2022년 채용연계형 인턴",
                    "examInfo": [
                        {
                            "examIndex": "ex_ebQpz_1649728308876",
                            "title": "[한국투자저축은행] 2022년 채용연계형 인턴 _ IT평가",
                            "userCount": 20.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kftc",
            "channelIndex": "kftc",
            "channelName": "금융결제원",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_JYCeb_1650260104272",
                    "subject": "금융IC카드 안정성시험 전문계약직 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_ydkqR_1650350994171",
                            "title": "금융IC카드 안정성시험 전문계약직 코딩테스트",
                            "userCount": 4.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Gctwx_1649842463595",
                    "subject": "2022년도 하반기 금융결제원 신입직원 코딩테스트 전형",
                    "examInfo": [
                        {
                            "examIndex": "ex_nadzk_1652234834720",
                            "title": "2022년도 하반기 금융결제원 신입직원 코딩테스트 전형",
                            "userCount": 87.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "jica",
            "channelIndex": "jica",
            "channelName": "전주정보문화산업진흥원",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_azQPk_1655433475702",
                    "subject": "전주ICT이노베이션스퀘어 코딩대회",
                    "examInfo": [
                        {
                            "examIndex": "ex_jpaVu_1656654488122",
                            "title": "전주ICT이노베이션스퀘어 코딩대회",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_PtcSf_1655773665327",
                            "title": "전주ICT이노베이션스퀘어 코딩대회",
                            "userCount": 29.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "codingclub",
            "channelIndex": "codingclub",
            "channelName": "봉래쌤의 코딩클럽",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_SDdej_1570608327935",
                    "subject": "파이썬 코딩도장",
                    "examInfo": [
                        {
                            "examIndex": "ex_AUYue_1652677499981",
                            "title": "2022년 5월 11일 - 호준 & 범정",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_hhQFb_1645419954718",
                            "title": "2022년 2월 21일 - 희도, 장현",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "multicampus",
            "channelIndex": "multicampus",
            "channelName": "멀티캠퍼스",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_ihhon_1639994696495",
                    "subject": "[KB국민은행] DIGI Campus SW적성테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_OQdmR_1644902299861",
                            "title": "DIGI Campus 코딩테스트(2/18)",
                            "userCount": 16.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_znVHm_1644472910102",
                    "subject": "[KB] SW 역량 평가 ",
                    "examInfo": [
                        {
                            "examIndex": "ex_flysA_1644475066206",
                            "title": "KB SW 역량 평가 테스트",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "rpnetworks",
            "channelIndex": "rpnetworks",
            "channelName": "(주)알피네트웍스",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_HQxgg_1652666249405",
                    "subject": "[2022]알피네트웍스 SI·SS팀 코딩 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_akubx_1652667013310",
                            "title": "알피네트웍스 SI·SS팀 코딩 테스트",
                            "userCount": 6.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "lgeha",
            "channelIndex": "lgeha",
            "channelName": "LG전자",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_wVZzT_1650413964779",
                    "subject": "H&A본부 DX역량인증",
                    "examInfo": [
                        {
                            "examIndex": "ex_XqAyz_1655358327744",
                            "title": "'22.6월 2차 H&A DX역량인증 Lv.1 시험",
                            "userCount": 595.0
                        },
                        {
                            "examIndex": "ex_hmAVN_1654152502288",
                            "title": "'22.6월 1차 H&A DX역량인증 Lv.1 시험",
                            "userCount": 514.0
                        },
                        {
                            "examIndex": "ex_aWSnu_1658194291884",
                            "title": "'22.7월 H&A DX역량인증 Lv.1 시험",
                            "userCount": 494.0
                        },
                        {
                            "examIndex": "ex_DtuXQ_1650435679149",
                            "title": "'22.4월 H&A DX역량인증 Lv.1 시험",
                            "userCount": 687.0
                        },
                        {
                            "examIndex": "ex_qWjmj_1652849866381",
                            "title": "시험환경 Check(가상시험)",
                            "userCount": 1458.0
                        },
                        {
                            "examIndex": "ex_ZHFlk_1652055314097",
                            "title": "'22.5월 H&A DX역량인증 Lv.1 시험",
                            "userCount": 482.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "rsw",
            "channelIndex": "rsw",
            "channelName": "지역SW산업발전협의회",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_nFigl_1655106344405",
                    "subject": "[지역SW산업발전협의회 테스트용 평가]",
                    "examInfo": [
                        {
                            "examIndex": "ex_gUTPP_1656753687245",
                            "title": "ㅁㄴㅇ",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_PkUWi_1655116439535",
                            "title": "2021학년도 SW·AI 교육 강사 자격시험 (필기 1급)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_ALwPf_1655447597662",
                            "title": "2021학년도 SW·AI 교육 강사 자격시험 (실기 2급)",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_vcoBe_1657011168628",
                    "subject": "제 1회 소프트웨어교육강사 자격시험",
                    "examInfo": [
                        {
                            "examIndex": "ex_iJrej_1657093072217",
                            "title": "3급 필기 시험",
                            "userCount": 281.0
                        },
                        {
                            "examIndex": "ex_oOfWO_1657239209076",
                            "title": "사전 문제 테스트",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_eWfPj_1657092897060",
                            "title": "1급 필기 시험",
                            "userCount": 47.0
                        },
                        {
                            "examIndex": "ex_tJYqX_1657092981121",
                            "title": "2급 필기 시험",
                            "userCount": 182.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "cnshsw-hs",
            "channelIndex": "cnshsw-hs",
            "channelName": "충남과학고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_ttxTt_1641255642951",
                    "subject": "다시 풀어보는 2016/2017 정보올림피아드 지역 대회 고등부 기출 문제",
                    "examInfo": [
                        {
                            "examIndex": "ex_cLyHI_1641255649049",
                            "title": "2017년",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_uwKXb_1641255649058",
                            "title": "2016년",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "iasa",
            "channelIndex": "iasa",
            "channelName": "인천과학예술영재학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_axDtm_1650167479299",
                    "subject": "인공지능과 미래사회F (월, 화)",
                    "examInfo": [
                        {
                            "examIndex": "ex_sTITk_1650413071121",
                            "title": "실습평가 1",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_gQtQc_1650341756743",
                            "title": "실습평가 1",
                            "userCount": 18.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Nmhrb_1650415325069",
                    "subject": "인공지능과 미래사회H(화, 금)",
                    "examInfo": [
                        {
                            "examIndex": "ex_XsdMa_1650584483470",
                            "title": "실습평가 1",
                            "userCount": 17.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ollih_1650414108796",
                    "subject": "인공지능과 미래사회J(수, 목)",
                    "examInfo": [
                        {
                            "examIndex": "ex_cHBmV_1650414210047",
                            "title": "실습평가 1",
                            "userCount": 17.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "nearthlab",
            "channelIndex": "nearthlab",
            "channelName": "nearthlab",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_JfXGg_1525077103649",
                    "subject": "항공우주실, 제품실",
                    "examInfo": [
                        {
                            "examIndex": "ex_gasVR_1650864266491",
                            "title": "2022년 상반기 항공과 제어전공 테스트_박영진님",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_JlgVb_1648027581369",
                            "title": "2022년 상반기 항공과 제어전공 테스트_김진혁님",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_IvgNz_1542948708323",
                    "subject": "소프트웨어실 알고리즘",
                    "examInfo": [
                        {
                            "examIndex": "ex_jfJYF_1641863764406",
                            "title": "SW 코딩 테스트",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_MtegK_1652063850632",
                            "title": "SW 코딩테스트 (재시험용)",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "swedu-ms",
            "channelIndex": "swedu-ms",
            "channelName": "전주우아중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_bNihN_1657603854503",
                    "subject": "2022 여름방학 연수",
                    "examInfo": [
                        {
                            "examIndex": "ex_Ndodo_1657725874850",
                            "title": "1차 수행평가",
                            "userCount": 6.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "yurim-info",
            "channelIndex": "yurim-info",
            "channelName": "(주)유림정보시스템",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_PxHpA_1652253442476",
                    "subject": "2022년도 유림정보시스템 JAVA/SPRING 채용 코딩 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_MFfQq_1652254153440",
                            "title": "2022년도 유림정보시스템 JAVA/SPRING 채용 코딩 테스트",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "hiconsy",
            "channelIndex": "hiconsy",
            "channelName": "Hiconsy",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_FVDlj_1657775404627",
                    "subject": "개발실 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_CthcG_1657775738806",
                            "title": "개발실 시험",
                            "userCount": 3.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "jwg2020-hs",
            "channelIndex": "jwg2020-hs",
            "channelName": "정왕고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_wPKfV_1657367661656",
                    "subject": "2022_컴퓨팅사고력 경진대회",
                    "examInfo": [
                        {
                            "examIndex": "ex_NSXej_1657440276082",
                            "title": "2022-1학기 컴퓨팅사고력 경진대회",
                            "userCount": 9.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_eahUe_1654585212737",
                    "subject": "2022 - 인공지능 미래사회",
                    "examInfo": [
                        {
                            "examIndex": "ex_cyplc_1654588350401",
                            "title": "20220608_인미래 수행평가",
                            "userCount": 37.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "jeonjugo-hs",
            "channelIndex": "jeonjugo-hs",
            "channelName": "전주고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_UzoXl_1648685696235",
                    "subject": "파이썬 수행(1-1)",
                    "examInfo": [
                        {
                            "examIndex": "ex_mfZWD_1648685699741",
                            "title": "파이썬 수행 test",
                            "userCount": 26.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_icGFm_1653628969328",
                    "subject": "야나아두 문제 풀이",
                    "examInfo": [
                        {
                            "examIndex": "ex_ehwaG_1653630189874",
                            "title": "테스트",
                            "userCount": 11.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_PJkjh_1648761359052",
                    "subject": "파이썬(2반)",
                    "examInfo": [
                        {
                            "examIndex": "ex_fCFAH_1648761363450",
                            "title": "파이썬 수행 test",
                            "userCount": 28.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_OAeDC_1647672384520",
                    "subject": "파이썬 수행(뼈대)",
                    "examInfo": [
                        {
                            "examIndex": "ex_nfrGk_1648254714431",
                            "title": "파이썬 수행 test",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ebcaH_1648694214683",
                    "subject": "파이썬 수행 5반",
                    "examInfo": [
                        {
                            "examIndex": "ex_iSeAQ_1648694218896",
                            "title": "파이썬 수행 test",
                            "userCount": 26.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_QVXDY_1648779458902",
                    "subject": "파이썬 수행(4반)",
                    "examInfo": [
                        {
                            "examIndex": "ex_aUjVN_1648779463235",
                            "title": "파이썬 수행 test",
                            "userCount": 24.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_LeIoD_1648763400607",
                    "subject": "파이썬 수행(6반)",
                    "examInfo": [
                        {
                            "examIndex": "ex_Zwdjy_1648763404690",
                            "title": "파이썬 수행 test",
                            "userCount": 26.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Uubhi_1653306250317",
                    "subject": "파이썬 2차고사 대비 문제 모음",
                    "examInfo": [
                        {
                            "examIndex": "ex_RzDtD_1653306255125",
                            "title": "파이썬 코드업 연습문제 모음",
                            "userCount": 81.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_pdcYi_1649022672814",
                    "subject": "파이썬(따로 응시)",
                    "examInfo": [
                        {
                            "examIndex": "ex_fdnba_1649022676899",
                            "title": "파이썬 수행 test",
                            "userCount": 13.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_CCpzh_1648725528953",
                    "subject": "2022  코딩 챌린지",
                    "examInfo": [
                        {
                            "examIndex": "ex_ROoxl_1648725532419",
                            "title": "python 챌린지",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_ddkoG_1648729087537",
                            "title": "C 챌린지",
                            "userCount": 4.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_QRYup_1648685658538",
                    "subject": "파이썬 수행(1-3)",
                    "examInfo": [
                        {
                            "examIndex": "ex_BLYEe_1648685660732",
                            "title": "파이썬 수행 test",
                            "userCount": 25.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_aCvvH_1650059019661",
                    "subject": "5월 벙개 코딩",
                    "examInfo": [
                        {
                            "examIndex": "ex_fJrrD_1650059065777",
                            "title": "python 챌린지",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_NPIKm_1650059045643",
                            "title": "C 챌린지",
                            "userCount": 4.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "buksam",
            "channelIndex": "buksam",
            "channelName": "북삼고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_HqiSL_1646984901699",
                    "subject": "북삼고 정보과학",
                    "examInfo": [
                        {
                            "examIndex": "ex_bYGLT_1655779817107",
                            "title": "2022학년도 1학기 정보과학 프로그래밍",
                            "userCount": 17.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "twinny",
            "channelIndex": "twinny",
            "channelName": "TWINNY",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_JjcBZ_1640076028308",
                    "subject": "[2022] 트위니 로봇플랫폼개발실",
                    "examInfo": [
                        {
                            "examIndex": "ex_hjlIz_1641287445298",
                            "title": "전지완님 코딩테스트",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_cawKf_1643091229212",
                            "title": "웹팀 코딩 테스트",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_kKnMb_1641907625286",
                            "title": "로봇플랫폼개발1팀 코딩테스트",
                            "userCount": 11.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "devcra",
            "channelIndex": "devcra",
            "channelName": "데브크라",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_OhVDu_1648444488184",
                    "subject": "2022년 데브크라 코딩테스트 [프론트엔드]",
                    "examInfo": [
                        {
                            "examIndex": "ex_fSMCD_1652319756287",
                            "title": "경력직",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_bdgIq_1648460838634",
                            "title": "신입, 3년차 미만",
                            "userCount": 8.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_tZxKm_1648444941455",
                    "subject": "2022년 데브크라 코딩테스트 [게임엔진]",
                    "examInfo": [
                        {
                            "examIndex": "ex_NAPyF_1648447648254",
                            "title": "3년차 미만(주니어)",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dHegg_1648444890598",
                    "subject": "2022년 데브크라 코딩테스트 [백엔드]",
                    "examInfo": [
                        {
                            "examIndex": "ex_DRIkq_1648455201192",
                            "title": "신입 및 3년차 미만",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "dataq",
            "channelIndex": "dataq",
            "channelName": "데이터자격검정",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_dAYpB_1655798240830",
                    "subject": "제4회 빅데이터분석기사 실기",
                    "examInfo": [
                        {
                            "examIndex": "ex_ZIjed_1655876468119",
                            "title": "제4회 빅데이터분석기사 실기",
                            "userCount": 2948.0
                        },
                        {
                            "examIndex": "ex_HfCVn_1655971018506",
                            "title": "제4회 빅데이터분석기사 실기(감수)",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_czqLO_1647494643357",
                    "subject": "제24회 데이터분석 전문가(ADP) 실기시험",
                    "examInfo": [
                        {
                            "examIndex": "ex_zePIb_1648188933702",
                            "title": "사전 접속 테스트",
                            "userCount": 210.0
                        },
                        {
                            "examIndex": "ex_voQck_1648020102444",
                            "title": "제24회 데이터분석 전문가 자격 실기검정",
                            "userCount": 251.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_TbNFj_1650957179435",
                    "subject": "제4회 빅데이터 분석기사 모의시험",
                    "examInfo": [
                        {
                            "examIndex": "ex_bcEoA_1652087536792",
                            "title": "제4회 빅데이터분석기사 모의시험",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_OZeBF_1655171387717",
                    "subject": "제25회 데이터분석 전문가(ADP) 실기시험",
                    "examInfo": [
                        {
                            "examIndex": "ex_FUeYF_1655470621481",
                            "title": "관리자용 사전 테스트",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_NtOcQ_1655444765494",
                            "title": "사전 접속 테스트",
                            "userCount": 256.0
                        },
                        {
                            "examIndex": "ex_gFqbw_1655444686930",
                            "title": "제25회 데이터분석 전문가 자격 실기검정",
                            "userCount": 294.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ihHQa_1636615247992",
                    "subject": "빅데이터 분석기사 검수용",
                    "examInfo": [
                        {
                            "examIndex": "ex_YcyRC_1652763589259",
                            "title": "제4회 작업형 코드감수",
                            "userCount": 5.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_jpfVQ_1653887530881",
                    "subject": "goorm-test",
                    "examInfo": [
                        {
                            "examIndex": "ex_Hmlkt_1656326139971",
                            "title": "test",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "iceara-hs",
            "channelIndex": "iceara-hs",
            "channelName": "인천아라고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_WigUT_1650335968407",
                    "subject": "파이썬 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_hDitT_1650842899611",
                            "title": "[수행평가] 문제해결",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dgdGC_1646373090660",
                    "subject": "정보",
                    "examInfo": [
                        {
                            "examIndex": "ex_fKfSj_1646375651149",
                            "title": "[과제01]_I.1 정보 사회",
                            "userCount": 165.0
                        },
                        {
                            "examIndex": "ex_KClbD_1647242265397",
                            "title": "[과제06]_III.1 추상화",
                            "userCount": 144.0
                        },
                        {
                            "examIndex": "ex_rMbon_1652066240474",
                            "title": "[과제10]_III.문제해결과 프로그래밍 (Python)",
                            "userCount": 116.0
                        },
                        {
                            "examIndex": "ex_Igfvl_1647314396996",
                            "title": "[과제09]_III.2 알고리즘 (Python)",
                            "userCount": 138.0
                        },
                        {
                            "examIndex": "ex_fsehH_1646718433360",
                            "title": "[과제02]_I.2 정보 윤리",
                            "userCount": 154.0
                        },
                        {
                            "examIndex": "ex_jgisi_1653895993349",
                            "title": "[수행평가] 문제해결(30점) 본 시험 전 미리 해보기",
                            "userCount": 100.0
                        },
                        {
                            "examIndex": "ex_IHgdw_1646976164659",
                            "title": "[과제03]_II.1 자료와 정보의 표현",
                            "userCount": 152.0
                        },
                        {
                            "examIndex": "ex_hEgtE_1647222350062",
                            "title": "[과제04]_II.2 자료와 정보의 분석",
                            "userCount": 151.0
                        },
                        {
                            "examIndex": "ex_QaYme_1652066506178",
                            "title": "[과제11]_III ~ IV. 문제해결과 프로그래밍 / 컴퓨팅시스템",
                            "userCount": 99.0
                        },
                        {
                            "examIndex": "ex_xfeIg_1647304829999",
                            "title": "[과제07]_III.2 알고리즘 (C)",
                            "userCount": 138.0
                        },
                        {
                            "examIndex": "ex_Aviqn_1655642404703",
                            "title": "기말고사 준비",
                            "userCount": 68.0
                        },
                        {
                            "examIndex": "ex_mKFqZ_1651107846058",
                            "title": "[과제08] [수행평가] 문제해결_연습하기",
                            "userCount": 139.0
                        },
                        {
                            "examIndex": "ex_xulfb_1655022256997",
                            "title": "[수행평가] 문제해결 본 시험",
                            "userCount": 164.0
                        },
                        {
                            "examIndex": "ex_grazl_1648697928755",
                            "title": "[과제05]_III.0 C언어 기초",
                            "userCount": 128.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_KsbuK_1647768532721",
                    "subject": "C언어 알고리즘",
                    "examInfo": [
                        {
                            "examIndex": "ex_phefh_1652660312402",
                            "title": "C언어 알고리즘 [7일차]",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_RSdix_1652078974599",
                            "title": "C언어 알고리즘 [6일차]",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_gCyja_1650848541841",
                            "title": "C언어 알고리즘 [5일차]",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_ebwyL_1649929851937",
                            "title": "C언어 알고리즘 [4일차]",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_ibFMF_1647769053762",
                            "title": "C언어 알고리즘 [1 ~ 3일차]",
                            "userCount": 9.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "bongseo-ms",
            "channelIndex": "bongseo-ms",
            "channelName": "천안봉서중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_NTieb_1636345686300",
                    "subject": "정보",
                    "examInfo": [
                        {
                            "examIndex": "ex_UckhX_1655104064236",
                            "title": "22년 -2-4",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_ImhoZ_1655104201111",
                            "title": "22년_2-2반",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_eptoU_1654835096898",
                            "title": "2-3,5반 수행",
                            "userCount": 72.0
                        },
                        {
                            "examIndex": "ex_chLHr_1655440043948",
                            "title": "결시자 및 미제출자",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_kRAHq_1655693546414",
                            "title": "22년_2-4(프로그래밍2)",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_GSJkv_1655693312121",
                            "title": "22년_2-3(프로그래밍2)",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_MmStP_1655693429770",
                            "title": "22년_2-5(프로그래밍2)",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_ictod_1655693179456",
                            "title": "22년_2-2(프로그래밍2)",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_qKtFa_1655692878959",
                            "title": "22년_2-1(프로그래밍2)",
                            "userCount": 23.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "myrealtrip",
            "channelIndex": "myrealtrip",
            "channelName": "마이리얼트립",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_dXpoL_1608011115739",
                    "subject": "[마이리얼트립] 백엔드 개발자 코딩테스트 (상시채용)",
                    "examInfo": [
                        {
                            "examIndex": "ex_Hhjep_1657674585499",
                            "title": "[마이리얼트립] 백엔드 개발자 코딩테스트4",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_IjMXZ_1641883740177",
                            "title": "[마이리얼트립] 백엔드개발 지원자 천대영님",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_aOeXq_1657529562620",
                            "title": "[마이리얼트립] 백엔드 개발자 코딩테스트3",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "hufs",
            "channelIndex": "hufs",
            "channelName": "한국외국어대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_IEVll_1645934281450",
                    "subject": "[ICT&AI-신찬수] Algorithm 2022-1",
                    "examInfo": [
                        {
                            "examIndex": "ex_IMfjd_1652247960027",
                            "title": "[과제 #7] 히스토그램 (histogram)",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_RKRgi_1652325217916",
                            "title": "[알퀴즈 #1] DP 수행시간 + 점화식 세워보기",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_gikUu_1655293912132",
                            "title": "[2022-2] ICT&AI Algorithm 기말 고사",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_Rdwed_1647408649481",
                            "title": "[과제 #2] 재귀 연습",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_vbcgZ_1648691885886",
                            "title": "[알퀴즈 #1] 복잡도, 점화식, 선택",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_eQehf_1649305488404",
                            "title": "[과제 #5] 3가지 정렬 알고리즘 성능 비교",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_ecxdm_1650506670605",
                            "title": "[중간고사] Algorithm (ICT&AI) 2022-1 알고리즘",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_lVSak_1648718291322",
                            "title": "[과제 #4] median, 최대 구간 합",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_kHiTC_1653297136957",
                            "title": "[과제 #8] 못, 못, 못",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_MtRyn_1646629210533",
                            "title": "[과제 #1] 수행시간 체험 - 다항식 계산",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_IcOXT_1650773796041",
                            "title": "[과제 #6] 왼쪽 맞춤",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_KgPeN_1654054843985",
                            "title": "[과제 9] 배낭 메고 미로 탈출",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_MmHoj_1648029520454",
                            "title": "[과제 #3] Heap과 Selection",
                            "userCount": 6.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_WzKSj_1646613814140",
                    "subject": "[서울] 컴퓨팅사고(2022-1학기 월 9,10교시)",
                    "examInfo": [
                        {
                            "examIndex": "ex_jgglW_1655660968423",
                            "title": "기말고사",
                            "userCount": 96.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_hkFzP_1646614227215",
                    "subject": "[글로벌] 컴퓨팅사고(2022-1학기, 월 5,6교시)",
                    "examInfo": [
                        {
                            "examIndex": "ex_fUwXd_1655655547021",
                            "title": "기말고사",
                            "userCount": 92.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_kgMhS_1643247517914",
                    "subject": "2022입학전SW교육_최지영",
                    "examInfo": [
                        {
                            "examIndex": "ex_iYdkO_1645070242482",
                            "title": "test",
                            "userCount": 74.0
                        },
                        {
                            "examIndex": "ex_bXMYC_1645155333781",
                            "title": "2022입학전_기말고사",
                            "userCount": 70.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Zrzal_1644127291017",
                    "subject": "컴퓨터프로그래밍(김재빈)_화12목3_ 2022년 1학기",
                    "examInfo": [
                        {
                            "examIndex": "ex_jaSLy_1644127317524",
                            "title": "컴퓨터프로그래밍_04주차 자율 과제",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_dESsl_1644127317501",
                            "title": "컴퓨터프로그래밍_06주차 자율 과제",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_ARchu_1644127317482",
                            "title": "컴퓨터프로그래밍_10주차 자율 과제",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_nraHZ_1644127317451",
                            "title": "컴퓨터프로그래밍_05주차 자율 과제",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_hjZHt_1644127317488",
                            "title": "컴퓨터프로그래밍_14주차 자율 과제",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_CSBBj_1644127317462",
                            "title": "컴퓨터프로그래밍_13주차 자율 과제",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_bjELn_1644127317514",
                            "title": "온라인시험_기말고사_컴퓨터프로그래밍",
                            "userCount": 43.0
                        },
                        {
                            "examIndex": "ex_gldca_1644127317544",
                            "title": "컴퓨터프로그래밍_02주차 자율 과제",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_beGXh_1644127317531",
                            "title": "컴퓨터프로그래밍_11주차 자율 과제",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_gCbwl_1644127317469",
                            "title": "컴퓨터프로그래밍_평가과제(25점)",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_RBUgP_1644127317556",
                            "title": "컴퓨터프로그래밍_07주차 자율 과제",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_NXEtq_1644127317475",
                            "title": "컴퓨터프로그래밍_09주차 자율 과제",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_fcahc_1644127317508",
                            "title": "온라인시험_중간고사_컴퓨터프로그래밍",
                            "userCount": 48.0
                        },
                        {
                            "examIndex": "ex_cSGcg_1644127317538",
                            "title": "컴퓨터프로그래밍_03주차 자율 과제",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_TclpR_1644127317494",
                            "title": "컴퓨터프로그래밍_12주차 자율 과제",
                            "userCount": 14.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_wejGE_1645616612798",
                    "subject": "[정보통신공학과] 컴퓨팅사고 2022-1 김세화",
                    "examInfo": [
                        {
                            "examIndex": "ex_ibbSJ_1650807414003",
                            "title": "중간고사",
                            "userCount": 61.0
                        },
                        {
                            "examIndex": "ex_Eaekg_1650328096143",
                            "title": "중간고사 대비 시험",
                            "userCount": 59.0
                        },
                        {
                            "examIndex": "ex_nMjpj_1649726911863",
                            "title": "Python 실행 연습용",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_hchuf_1655638527300",
                            "title": "기말고사",
                            "userCount": 54.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_YUMqW_1645690106410",
                    "subject": "Data Structures and Algorithms - IME 2022",
                    "examInfo": [
                        {
                            "examIndex": "ex_hEiUn_1652022651351",
                            "title": "[DSA] - Assignment 04",
                            "userCount": 46.0
                        },
                        {
                            "examIndex": "ex_ijoHM_1649475502510",
                            "title": "[DSA] - Assignment 03",
                            "userCount": 46.0
                        },
                        {
                            "examIndex": "ex_LHcgq_1648136553266",
                            "title": "[DSA] - Assignment 01",
                            "userCount": 48.0
                        },
                        {
                            "examIndex": "ex_edGad_1647144075202",
                            "title": "[Review 01] - Review Code (Testing Environment)",
                            "userCount": 47.0
                        },
                        {
                            "examIndex": "ex_wMIpR_1650586512958",
                            "title": "[Mid Exam] - DSA 2022",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_fWWYg_1654793788573",
                            "title": "[DSA] - Make Up Mid Exam",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_NaeZc_1648894787691",
                            "title": "[DSA] - Assignment 02",
                            "userCount": 47.0
                        },
                        {
                            "examIndex": "ex_dKMyg_1653236229715",
                            "title": "[DSA] - Assignment 05",
                            "userCount": 45.0
                        },
                        {
                            "examIndex": "ex_kpNFp_1655306355812",
                            "title": "[DSA] - Final Exam",
                            "userCount": 47.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_vDCjh_1643247202213",
                    "subject": "2022_입학전SW교육 (이민나 9:30~12:30)",
                    "examInfo": [
                        {
                            "examIndex": "ex_rzFqh_1645042905254",
                            "title": "기말고사",
                            "userCount": 54.0
                        },
                        {
                            "examIndex": "ex_SYhkW_1644746726057",
                            "title": "중간고사",
                            "userCount": 57.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_xqsMn_1655295852188",
                    "subject": "프로그래밍어론(2022년 여름학기-567) - 김재빈",
                    "examInfo": [
                        {
                            "examIndex": "ex_jcCMg_1656408482330",
                            "title": "프로그래밍어론_중간고사",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_YtRRW_1657166968113",
                            "title": "프로그래밍어론_기말고사",
                            "userCount": 34.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_UYyox_1645594580055",
                    "subject": "컴퓨팅 사고[2022년 1학기]-한영진",
                    "examInfo": [
                        {
                            "examIndex": "ex_wlvai_1650359189534",
                            "title": "중간시험",
                            "userCount": 18.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ifgEf_1638690543158",
                    "subject": "컴퓨터시스템입문 (2021년 겨울학기 123) - 김재빈",
                    "examInfo": [
                        {
                            "examIndex": "ex_vJact_1641381081578",
                            "title": "컴퓨터시스템입문 (기말고사)",
                            "userCount": 25.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_pDIKC_1645535000593",
                    "subject": "컴퓨터 개론 및 실습-2022년도 1학기",
                    "examInfo": [
                        {
                            "examIndex": "ex_hqTYc_1650424298678",
                            "title": "중간고사",
                            "userCount": 46.0
                        },
                        {
                            "examIndex": "ex_QoEUa_1651490083992",
                            "title": "9주차 과제",
                            "userCount": 50.0
                        },
                        {
                            "examIndex": "ex_hkfch_1647685936651",
                            "title": "3주차 과제",
                            "userCount": 52.0
                        },
                        {
                            "examIndex": "ex_fnEga_1650527797537",
                            "title": "중간고사 (2차인원)",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_lKwNG_1647242810106",
                            "title": "2주차 과제",
                            "userCount": 52.0
                        },
                        {
                            "examIndex": "ex_qLuvo_1648169728667",
                            "title": "4주차 과제",
                            "userCount": 52.0
                        },
                        {
                            "examIndex": "ex_FBica_1649718039539",
                            "title": "6주차 과제",
                            "userCount": 51.0
                        },
                        {
                            "examIndex": "ex_ccAlo_1652076217558",
                            "title": "10주차 과제",
                            "userCount": 50.0
                        },
                        {
                            "examIndex": "ex_chcAp_1650100575157",
                            "title": "모의시험",
                            "userCount": 51.0
                        },
                        {
                            "examIndex": "ex_agPkr_1653928034095",
                            "title": "13주차 과제",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_TzniO_1650343088643",
                            "title": "중간고사 연습",
                            "userCount": 50.0
                        },
                        {
                            "examIndex": "ex_MYQsw_1653285359081",
                            "title": "12주차 과제",
                            "userCount": 48.0
                        },
                        {
                            "examIndex": "ex_jpZvX_1649001912296",
                            "title": "5주차 과제",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_BloEj_1646623785186",
                            "title": "1주차 과제",
                            "userCount": 53.0
                        },
                        {
                            "examIndex": "ex_mkfqU_1652693113667",
                            "title": "11주차 과제",
                            "userCount": 47.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_PRapa_1646371966157",
                    "subject": "시스템 테스트 강좌",
                    "examInfo": [
                        {
                            "examIndex": "ex_zREyW_1646372110097",
                            "title": "과제 예시",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_PFjZJ_1647685112947",
                            "title": "220321 과제 테스트",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_lcbUO_1645689920862",
                    "subject": "Computer Programming - IME 2022",
                    "examInfo": [
                        {
                            "examIndex": "ex_lhiVh_1652112060895",
                            "title": "[CP] - Assignment 04",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_nMsDb_1649694597150",
                            "title": "[CP] - Assignment 03",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_eRFvF_1647275097799",
                            "title": "[Week 02] - Review Java Code",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_YTJpX_1653358517455",
                            "title": "[CP] - Assignment 05",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_ucbgs_1654670640055",
                            "title": "[CP] - Make-up Mid Exam",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_GNdmt_1655349411940",
                            "title": "[CP] - Final Exam",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_gQBNb_1648893040712",
                            "title": "[CP] - Assignment 02",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_WQVgA_1650937916450",
                            "title": "[Mid Exam] - CP 2022",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_fvedz_1648054949191",
                            "title": "[CP] - Assignment 01",
                            "userCount": 41.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ofJqV_1645927666924",
                    "subject": "[컴공-신찬수] 고급문제해결기법 2022-1",
                    "examInfo": [
                        {
                            "examIndex": "ex_nmSBQ_1649902973522",
                            "title": "[4월 - 8, 9주차] 트리 가지고 놀아보기",
                            "userCount": 66.0
                        },
                        {
                            "examIndex": "ex_wNlvf_1648106003358",
                            "title": "[3,4월 - 5주차 과제] search, search, search...",
                            "userCount": 67.0
                        },
                        {
                            "examIndex": "ex_EcLkR_1655533417617",
                            "title": "[복습용] 기말고사 4문제",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_ySfId_1649135730200",
                            "title": "[4월 - 7주차] 표절과 탈출",
                            "userCount": 65.0
                        },
                        {
                            "examIndex": "ex_YhDql_1646107106099",
                            "title": "[내부 테스트용] 이 과제는 무시하기 바랍니다!",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_saPMM_1655440085817",
                            "title": "[고급문제해결기법-2022-2] 기말 고사",
                            "userCount": 70.0
                        },
                        {
                            "examIndex": "ex_srTSE_1652349640939",
                            "title": "[5월 - 11, 12주차] 땅 따먹고 선물 고르고...",
                            "userCount": 63.0
                        },
                        {
                            "examIndex": "ex_jseHj_1647500606017",
                            "title": "[3월 - 4주차 과제] 배열, 스캔, 퀸",
                            "userCount": 72.0
                        },
                        {
                            "examIndex": "ex_xOpiK_1651724603981",
                            "title": "[5월 - 10주차] 치맥과 무지개",
                            "userCount": 64.0
                        },
                        {
                            "examIndex": "ex_ioGIl_1648708976840",
                            "title": "[4월 - 6주차 과제] 좀비, 좀비, 좀비",
                            "userCount": 65.0
                        },
                        {
                            "examIndex": "ex_gWipp_1653913853142",
                            "title": "[6월 1-2주차 - 마지막 과제] 길찾기와 함수",
                            "userCount": 64.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Bhczb_1645687256312",
                    "subject": "2022-1 컴퓨팅 사고 목78 (허은주)",
                    "examInfo": [
                        {
                            "examIndex": "ex_gzRuu_1650461696962",
                            "title": "중간고사 78",
                            "userCount": 99.0
                        },
                        {
                            "examIndex": "ex_flRbP_1655215905561",
                            "title": "기말고사",
                            "userCount": 95.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_aDpEj_1646191933574",
                    "subject": "자료구조 (2022-1) - 김희철",
                    "examInfo": [
                        {
                            "examIndex": "ex_qEsQa_1649402234142",
                            "title": "프로그래밍과제 4",
                            "userCount": 53.0
                        },
                        {
                            "examIndex": "ex_faIhF_1652881084932",
                            "title": "프로그래밍과제 6",
                            "userCount": 47.0
                        },
                        {
                            "examIndex": "ex_BhWkZ_1650586129578",
                            "title": "중간시험",
                            "userCount": 55.0
                        },
                        {
                            "examIndex": "ex_QjcSj_1648454120504",
                            "title": "프로그래밍과제 3",
                            "userCount": 53.0
                        },
                        {
                            "examIndex": "ex_gmlTQ_1651202277830",
                            "title": "프로그래밍과제 5",
                            "userCount": 50.0
                        },
                        {
                            "examIndex": "ex_cAkaL_1647165590188",
                            "title": "프로그래밍과제 2",
                            "userCount": 57.0
                        },
                        {
                            "examIndex": "ex_qOKUj_1654441972319",
                            "title": "프로그래밍과제 7",
                            "userCount": 44.0
                        },
                        {
                            "examIndex": "ex_dsgSd_1646388485233",
                            "title": "프로그래밍과제 1",
                            "userCount": 60.0
                        },
                        {
                            "examIndex": "ex_vVWDK_1655424517899",
                            "title": "학기말 시험",
                            "userCount": 55.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_MghDj_1645686538035",
                    "subject": "2022-1 컴퓨팅 사고 목56 (허은주)",
                    "examInfo": [
                        {
                            "examIndex": "ex_Oxner_1650460838653",
                            "title": "중간고사",
                            "userCount": 93.0
                        },
                        {
                            "examIndex": "ex_mGjOA_1655213495043",
                            "title": "기말고사",
                            "userCount": 87.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_lTdfe_1645423962605",
                    "subject": "Data Structure 2022-1  Walid",
                    "examInfo": [
                        {
                            "examIndex": "ex_jjzgZ_1646186184605",
                            "title": "Test Python Program",
                            "userCount": 55.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_xkhVV_1645930693171",
                    "subject": "[컴공학부-신찬수] 자료구조 2022-1",
                    "examInfo": [
                        {
                            "examIndex": "ex_KgLQI_1648520937988",
                            "title": "[잠깐만~ #1] 복잡도, 리스트, 수식",
                            "userCount": 80.0
                        },
                        {
                            "examIndex": "ex_foanj_1655087966231",
                            "title": "[2022-2] 컴공학부 자료구조 기말고사",
                            "userCount": 84.0
                        },
                        {
                            "examIndex": "ex_blgkh_1654077992555",
                            "title": "[과제 #8] 빠른 퇴근 *마지막 과제이니 열심히*",
                            "userCount": 74.0
                        },
                        {
                            "examIndex": "ex_dQQrd_1647577209770",
                            "title": "[과제 #2] 계산기 코드 완성",
                            "userCount": 85.0
                        },
                        {
                            "examIndex": "ex_dcgje_1647927047778",
                            "title": "[금요일_실습 #2] 스택 이용한 괄호 맞추기",
                            "userCount": 84.0
                        },
                        {
                            "examIndex": "ex_lbsRa_1650541948464",
                            "title": "[과제 #4] 가장 긴 균형 부문자열",
                            "userCount": 70.0
                        },
                        {
                            "examIndex": "ex_caPze_1651554446077",
                            "title": "[과제 #5] Play with BST",
                            "userCount": 73.0
                        },
                        {
                            "examIndex": "ex_gcuNw_1651626019141",
                            "title": "[잠깐만~ #2] 이진트리, 이진탐색트리",
                            "userCount": 78.0
                        },
                        {
                            "examIndex": "ex_DpWsU_1653379429135",
                            "title": "[과제 #7] 아군과 적군",
                            "userCount": 69.0
                        },
                        {
                            "examIndex": "ex_hNhfz_1648821030224",
                            "title": "[과제 #3] 연결리스트 완전 정복",
                            "userCount": 78.0
                        },
                        {
                            "examIndex": "ex_AGRtq_1652340268806",
                            "title": "[과제 #6] Dr. Strangelove AVL Tree",
                            "userCount": 65.0
                        },
                        {
                            "examIndex": "ex_whEle_1646627556374",
                            "title": "[과제 #1] 수행시간 체험 - 다항식 계산",
                            "userCount": 98.0
                        },
                        {
                            "examIndex": "ex_LqNJO_1650095524937",
                            "title": "[2022-1] 컴공 자료구조 중간고사",
                            "userCount": 85.0
                        },
                        {
                            "examIndex": "ex_FriIb_1654043959644",
                            "title": "[잠깐만~ #3] union-find, 그래프 순회",
                            "userCount": 73.0
                        },
                        {
                            "examIndex": "ex_HEwtj_1647325615289",
                            "title": "[금요일_실습 #1] 리스트 클래스 구현해보기",
                            "userCount": 91.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gyZuk_1648302508106",
                    "subject": "C_Programming",
                    "examInfo": [
                        {
                            "examIndex": "ex_InnhC_1651161869010",
                            "title": "C_Express_7단원 프로그래밍 문제",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_ObQrf_1649080532344",
                            "title": "C_Express_5단원 프로그래밍 문제",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_tUuGf_1652624886370",
                            "title": "C_Express_8단원 프로그래밍 문제",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_tEieG_1649602458663",
                            "title": "C_Express_6단원 프로그래밍 문제",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_pdGSl_1654275499875",
                            "title": "C_Express_10단원 프로그래밍 문제(과제X, 연습용)",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_QsGDX_1653550241051",
                            "title": "C_Express_9단원 프로그래밍 문제",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_XGdHW_1648906503998",
                            "title": "C_Express_4단원 프로그래밍 문제",
                            "userCount": 22.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_pjbtR_1646698682509",
                    "subject": "Computational Thinking 2022-1 Walid - Theory",
                    "examInfo": [
                        {
                            "examIndex": "ex_qcvuS_1654618646713",
                            "title": "Final Project/Assignment",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_Cfieo_1654566354125",
                            "title": "Assignments - Late Submission",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_GagfH_1650501095327",
                            "title": "Practice Problems (Midterm)",
                            "userCount": 43.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gQcJg_1638959509205",
                    "subject": "컴퓨터프로그래밍및실습 (2021년 겨울학기 5678) - 김재빈",
                    "examInfo": [
                        {
                            "examIndex": "ex_xIsOb_1641382223844",
                            "title": "컴퓨터프로그래밍 및 실습 기말고사",
                            "userCount": 28.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_rafSw_1646599273736",
                    "subject": "자료구조 2022년 1학기",
                    "examInfo": [
                        {
                            "examIndex": "ex_gSThh_1646599278978",
                            "title": "과제 9. 그래프 (9장)",
                            "userCount": 55.0
                        },
                        {
                            "examIndex": "ex_iXBae_1646599278962",
                            "title": "과제 8. 이원탐색트리 (8장)",
                            "userCount": 57.0
                        },
                        {
                            "examIndex": "ex_piJBU_1646599278995",
                            "title": "과제 6. 큐 (6장)",
                            "userCount": 60.0
                        },
                        {
                            "examIndex": "ex_sKSNz_1646599278990",
                            "title": "과제 0. 도형 면적 구하기",
                            "userCount": 76.0
                        },
                        {
                            "examIndex": "ex_llKWo_1646599278941",
                            "title": "과제 2. 순환 함수 (2장)",
                            "userCount": 69.0
                        },
                        {
                            "examIndex": "ex_pVJdd_1646599278973",
                            "title": "과제 5. 스택 연습 (5장)",
                            "userCount": 61.0
                        },
                        {
                            "examIndex": "ex_ifLOf_1646599278934",
                            "title": "기말고사",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_lYITA_1646599278956",
                            "title": "과제 1. Java 기초 연습 (1장)",
                            "userCount": 64.0
                        },
                        {
                            "examIndex": "ex_vkubf_1646599278985",
                            "title": "과제 4. 리스트 응용 (4장)",
                            "userCount": 63.0
                        },
                        {
                            "examIndex": "ex_TEywc_1646599278946",
                            "title": "과제 10. 가중치 그래프 (10장)",
                            "userCount": 57.0
                        },
                        {
                            "examIndex": "ex_uwDfb_1646599278968",
                            "title": "과제 3. 배열 (3장)",
                            "userCount": 65.0
                        },
                        {
                            "examIndex": "ex_MWBdB_1646599278951",
                            "title": "과제 7. 이진트리 (7장)",
                            "userCount": 59.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dokaa_1655224655325",
                    "subject": "컴퓨터프로그래밍_2022-1학기 기말고사",
                    "examInfo": [
                        {
                            "examIndex": "ex_qeEel_1655235831559",
                            "title": "20220616_컴퓨터프로그래밍",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_cHLhx_1649863533380",
                    "subject": "컴퓨터프로그래밍_2022-1학기 중간고사",
                    "examInfo": [
                        {
                            "examIndex": "ex_chjDO_1650192295631",
                            "title": "20220421_컴퓨터프로그래밍",
                            "userCount": 22.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_YZtyL_1645933214688",
                    "subject": "[AI융합전공-SW&AI] 알고리즘 - 신찬수 - 2022-1",
                    "examInfo": [
                        {
                            "examIndex": "ex_kZDnY_1649305438882",
                            "title": "[과제 5] 3가지 정렬 알고리즘 성능 비교",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_OiEWe_1650773755942",
                            "title": "[과제 6] 왼쪽 맞춤",
                            "userCount": 36.0
                        },
                        {
                            "examIndex": "ex_mtVOs_1654054758365",
                            "title": "[과제 9] 배낭 메고 미로 탈출",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_olpXe_1648717946664",
                            "title": "[과제 4] median, 최대 구간 합",
                            "userCount": 36.0
                        },
                        {
                            "examIndex": "ex_DjKOJ_1648029031826",
                            "title": "[과제 3] Heap과 Selection",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_CgXne_1655191009395",
                            "title": "[2022-2] AI융합 - 기말 고사",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_jsJXR_1650413311865",
                            "title": "[중간고사] AI융합-SW&AI 2022-1 알고리즘",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_apMve_1652255318524",
                            "title": "[과제 다시 해보기] 복습용",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_TLiEA_1652245425333",
                            "title": "[잠깐만~ #2] DP 수행시간 + 점화식 세워보기",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_gEHFg_1653297116220",
                            "title": "[과제 8] 못, 못, 못",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_KSljK_1648617817618",
                            "title": "[잠깐만~ #1] 복잡도와 선택",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_mvZTF_1652245243690",
                            "title": "[과제 7] 히스토그램 (histogram)",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_PJjki_1653976308671",
                            "title": "[잠깐만~ #3] 욕심쟁이야~",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_YQhsd_1647326822299",
                            "title": "[과제 2] 재귀 관련 코딩 문제 3가지",
                            "userCount": 40.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_VlglF_1644127412315",
                    "subject": "컴퓨터프로그래밍(김재빈)_화3목12_ 2022년 1학기",
                    "examInfo": [
                        {
                            "examIndex": "ex_TenPB_1644127439627",
                            "title": "컴퓨터프로그래밍_03주차 자율 과제",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_ajREu_1644127439566",
                            "title": "컴퓨터프로그래밍_평가과제(25점)",
                            "userCount": 36.0
                        },
                        {
                            "examIndex": "ex_Jxjvo_1644127439647",
                            "title": "컴퓨터프로그래밍_07주차 자율 과제",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_ekzsF_1644127439604",
                            "title": "온라인시험_기말고사_컴퓨터프로그래밍",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_tHfaT_1644127439599",
                            "title": "온라인시험_중간고사_컴퓨터프로그래밍",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_zhakT_1644127439587",
                            "title": "컴퓨터프로그래밍_12주차 자율 과제",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_bzrFg_1644127439638",
                            "title": "컴퓨터프로그래밍_02주차 자율 과제",
                            "userCount": 42.0
                        },
                        {
                            "examIndex": "ex_vUgeh_1644127439577",
                            "title": "컴퓨터프로그래밍_10주차 자율 과제",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_bbaSX_1644127439621",
                            "title": "컴퓨터프로그래밍_11주차 자율 과제",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_oMyfh_1644127439614",
                            "title": "컴퓨터프로그래밍_04주차 자율 과제",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_XIgDj_1644127439593",
                            "title": "컴퓨터프로그래밍_06주차 자율 과제",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_Lfrih_1644127439571",
                            "title": "컴퓨터프로그래밍_09주차 자율 과제",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_VFHxi_1644127439582",
                            "title": "컴퓨터프로그래밍_14주차 자율 과제",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_vSjJi_1644127439560",
                            "title": "컴퓨터프로그래밍_13주차 자율 과제",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_Mjlne_1644127439551",
                            "title": "컴퓨터프로그래밍_05주차 자율 과제",
                            "userCount": 32.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "markany",
            "channelIndex": "markany",
            "channelName": "마크애니",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_riQfH_1644475046159",
                    "subject": "22년도 마크애니 테스트평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_PxjfI_1644803258107",
                            "title": "테스트 시험2",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_CTikp_1644475561264",
                            "title": "테스트 시험",
                            "userCount": 3.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "tlsaud-hs",
            "channelIndex": "tlsaud-hs",
            "channelName": "신명여자고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_EfyjW_1644539221456",
                    "subject": "2022-1학기 2학년 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_DIqVl_1649638236790",
                            "title": "2022/4/11/중간고사 대비 문제(A반)",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_CCSdk_1648511548358",
                            "title": "2022/3/29/단원연습문제",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_QheZC_1654818176083",
                            "title": "2022-1학기 실기 수행평가(A반)",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_jhOHh_1648770120086",
                            "title": "2022/4/1/연습 문제(D반)",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_BhSKx_1646359581094",
                            "title": "TEST",
                            "userCount": 57.0
                        },
                        {
                            "examIndex": "ex_yNclh_1652829848568",
                            "title": "함수 문제 연습",
                            "userCount": 55.0
                        },
                        {
                            "examIndex": "ex_yZmRl_1653609330348",
                            "title": "2022/5/27/문제",
                            "userCount": 55.0
                        },
                        {
                            "examIndex": "ex_Bujcx_1655248489035",
                            "title": "2022-1학기 수행평가 미응시(D반)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_xoDns_1655249730228",
                            "title": "2022-1학기 수행평가 미응시(A반)",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_rGCsl_1648430171074",
                            "title": "2022/3/28 단원연습문제",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_JhkDu_1649728720955",
                            "title": "2022/4/12/중간고사 대비문제(D반)",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_HCutV_1654818270346",
                            "title": "2022-1학기 실기 수행평가(D반)",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_mWuSj_1648770142505",
                            "title": "2022/4/1/단원연습문제(A반)",
                            "userCount": 28.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ficae_1649393436888",
                    "subject": "2022-3학년 동아리",
                    "examInfo": [
                        {
                            "examIndex": "ex_lBfUE_1649393707626",
                            "title": "Test",
                            "userCount": 10.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "bummul-ms",
            "channelIndex": "bummul-ms",
            "channelName": "범물중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_hIyll_1655393091340",
                    "subject": "2022(1-2)",
                    "examInfo": [
                        {
                            "examIndex": "ex_ijIld_1655393270812",
                            "title": "2022(1-2)",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_tcjas_1655435056079",
                    "subject": "2022(1-3)",
                    "examInfo": [
                        {
                            "examIndex": "ex_aLyEV_1655435322328",
                            "title": "2022(1-3)",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_EzMai_1653445038897",
                    "subject": "테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_ljvkg_1653445729470",
                            "title": "테스트",
                            "userCount": 160.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_GLbgl_1655682983056",
                    "subject": "2022(1-1)",
                    "examInfo": [
                        {
                            "examIndex": "ex_qhgsb_1655683138422",
                            "title": "2022(1-1)",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_kllKx_1657257374961",
                    "subject": "ICT 창업가 캠프",
                    "examInfo": [
                        {
                            "examIndex": "ex_dJCNv_1657258471305",
                            "title": "연습1",
                            "userCount": 3.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_udjop_1655683379195",
                    "subject": "2022(1-5)",
                    "examInfo": [
                        {
                            "examIndex": "ex_hhjUh_1655683543739",
                            "title": "2022(1-5)",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_cxnZM_1655682734917",
                    "subject": "2022(1-4)",
                    "examInfo": [
                        {
                            "examIndex": "ex_AWzEu_1655682946702",
                            "title": "2022(1-4)",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_doohl_1655346801771",
                    "subject": "2022(1-7)",
                    "examInfo": [
                        {
                            "examIndex": "ex_fYmFZ_1655347025544",
                            "title": "2022(1-7)",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_FFPdh_1656053883215",
                    "subject": "2022(re)",
                    "examInfo": [
                        {
                            "examIndex": "ex_erjrY_1656053957972",
                            "title": "22",
                            "userCount": 11.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_jibrv_1655347071801",
                    "subject": "2022(1-6)",
                    "examInfo": [
                        {
                            "examIndex": "ex_bHWRX_1655347329782",
                            "title": "2022(1-6)",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_lGtEH_1654754722116",
                    "subject": "2022",
                    "examInfo": [
                        {
                            "examIndex": "ex_jOplo_1655309859894",
                            "title": "2022(1-8)",
                            "userCount": 22.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "gitauto",
            "channelIndex": "gitauto",
            "channelName": "지아이티",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_JfKUf_1640233482107",
                    "subject": "[2022] (주)지아이티 개발 부분 코딩(직무)테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_OeMyR_1644231210622",
                            "title": "[지아이티] 진단, 커넥티비티SW개발팀 면접 코딩테스트",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_tfEIY_1655077621640",
                            "title": "[지아이티] 시스템개발팀(F/W) 면접 코딩테스트",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "gyungun-ms",
            "channelIndex": "gyungun-ms",
            "channelName": "경운중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_jgpLt_1650506602479",
                    "subject": "2022 경운중 정보수업(2학년)",
                    "examInfo": [
                        {
                            "examIndex": "ex_ScaTk_1654910435234",
                            "title": "[수행평가2] 나도 프로그래머",
                            "userCount": 124.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gKRlF_1650506998887",
                    "subject": "2022 경운중학교 정보수업(1학년)",
                    "examInfo": [
                        {
                            "examIndex": "ex_eFfdJ_1655721797935",
                            "title": "[수행평가] 스크래치",
                            "userCount": 138.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "gbghs-hs",
            "channelIndex": "gbghs-hs",
            "channelName": "경북여자고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_zcFap_1648078763532",
                    "subject": "정보(2021)(다사고)",
                    "examInfo": [
                        {
                            "examIndex": "ex_ZasiJ_1653289662876",
                            "title": "1차 과제",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_eHmhi_1653289980736",
                            "title": "과제1",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "gmeremit",
            "channelIndex": "gmeremit",
            "channelName": "글로벌머니익스프레스",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_KmhmB_1641432463392",
                    "subject": "[2022][GME] 개발 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_YTsPM_1641438571273",
                            "title": "2022년 GME 개발자 테스트",
                            "userCount": 13.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "songwon-hs",
            "channelIndex": "songwon-hs",
            "channelName": "송원고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_hsckp_1567264942579",
                    "subject": "송원고 파이썬3 기초",
                    "examInfo": [
                        {
                            "examIndex": "ex_tTQLl_1651026761967",
                            "title": "2차 과제(반번호이름 입력 후 출력)",
                            "userCount": 168.0
                        },
                        {
                            "examIndex": "ex_vypQS_1650248834796",
                            "title": "1차 과제(두수 더하기 출력)",
                            "userCount": 173.0
                        },
                        {
                            "examIndex": "ex_avxlS_1653872895633",
                            "title": "4차 과제(문자열 함수 실습)",
                            "userCount": 130.0
                        },
                        {
                            "examIndex": "ex_TdohX_1651628896666",
                            "title": "3차 과제(연산자의 종류)",
                            "userCount": 175.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Ovcgy_1614436192158",
                    "subject": "송원고 프로그래밍(2학년)",
                    "examInfo": [
                        {
                            "examIndex": "ex_OmCKU_1650843677981",
                            "title": "수행10) 이중 반복문(직각삼각형 출력하기)",
                            "userCount": 66.0
                        },
                        {
                            "examIndex": "ex_fOtIE_1651026582803",
                            "title": "수행11) 반복문 응용(입력값_피라미드 만들기)",
                            "userCount": 69.0
                        },
                        {
                            "examIndex": "ex_KalYR_1650507396024",
                            "title": "수행9) 입력값에 따른 구구단 출력",
                            "userCount": 64.0
                        },
                        {
                            "examIndex": "ex_lAwVC_1652402511190",
                            "title": "수행13) 세 수 입력받아 최대공약수 구하기",
                            "userCount": 66.0
                        },
                        {
                            "examIndex": "ex_kcUUg_1648166886004",
                            "title": "수행3) 학년반이름 입력받아 출력하기(get,put 함수 활용)",
                            "userCount": 71.0
                        },
                        {
                            "examIndex": "ex_cxihb_1649393329537",
                            "title": "수행7) 조건문에 맞춰 50까지 곱 구하기",
                            "userCount": 66.0
                        },
                        {
                            "examIndex": "ex_FIToc_1651628675058",
                            "title": "수행12) 조건문으로 학점 출력하기",
                            "userCount": 66.0
                        },
                        {
                            "examIndex": "ex_yyefc_1648538913781",
                            "title": "수행4) 변수 자료형 심화 출력",
                            "userCount": 68.0
                        },
                        {
                            "examIndex": "ex_CXkzk_1647908316474",
                            "title": "수행2) 연월일 입력받아 출력",
                            "userCount": 69.0
                        },
                        {
                            "examIndex": "ex_ehMAO_1648772326511",
                            "title": "수행5) 합과 평균구하기(코드작성하기)",
                            "userCount": 71.0
                        },
                        {
                            "examIndex": "ex_QdMPx_1649658246897",
                            "title": "수행8) 입출력_연산자 (환율계산기_코드작성하기)",
                            "userCount": 67.0
                        },
                        {
                            "examIndex": "ex_qIXkw_1649224292026",
                            "title": "수행6)연습문제2(반번호이름 입력해서 출력_코드작성)",
                            "userCount": 66.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "smc",
            "channelIndex": "smc",
            "channelName": "세명컴퓨터고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_hCbnX_1612857299993",
                    "subject": "2021 정보처리 기능사 실기",
                    "examInfo": [
                        {
                            "examIndex": "ex_AdakR_1650371523368",
                            "title": "[시험] 기출문제-2021 4회",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_EJfse_1650366903951",
                            "title": "[시험] 기출문제-2021 3회",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_CPfAm_1652679355644",
                            "title": "[시험] PATH 프로그래밍 기초 문제 모음 3회",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_HnRDZ_1650363016644",
                            "title": "[시험] 기출문제-2021 2회",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_YUakZ_1652064201648",
                            "title": "2021 PATH - 14회",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_lfftC_1653696614999",
                            "title": "[시험] 기출문제-2022 1회",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_MkESg_1652678382693",
                            "title": "[시험] PATH 프로그래밍 기초 문제 모음 2회",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_PURfw_1652061984834",
                    "subject": "(디바이스소프트웨어과) 프로그래밍 - Python",
                    "examInfo": [
                        {
                            "examIndex": "ex_DOsfw_1655341096840",
                            "title": "수행평가3",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_MefWL_1655340990031",
                            "title": "수행평가2",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_AcCNg_1655340866633",
                            "title": "수행평가 1",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_fOiSb_1655341189388",
                            "title": "수행평가4",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_IkXfw_1645910063232",
                    "subject": "1학년 8반, 9반  유춘숙 선생님",
                    "examInfo": [
                        {
                            "examIndex": "ex_fZbsT_1656241051507",
                            "title": "2022년 1학기 2차 수행",
                            "userCount": 46.0
                        },
                        {
                            "examIndex": "ex_cRpQi_1652084394503",
                            "title": "2022년 1학기 1차 수행",
                            "userCount": 46.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ZKXhi_1646181214930",
                    "subject": "2022 응용프로그래밍개발(게임과)",
                    "examInfo": [
                        {
                            "examIndex": "ex_LiRxr_1649814054946",
                            "title": "파일 경로 보안",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_aVMYi_1653374877978",
                            "title": "allowedExtension 함수 작성하여 코드 완성하기",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_juXKM_1653371398817",
                            "title": "errorCodeToMessage function 만들어서 코드 실행",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_vXVhd_1648535105189",
                            "title": "반복문 리팩토링 (while, do-while, for, foreach)",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_Hneij_1649309608137",
                            "title": "delete 완성하기",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_gbdjc_1648100372863",
                            "title": "배열에 값을 추가하기",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_ZbiZP_1655164495845",
                            "title": "프로그래밍 언어 활용 형성평가",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_nCyME_1649203112723",
                            "title": "form 태그의 post 방식으로 데이터 전송하여 파일 작성",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_bwhiE_1648697838657",
                            "title": "프로그래밍 언어의 활용 (1, 2단원) 문제 풀기 (2-9)",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_MAHyf_1650347872526",
                            "title": "html form 보충 1",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_FWQBF_1652160394180",
                            "title": "html form 보충 2",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_NBSEZ_1652765026783",
                            "title": "MySQL 설치 후 기본 DB 확인",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_yeiUZ_1649140611763",
                            "title": "update 페이지 생성",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_bgKWU_1652764924751",
                            "title": "파일 업로드 #1",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_kwqlF_1647498780061",
                            "title": "PHP 조건문",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_IRTfl_1652850677200",
                            "title": "[Python] cmd에서 파일 실행하기",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_fwdxf_1654576676873",
                            "title": "자유로운 폼이 있는 문서 만들기 (개인 프로젝트)",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_xZdem_1648697010209",
                            "title": "프로그래밍 언어의 활용 (1, 2단원) 문제 풀기 (2-8)",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_utdLO_1654149138439",
                            "title": "경진대회 지원서 입력 폼 만들기 (html, php)",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_kXZkt_1650343211406",
                            "title": "파일 경로 보안 2",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_hzhsY_1648098179112",
                            "title": "배열 생성하고 값 꺼내기",
                            "userCount": 36.0
                        },
                        {
                            "examIndex": "ex_IzhYs_1653974406725",
                            "title": "input type image 버튼 만들기",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_FlLsR_1649136634470",
                            "title": "create 페이지 생성",
                            "userCount": 34.0
                        },
                        {
                            "examIndex": "ex_klWgQ_1653975393661",
                            "title": "카페 메뉴 계산 페이지 만들기(html, php)",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_fzfjS_1652852920262",
                            "title": "[Python] 터틀로 별 그리기",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_kraWN_1649382110353",
                            "title": "XSS 공격 방어하기",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_dzjxe_1648103548145",
                            "title": "파일의 목록을 반복문을 이용해 구현하기",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_lcDMg_1653973963254",
                            "title": "버튼 태그 사용하여 이미지 버튼 만들기",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_tLPGp_1653972386529",
                            "title": "자바스크립트 버튼 누르면 총 가격 계산하기",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_mcjNX_1653548034758",
                            "title": "img  태그 사용해서 파일 업로드한 결과 출력하기",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_slyHM_1652856393897",
                            "title": "[Python] 코드업 기초 100제 문제 풀기",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_XfYiu_1647494287786",
                            "title": "PHP data types [1]",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_fSnuJ_1646961180859",
                            "title": "3/11 수업 과제 (이메일 서버 설치하여 이메일 보내기)",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_ZvOlu_1649313704412",
                            "title": "CRUD 완성 - 리팩토링",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_aAeje_1648532277761",
                            "title": "3개의 함수를 작성하여 코드를 완성하기",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_gWmSd_1652332669359",
                            "title": "html form 보충 3",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_DvdXX_1646711353081",
                            "title": "3/8(화) 온라인 수업 과제",
                            "userCount": 23.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_mYFLg_1646129417784",
                    "subject": "스마트 문화 앱 콘텐츠 제작",
                    "examInfo": [
                        {
                            "examIndex": "ex_dnEeQ_1652668542966",
                            "title": "2022년 1학기 1차 수행평가",
                            "userCount": 44.0
                        },
                        {
                            "examIndex": "ex_SIyVf_1656233126699",
                            "title": "2022년 1학기 2차 수행평가",
                            "userCount": 44.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_WhwRF_1621496513491",
                    "subject": "[인공지능소프트웨어과] 3학년 머신러닝",
                    "examInfo": [
                        {
                            "examIndex": "ex_KxgjU_1652156755244",
                            "title": "프로그래밍 시험_C 프로그래밍 1차",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_JRRLg_1652268088228",
                            "title": "프로그래밍 시험_C 프로그래밍 4차",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_CSiuL_1652162593553",
                            "title": "프로그래밍 시험_C 프로그래밍 3차",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_daBHA_1652753632376",
                            "title": "5/16~20 성직, 자율, 진로, 운동, 복습용 세트 1",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_cSiWH_1652410273104",
                            "title": "DB 1차 모의고사",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_MOQlh_1652958152940",
                            "title": "프로그래밍 기출 문제",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_XVoOj_1652159555931",
                            "title": "프로그래밍 시험_C 프로그래밍 2차",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_dFcCs_1652268158268",
                            "title": "프로그래밍 시험_C 프로그래밍 5차",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_Igkqa_1652315962110",
                            "title": "프로그래밍 시험_C 프로그래밍 6차",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_borfh_1652317150240",
                            "title": "프로그래밍 시험_C 프로그래밍 7차",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_qpWBj_1652338870383",
                            "title": "프로그래밍 시험_C 프로그래밍  8차",
                            "userCount": 39.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_eaNXu_1646119110181",
                    "subject": "게임소프트웨어과 1학년 프로그래밍(Python)",
                    "examInfo": [
                        {
                            "examIndex": "ex_KBQKe_1653281976565",
                            "title": "매개 변수가 없는 함수 star() 만들어 결과 확인하기 (p.109)",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_vBaUM_1653886037297",
                            "title": "p.115 star2.py 작성하기 (고정된 인자와 가변 인자를 매개변수로 받는 함수)",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_qwbPj_1655684164256",
                            "title": "4. 함수 - 대단원 종합 평가",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_bBFhe_1655990528214",
                            "title": "2022년 1학기 2차 수행평가",
                            "userCount": 45.0
                        },
                        {
                            "examIndex": "ex_nnggp_1655099375287",
                            "title": "p. 128  혼자해보기 2. 눈의 수와 주사위를 굴릴 반복 횟수를 매개 변수로 받은 후 나온 주사위 수들을 리스트로 리턴하는 함수 dice_list를 만들어보자.",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_ehaFd_1651788906306",
                            "title": "2022년 1학기 1차 수행평가",
                            "userCount": 46.0
                        },
                        {
                            "examIndex": "ex_UjpVh_1649747536753",
                            "title": "p.57 리스트, 튜플, 딕셔너리, 셋의 비교",
                            "userCount": 43.0
                        },
                        {
                            "examIndex": "ex_viHBe_1653887289543",
                            "title": "대단원 종합 평가 4번 (p.131)  가변인자 매개변수 구구단 함수",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_enIkf_1653889958036",
                            "title": "p.118 위치 인자, 키워드 인자 사용하여 함수 호출해보기",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_FrKdv_1655085527845",
                            "title": "2022년 1학기 1차 수행평가(재시험)",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_jOBLO_1647839535408",
                            "title": "2장 변수와 자료형 단원 정리 (문제 풀고 캡쳐하여 파일 제출하기)",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_TNeMz_1655099307518",
                            "title": "p. 128  혼자해보기 1. 이름을 입력받아 성과 이름을 나누어 리턴하는 함수 div_name을 만들어보자.",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_YdqgH_1655090152972",
                            "title": "p. 123  혼자해보기 2. 정의된 함수의 각 요구 사항에 맞게 호출하는 코드 작성",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_lbkHt_1655687836980",
                            "title": "1학기 1~4단원 형성평가",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_DhoPh_1655099702224",
                            "title": "p. 130  실습하기 책상 자리 배치도 작성하는 함수 완성하기",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_FspEg_1656146083919",
                            "title": "2022년 1학기 2차 수행평가 정리",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_lrqHr_1649641639446",
                            "title": "3장 프로그램 구성 단원 정리 (문제 풀고 캡쳐하여 파일 제출하기)",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_waeVb_1657030686986",
                            "title": "2022년 게임소프트웨어과 기능 상상 경진대회",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_hqbnB_1655090098654",
                            "title": "p. 123  혼자해보기 1. 매개변수를 받아 구구단 출력, 생략시 2단 출력하는 gugudan 함수 작성",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_jejIL_1653285842511",
                            "title": "대단원 종합 평가 3번 (p.131)  매개변수가 2개인 구구단 출력",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_kTTTt_1652678514960",
                            "title": "진수 변환 코드를 프롬프트에서 파일로 실행하기",
                            "userCount": 21.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "hankook-networks",
            "channelIndex": "hankook-networks",
            "channelName": "한국네트웍스",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_oacka_1654837282625",
                    "subject": "[2022][HNW]코딩 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_MCaHs_1654837915667",
                            "title": "[2022][HNW]코딩 테스트 1",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ikLCl_1654645199901",
                    "subject": "[한국네트웍스] 코딩테스트 ",
                    "examInfo": [
                        {
                            "examIndex": "ex_lJpdv_1654646211920",
                            "title": "시험 1",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "codeclub",
            "channelIndex": "codeclub",
            "channelName": "코드클럽",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_yfexH_1652079184826",
                    "subject": "2022 부산/울산/경남 중학생 알고리즘 경진대회",
                    "examInfo": [
                        {
                            "examIndex": "ex_uukPz_1653626920283",
                            "title": "예선 <엔트리> <엔트리> <엔트리> <엔트리> <엔트리>",
                            "userCount": 108.0
                        },
                        {
                            "examIndex": "ex_CgCPu_1653625778002",
                            "title": "예선 <스크래치> <스크래치> <스크래치> <스크래치> <스크래치>",
                            "userCount": 53.0
                        },
                        {
                            "examIndex": "ex_dWmby_1652673593225",
                            "title": "2022 부산/울산/경남 중학생 알고리즘 경진대회 시험 테스트(모의 시험)",
                            "userCount": 131.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "shinhands",
            "channelIndex": "shinhands",
            "channelName": "신한DS",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_lAfdv_1653448692820",
                    "subject": "[신한DS] 찾아라~ 디스코왕",
                    "examInfo": [
                        {
                            "examIndex": "ex_cSRFU_1653449043019",
                            "title": "신한DS 찾아라 디스코왕",
                            "userCount": 57.0
                        },
                        {
                            "examIndex": "ex_TlRnm_1653551415103",
                            "title": "신한DS 사전 환경 점검",
                            "userCount": 50.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "leagueofdimi-hs",
            "channelIndex": "leagueofdimi-hs",
            "channelName": "LOD",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_OuTZa_1649424338778",
                    "subject": "C언어 문제 모음",
                    "examInfo": [
                        {
                            "examIndex": "ex_peIUo_1649457777497",
                            "title": "C언어 문제 모음",
                            "userCount": 4.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "lomin",
            "channelIndex": "lomin",
            "channelName": "(주)로민",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_LvLby_1624496444365",
                    "subject": "[2022][로민] 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_MyTIY_1655874216155",
                            "title": "[로민] 개발자 코딩테스트 2022 Part2",
                            "userCount": 28.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "jejunu",
            "channelIndex": "jejunu",
            "channelName": "제주대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_HyfBb_1648604958743",
                    "subject": "제주대학교 신입생 대상 SW경진대회",
                    "examInfo": [
                        {
                            "examIndex": "ex_SRxgd_1648606704836",
                            "title": "2022 제1회 제주대학교 신입생 SW경진대회 (옵저뷰 사용 O)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_nbOif_1648606643563",
                            "title": "2022 제1회 제주대학교 신입생 SW경진대회 (옵저뷰 사용 X)",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "k-digital",
            "channelIndex": "k-digital",
            "channelName": "K-Digital",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_oXfhb_1640597558988",
                    "subject": "(4회차) 쿠버네티스 전문가 양성 과정 3기",
                    "examInfo": [
                        {
                            "examIndex": "ex_LrgGm_1648180092192",
                            "title": "4회차_쿠버네티스 평가",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_GUhcd_1644545282114",
                            "title": "4회차 AWS 평가",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_BVhbP_1645167469538",
                            "title": "4회차 코드형 인프라를 위한 Ansible 활용 평가",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_egcDb_1642733160320",
                            "title": "리눅스 평가",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_gbsde_1643338571473",
                            "title": "웹 서비스 구축 평가",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_eikOH_1645756015912",
                            "title": "컨테이너 기술을 이용한 애플리케이션 운영 평가",
                            "userCount": 22.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_kYiWh_1648776251925",
                    "subject": "(6회차) 쿠버네티스 전문가 양성 과정 4기",
                    "examInfo": [
                        {
                            "examIndex": "ex_rZeuM_1653012778004",
                            "title": "웹 서비스 구축 평가",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_jxOIY_1656635427559",
                            "title": "쿠버네티스 사후 평가",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_lsvNk_1654231399845",
                            "title": "AWS 사후 평가",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_iNbAX_1655436622901",
                            "title": "도커 사후 평가",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_dKmhY_1654836500504",
                            "title": "Ansible 활용 사후평가",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_pGqwi_1652405161419",
                            "title": "리눅스 평가 시험",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_kjblR_1651558793193",
                    "subject": "알고리즘 먼데이",
                    "examInfo": [
                        {
                            "examIndex": "ex_hveaA_1655095235492",
                            "title": "[알고리즘 먼데이] 6주차 문제",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_UDviz_1651565742851",
                            "title": "[알고리즘 먼데이] 1주차 문제",
                            "userCount": 83.0
                        },
                        {
                            "examIndex": "ex_VFkxQ_1653869557703",
                            "title": "[알고리즘 먼데이] 4주차 문제",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_xisbN_1653029723661",
                            "title": "[알고리즘 먼데이] 3주차 문제",
                            "userCount": 43.0
                        },
                        {
                            "examIndex": "ex_gFFQd_1656568968584",
                            "title": "[알고리즘 먼데이] 9주차 문제",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_vybyk_1651559094205",
                            "title": "[코딩테스트 체험해보기]",
                            "userCount": 79.0
                        },
                        {
                            "examIndex": "ex_Cljkp_1658458626682",
                            "title": "[알고리즘 먼데이] 8주차 문제",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_BVehd_1654132732385",
                            "title": "[알고리즘 먼데이] 5주차 문제",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_MjMfd_1655951341436",
                            "title": "[알고리즘 먼데이] 12주차 문제",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_ZklMT_1657508537698",
                            "title": "[알고리즘 먼데이] 10주차 문제",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_QfZMp_1657779895836",
                            "title": "[알고리즘 먼데이] 11주차 문제",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_wABii_1655448901743",
                            "title": "[알고리즘 먼데이] 7주차 문제",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_haels_1652666451396",
                            "title": "[알고리즘 먼데이] 2주차 문제",
                            "userCount": 50.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dDWFk_1655969420871",
                    "subject": "(7회차) AI기술 자연어 처리 전문가 양성 과정 5기",
                    "examInfo": [
                        {
                            "examIndex": "ex_MfZbs_1655969423093",
                            "title": "QUIZ1. Linear Algebra - (1)",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_cEOHF_1655969422941",
                            "title": "[HW 31] Transformer with Transformers",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_hqwZg_1655969423088",
                            "title": "HW5. Determinant, Change of basis, Least Square",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_AQcAd_1655969423128",
                            "title": "HW3. Matrix operations, Linear system, Inverse matrix, Linear combination",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_NZGBl_1655969422962",
                            "title": "HW6. Gram-Schmidt orthonormalization, QR decomposition",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_dpZMr_1655969423054",
                            "title": "HW8. PageRank",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_wtumg_1655969423098",
                            "title": "HW1. 파이썬 알고리즘 구현",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_iAdig_1655969422951",
                            "title": "HW2. 나만의 데이터셋 만들기",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_uRkgK_1655969422946",
                            "title": "[HW 24] NaiveBayes 를 이용한 주제 분류 모델 만들기",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_Svtdk_1655969423153",
                            "title": "HW4. Basis, Span, Linear transformation, Inverse matrix",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_XDkiq_1655969423023",
                            "title": "HW7. Geometry of eigendecomposition, Eigendecomposition",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_YbYYz_1655969423109",
                            "title": "HW9. Geometry of SVD, SVD in higher dimensions, Image compression, Non-square matrix",
                            "userCount": 19.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_rSeKg_1648774904822",
                    "subject": "(4회차) AI기술 자연어 처리 전문가 양성 과정 4기",
                    "examInfo": [
                        {
                            "examIndex": "ex_vbibl_1648774907691",
                            "title": "HW12. Logistic Regression",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_tbXfU_1648774907740",
                            "title": "[HW 25] 뉴스 크롤링 데이터를 이용한 Topic Modeling",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_yOrXa_1648774907622",
                            "title": "[HW27] Language Model with LSTM/GRU",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_YKcWQ_1648774907734",
                            "title": "QUIZ3. Machine Learning",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_zvUVr_1648774907675",
                            "title": "HW13. Polynomial Regression & Regularization",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_fiVds_1648774907583",
                            "title": "HW8. PageRank",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_ETiTx_1648774907591",
                            "title": "[HW 31] Transformer with Transformers",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_dUldm_1648774907826",
                            "title": "[자연어처리] HW32 Day50",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_ueCnm_1648774907683",
                            "title": "HW14. Multiple logistic regression",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_Mkkgu_1648774907597",
                            "title": "HW6. Gram-Schmidt orthonormalization, QR decomposition",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_TInye_1651032949673",
                            "title": "HW19. Logistic Regression vs MLP",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_hTbhS_1648774907797",
                            "title": "QUIZ4. Deep Learning -(1)",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_uRLak_1648774907705",
                            "title": "HW3. Matrix operations, Linear system, Inverse matrix, Linear combination",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_osmHT_1648774907698",
                            "title": "HW9. Geometry of SVD, SVD in higher dimensions, Image compression, Non-square matrix",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_XjqJE_1648774907652",
                            "title": "Competition 1. Multiple Logistic Regression",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_QEFTF_1648774907815",
                            "title": "[HW 30] Sub-word Tokenization",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_xXzjp_1648774907769",
                            "title": "HW16. Clustering",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_XhXXk_1648774907752",
                            "title": "HW17. Logistic regression & MLP",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_blxcu_1648774907775",
                            "title": "HW7. Geometry of eigendecomposition, Eigendecomposition",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_FRifh_1648774907747",
                            "title": "[HW 24] NaiveBayes 를 이용한 주제 분류 모델 만들기",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_juLCk_1648774907763",
                            "title": "[HW 29] Pre-tokenization",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_wOIkC_1648774907640",
                            "title": "HW10. Simple Linear Regression",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_uhiau_1648774907842",
                            "title": "HW15. Dimensionality Reduction",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_fjtxW_1648774907728",
                            "title": "HW11. Multiple Linear Regression",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_feyti_1648774907610",
                            "title": "HW23. GAN",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_PrNbw_1648774907717",
                            "title": "[자연어처리] Day52 Quiz3 (파일 제출 문제)",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_CWbyQ_1648774907848",
                            "title": "HW18. PyTorch 실습",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_uaZcj_1648774907668",
                            "title": "QUIZ2. Linear Algebra - (2)",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_eKAFV_1648774907758",
                            "title": "[자연어처리] Day40 Quiz 1 (파일 제출 문제)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_kEaUJ_1648774907821",
                            "title": "HW5. Determinant, Change of basis, Least Square",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_opsdb_1648774907657",
                            "title": "[HW26] Word2Vec",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_icwoT_1648774907786",
                            "title": "HW20. Neural Network",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_YLHiC_1648774907804",
                            "title": "HW21. CNN & VGG-Network",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_FsAvI_1648774907723",
                            "title": "QUIZ5. Deep Learning -(2)",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_kicMP_1648774907834",
                            "title": "QUIZ1. Linear Algebra - (1)",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_wEEkb_1648774907781",
                            "title": "HW4. Basis, Span, Linear transformation, Inverse matrix",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_FbYco_1648774907646",
                            "title": "HW2. 나만의 데이터셋 만들기",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_QipGI_1648774907629",
                            "title": "[HW 28] RNNs with Attention",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_qjoUT_1648774907810",
                            "title": "HW22. Language Model",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_mjiwn_1648774907615",
                            "title": "HW1. 파이썬 알고리즘 구현",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_hsLuG_1648774907634",
                            "title": "[자연어처리] Day45 Quiz 2 (파일 제출 문제)",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_yjkpx_1648776044580",
                    "subject": "(5회차) AI기술 자연어 처리 전문가 양성 과정 4기",
                    "examInfo": [
                        {
                            "examIndex": "ex_JmzJp_1648776047346",
                            "title": "[자연어처리] Day40 Quiz 1 (파일 제출 문제)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_zXgkI_1648776047425",
                            "title": "HW18. Pytorch Tutorial",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_Dahbu_1648776047371",
                            "title": "HW4. Basis, Span, Linear transformation, Inverse matrix",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_KjddK_1648776047199",
                            "title": "HW6. Gram-Schmidt orthonormalization, QR decomposition",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_llKzz_1648776047386",
                            "title": "HW21. CNN & VGG-Network",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_uDTSL_1648776047340",
                            "title": "HW17. Logistic regression & MLP",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_sdggX_1648776047221",
                            "title": "[HW 28] RNNs with Attention",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_QwRbi_1648776047225",
                            "title": "[자연어처리] Day45 Quiz 2 (파일 제출 문제)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_HeVid_1648776047366",
                            "title": "HW7. Geometry of eigendecomposition, Eigendecomposition",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_InJgf_1648776047304",
                            "title": "[자연어처리] Day52 Quiz3 (파일 제출 문제)",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_hfFky_1648776047205",
                            "title": "HW23. GAN",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_kdmBe_1651033679229",
                            "title": "HW19. Logistic Regression vs MLP",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_VbHVY_1648776047413",
                            "title": "QUIZ1. Linear Algebra - (1)",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_CmLwN_1648776047216",
                            "title": "[HW27] Language Model with LSTM/GRU",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_ewagA_1648776047328",
                            "title": "[HW 25] 뉴스 크롤링 데이터를 이용한 Topic Modeling",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_wYSUg_1648776047319",
                            "title": "QUIZ3. Machine Learning",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_gPIxF_1648776047418",
                            "title": "HW15. Dimensionality Reduction",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_ljmgQ_1648776047308",
                            "title": "QUIZ5. Deep Learning-(2)",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_TaYkd_1648776047333",
                            "title": "[HW 24] NaiveBayes 를 이용한 주제 분류 모델 만들기",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_eElSr_1648776047391",
                            "title": "HW22. Language Model",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_teBhM_1648776047256",
                            "title": "QUIZ2. Linear Algebra - (2)",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_yOkbt_1648776047377",
                            "title": "HW20. Neural Network",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_pXFSf_1648776047400",
                            "title": "HW5. Determinant, Change of basis, Least Square",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_fBAzH_1648776047235",
                            "title": "HW10. Simple Linear Regression",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_WRdmz_1648776047241",
                            "title": "HW2. 나만의 데이터셋 만들기",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_BZEni_1648776047266",
                            "title": "HW13. Polynomial Regression & Regularization",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_daLMC_1648776047187",
                            "title": "HW8. PageRank",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_IlflL_1648776047314",
                            "title": "HW11. Multiple Linear Regression",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_eqmGy_1648776047395",
                            "title": "[HW 30] Sub-word Tokenization",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_lDkYd_1648776047210",
                            "title": "HW1. 파이썬 알고리즘 구현",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_dWcUg_1648776047252",
                            "title": "[HW26] Word2Vec",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_lOTKl_1648776047297",
                            "title": "HW3. Matrix operations, Linear system, Inverse matrix, Linear combination",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_aLZiK_1648776047381",
                            "title": "QUIZ4. Deep Learning -(1)",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_ypuNY_1648776047194",
                            "title": "[HW 31] Transformer with Transformers",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_viiiQ_1648776047351",
                            "title": "[HW 29] Pre-tokenization",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_xYYNx_1648776047288",
                            "title": "HW9. Geometry of SVD, SVD in higher dimensions, Image compression, Non-square matrix",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_zebQr_1648776047359",
                            "title": "HW16. Clustering",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_QZJuD_1648776047408",
                            "title": "[자연어처리] HW32 Day50",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_WIWAk_1648776047247",
                            "title": "Competition 1. Multiple Logistic Regression",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_LzEcR_1648776047281",
                            "title": "HW12. Logistic Regression",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_CSyRc_1648776047273",
                            "title": "HW14. Multiple logistic regression",
                            "userCount": 26.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_JECbD_1636025415851",
                    "subject": "AI기술 자연어 처리 전문가 양성 과정 2기",
                    "examInfo": [
                        {
                            "examIndex": "ex_CXkPB_1642583903774",
                            "title": "[자연어처리] Day52 Quiz3",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_NgpRi_1641193947927",
                            "title": "[자연어처리] HW25. Day36 실습",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_BWDKx_1642583756772",
                            "title": "[자연어처리] HW32 Day50",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_LshND_1641120737479",
                            "title": "[자연어처리] HW24. Day35 실습",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_IDEld_1641801850933",
                            "title": "[자연어처리]  HW28 Day41 실습",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_kyKka_1641959230191",
                            "title": "[자연어처리] HW30 Day 43 실습",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_kdgRR_1641377453447",
                            "title": "[자연어 처리] HW27 Day39 실습",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_cavyE_1641889833827",
                            "title": "[자연어처리] HW29 Day42 실습",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_dfaok_1641278481690",
                            "title": "[자연어처리] HW26 Day37 실습",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_sQBNb_1642346556192",
                            "title": "[자연어처리] Day45 Quiz2",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_prXkq_1642484277505",
                            "title": "[자연어처리] HW31 Day48",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_QokPU_1641654022734",
                            "title": "[자연어처리] Day 40, Quiz 1",
                            "userCount": 24.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_jaxkG_1655969368395",
                    "subject": "(6회차) AI기술 자연어 처리 전문가 양성 과정 5기",
                    "examInfo": [
                        {
                            "examIndex": "ex_shAJG_1655969371583",
                            "title": "HW1. 파이썬 알고리즘 구현",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_dFbij_1655969371666",
                            "title": "HW13. Polynomial Regression & Regularization",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_PUica_1655969371641",
                            "title": "HW4. Basis, Span, Linear transformation, Inverse matrix",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_CqBre_1655969371423",
                            "title": "[HW 31] Transformer with Transformers",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_OjdZX_1655969371429",
                            "title": "[HW 24] NaiveBayes 를 이용한 주제 분류 모델 만들기",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_lcFll_1655969371609",
                            "title": "HW3. Matrix operations, Linear system, Inverse matrix, Linear combination",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_LsHQl_1655969371594",
                            "title": "HW9. Geometry of SVD, SVD in higher dimensions, Image compression, Non-square matrix",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_APoiY_1655969371434",
                            "title": "HW2. 나만의 데이터셋 만들기",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_zKaRG_1655969371577",
                            "title": "QUIZ1. Linear Algebra - (1)",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_ijiyK_1655969371541",
                            "title": "HW8. PageRank",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_itrwx_1655969371571",
                            "title": "HW5. Determinant, Change of basis, Least Square",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_WfmhI_1655969371446",
                            "title": "HW6. Gram-Schmidt orthonormalization, QR decomposition",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_JJgiI_1655969371511",
                            "title": "HW7. Geometry of eigendecomposition, Eigendecomposition",
                            "userCount": 18.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_kNdkN_1640238107165",
                    "subject": "(3회차) 쿠버네티스 전문가 양성 과정 3기",
                    "examInfo": [
                        {
                            "examIndex": "ex_XyuDU_1645764001016",
                            "title": "3회차 컨테이너 기술을 이용한 애플리케이션 운영 평가",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_UjtrT_1643351003987",
                            "title": "웹 서비스 구축 평가",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_fXrny_1642732349555",
                            "title": "리눅스 평가",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_czefg_1647581270628",
                            "title": "3회차_쿠버네티스_평가",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_hLPQA_1645168157731",
                            "title": "3회차 코드형 인프라를 위한 Ansible 활용 평가",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_McYLl_1644544631331",
                            "title": "AWS 평가",
                            "userCount": 18.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Sdlbi_1645758831898",
                    "subject": "K-Digital Training 우수 수료자",
                    "examInfo": [
                        {
                            "examIndex": "ex_hSjcc_1652238998963",
                            "title": "KDT 3기 우수수료생 1차 모의 코딩테스트",
                            "userCount": 3.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_lffCu_1632889050200",
                    "subject": "K-Digital Training",
                    "examInfo": [
                        {
                            "examIndex": "ex_ikQZp_1641445962487",
                            "title": "K-Digital Training 코딩테스트 모의고사 자연어 처리 2기 _1회차",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_jKTYC_1649991125873",
                            "title": "K-Digital Training 코딩테스트 모의고사 AI 자연어 처리 3기 _2회차",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_RBfmT_1656470982158",
                            "title": "K-Digital Training 코딩테스트 모의고사 AI 자연어 처리 4기 _2회차",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_chMTr_1653446764633",
                            "title": "쿠버네티스 전문가 양성 과정 4기 1차 모의 코딩테스트",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_abNtP_1644386630170",
                            "title": "K-Digital Training 코딩테스트 모의고사 쿠버네티스 2기 _2회차",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_JnwBc_1647334534821",
                            "title": "K-Digital Training 코딩테스트 모의고사 쿠버네티스 3기_1회차",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_pdbhT_1649993091762",
                            "title": "K-Digital Training 코딩테스트 모의고사 쿠버네티스 3기 _2회차",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_VjNoB_1647333540737",
                            "title": "K-Digital Training 코딩테스트 모의고사 AI 자연어 처리 3기_1회차",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_jheBE_1653446620405",
                            "title": "AI 기술 자연어처리 전문가 양성 과정 4기 1차 모의 코딩테스트",
                            "userCount": 73.0
                        },
                        {
                            "examIndex": "ex_ukeVv_1656471135440",
                            "title": "K-Digital Training 코딩테스트 모의고사 쿠버네티스 2기 _2회차",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_MjDqg_1641446261029",
                            "title": "K-Digital Training 코딩테스트 모의고사 쿠버네티스 2기 _1회차",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_Vdxtk_1644386482767",
                            "title": "K-Digital Training 코딩테스트 모의고사 자연어 처리 2기 _2회차",
                            "userCount": 4.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_fYBWl_1640683300201",
                    "subject": "AI기술 자연어 처리 전문가 양성 과정 3기",
                    "examInfo": [
                        {
                            "examIndex": "ex_QldfY_1642940344684",
                            "title": "[머신러닝] HW13. Day19 실습",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_feExt_1646552374509",
                            "title": "[자연어처리] Day40 Quiz 1 (파일 제출 문제)",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_AHdih_1641700039076",
                            "title": "[선형대수] HW8. Day12 실습",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_TMcZy_1642940413507",
                            "title": "[머신러닝] HW14. Day20 실습",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_ASklf_1647434256708",
                            "title": "[HW 31] Transformer with Transformers",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_iPogb_1641699352035",
                            "title": "[선형대수] HW4. Day7 실습",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_JJdIA_1646635269143",
                            "title": "[HW 28] RNNs with Attention",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_LhaAl_1642939998358",
                            "title": "[머신러닝] HW10. Day16 실습",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_laRxa_1644649826003",
                            "title": "[딥러닝] Quiz, day30",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_cYoTa_1644649842105",
                            "title": "[딥러닝] Quiz, day34",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_mVnBU_1644649808801",
                            "title": "[딥러닝] HW22, day31",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_fKwjO_1642940717102",
                            "title": "[머신러닝] HW17. Day24 실습",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_xVfeH_1644649770144",
                            "title": "[딥러닝] HW18-19, day26",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_NYalK_1641511969687",
                            "title": "HW2. 나만의 데이터셋 만들기",
                            "userCount": 42.0
                        },
                        {
                            "examIndex": "ex_mRkco_1644649800926",
                            "title": "[딥러닝] HW21, day28",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_NfzCe_1642940606173",
                            "title": "[머신러닝] Day22 Competition",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_kIklm_1644649792341",
                            "title": "[딥러닝] HW20, day27",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_iPoOl_1641699915471",
                            "title": "[선형대수] HW7. Day11 실습",
                            "userCount": 36.0
                        },
                        {
                            "examIndex": "ex_apaDp_1641699128021",
                            "title": "[선형대수] HW3. Day6 실습",
                            "userCount": 42.0
                        },
                        {
                            "examIndex": "ex_pProe_1641699560704",
                            "title": "[선형대수] Quiz1. Day10",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_FImee_1644649813763",
                            "title": "[딥러닝] HW23, day32",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_IXgyD_1646280568435",
                            "title": "[HW27] Language Model with LSTM/GRU",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_Kdayc_1647079737904",
                            "title": "[자연어처리] Day45 Quiz 2 (파일 제출 문제)",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_hhVgQ_1646759431204",
                            "title": "[HW 29] Pre-tokenization",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_abiHO_1641700108311",
                            "title": "[선형대수] HW9. Day14 실습",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_QWqcg_1641700156885",
                            "title": "[선형대수] Quiz2. Day15",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_huyLf_1642940668196",
                            "title": "[머신러닝] HW16. Day23 실습",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_oaBPJ_1647866847970",
                            "title": "[자연어처리] HW32 Day50",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_eFGgj_1646146498828",
                            "title": "[HW 25] 뉴스 크롤링 데이터를 이용한 Topic Modeling",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_nzMVQ_1646870580731",
                            "title": "[HW 30] Sub-word Tokenization",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_fBRxC_1645618742371",
                            "title": "[HW 24] NaiveBayes 를 이용한 주제 분류 모델 만들기",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_PkOvN_1646146669837",
                            "title": "[HW26] Word2Vec",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_btjdh_1648119893098",
                            "title": "[자연어처리] Day52 Quiz3 (파일 제출 문제)",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_qnUrc_1642940488909",
                            "title": "[머신러닝] HW15. Day21 실습",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_aEpOm_1642940223662",
                            "title": "[머신러닝] HW12. Day18 실습",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_oIHkO_1641699412829",
                            "title": "[선형대수] HW5. Day8 실습",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_dkekM_1642940770738",
                            "title": "[머신러닝] Day25 Quiz",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_Aebgf_1641699462206",
                            "title": "[선형대수] HW6. Day9 실습",
                            "userCount": 36.0
                        },
                        {
                            "examIndex": "ex_cuWEi_1642940098552",
                            "title": "[머신러닝] HW11. Day17 실습",
                            "userCount": 30.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_eCPgE_1648775896527",
                    "subject": "(5회차) 쿠버네티스 전문가 양성 과정 4기",
                    "examInfo": [
                        {
                            "examIndex": "ex_bJIUk_1653012717452",
                            "title": "웹 서비스 구축 평가",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_bXctk_1654836476212",
                            "title": "Ansible 활용 사후평가",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_pIVqr_1656635405448",
                            "title": "쿠버네티스 사후 평가",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_ybiGe_1654231159982",
                            "title": "AWS 사후 평가",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_kQFAK_1655436576242",
                            "title": "도커 사후 평가",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_NMlWa_1652404795917",
                            "title": "리눅스 평가 시험",
                            "userCount": 19.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "jecheongirls-hs",
            "channelIndex": "jecheongirls-hs",
            "channelName": "제천여자고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_QZZAx_1646266698838",
                    "subject": "제고모여라",
                    "examInfo": [
                        {
                            "examIndex": "ex_CkfJm_1655652361795",
                            "title": "수행평가[C형]",
                            "userCount": 45.0
                        },
                        {
                            "examIndex": "ex_JwrGX_1655650084831",
                            "title": "수행평가[B형]",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_qfzje_1655649740656",
                            "title": "수행평가[A형]",
                            "userCount": 72.0
                        },
                        {
                            "examIndex": "ex_YJYiw_1657067696700",
                            "title": "수행평가[A형]_마무리실습",
                            "userCount": 157.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kma",
            "channelIndex": "kma",
            "channelName": "육군사관학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_NjukQ_1644828648066",
                    "subject": "21-22 겨울학기 프로그래밍 대회",
                    "examInfo": [
                        {
                            "examIndex": "ex_aAZWE_1644881300176",
                            "title": "제3회 프로그래밍 대회",
                            "userCount": 10.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_afiyg_1644453031050",
                    "subject": "22-1학기 4차 산업혁명과 프로그래밍 기초(이과)",
                    "examInfo": [
                        {
                            "examIndex": "ex_ISERh_1652999577732",
                            "title": "[22-1] 수시#4",
                            "userCount": 133.0
                        },
                        {
                            "examIndex": "ex_KSfCd_1644453115158",
                            "title": "21-1학기 수시#4 (공개)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_dLedl_1644453115150",
                            "title": "21-2 수시#1 (공개용)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_YhjcV_1644453115109",
                            "title": "21-2학기 중간시험(공개/학습용)",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_PdIoC_1649846534348",
                            "title": "[22-1] 수시#2 (공개, 학습용)",
                            "userCount": 104.0
                        },
                        {
                            "examIndex": "ex_lpdha_1644453114995",
                            "title": "21-1 기말시험 (공개용/시험공부)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_zfcHj_1644453115046",
                            "title": "21-1 중간시험 (공개용/시험공부)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_ZdFpi_1651473212005",
                            "title": "[22-1] 수시#3",
                            "userCount": 137.0
                        },
                        {
                            "examIndex": "ex_mHKeZ_1649809963214",
                            "title": "[22-1] 수시#1 (공개, 학습용)",
                            "userCount": 85.0
                        },
                        {
                            "examIndex": "ex_hbevE_1653955484876",
                            "title": "[22-1] 수시#3 (공개, 학습용)",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_bOovh_1647867646718",
                            "title": "[22-1] 수시 #1",
                            "userCount": 132.0
                        },
                        {
                            "examIndex": "ex_yMLeM_1648462416067",
                            "title": "[22-1] 중간시험(4.18)",
                            "userCount": 136.0
                        },
                        {
                            "examIndex": "ex_uZbGb_1644453114958",
                            "title": "21-2 수시#3 (공개) *수탁생도 및 전 생도 학습용",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_UzaaY_1654324196691",
                            "title": "[22-1] 중간시험(공개, 학습용)",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_cVJhs_1653921896497",
                            "title": "[22-1] 기말시험(6. 14)",
                            "userCount": 131.0
                        },
                        {
                            "examIndex": "ex_ffKlX_1644453114990",
                            "title": "시험 환경 실습",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_lMOUM_1653956001723",
                            "title": "[22-1] 수시#4 (공개, 학습용)",
                            "userCount": 57.0
                        },
                        {
                            "examIndex": "ex_eCbrP_1649076452736",
                            "title": "[22-1] 수시 #2",
                            "userCount": 139.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "jnu",
            "channelIndex": "jnu",
            "channelName": "전남대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_PqhlF_1647931301030",
                    "subject": "2022년도 제2회 전남대학교 SW프로그래밍 경진대회",
                    "examInfo": [
                        {
                            "examIndex": "ex_WllEZ_1652780224533",
                            "title": "[사전점검] 2022년도 제2회 전남대학교 SW프로그래밍 경진대회",
                            "userCount": 53.0
                        },
                        {
                            "examIndex": "ex_kiIWw_1652780117190",
                            "title": "[본 시험] 2022년도 제2회 전남대학교 SW프로그래밍 경진대회",
                            "userCount": 95.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_bKSRx_1653455189028",
                    "subject": "구름 실시간 감독실 관련 시연 TEST",
                    "examInfo": [
                        {
                            "examIndex": "ex_dlXNN_1653455285795",
                            "title": "TEST",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "cloudnoa",
            "channelIndex": "cloudnoa",
            "channelName": "클라우드노아",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_eviwg_1655949429024",
                    "subject": "[2022][AlphaCode] 서비스팀 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_DJIZo_1655949479011",
                            "title": "AlphaCode 코딩 테스트",
                            "userCount": 10.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "programming-hs",
            "channelIndex": "programming-hs",
            "channelName": "경북하이텍고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_dJiNb_1648736928608",
                    "subject": "스마트 3-1 워드프로세서(금 3,4)",
                    "examInfo": [
                        {
                            "examIndex": "ex_lYTFz_1648749975411",
                            "title": "4/1(금) 형성평가",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_rwtml_1649989548145",
                            "title": "4/15(금) CBT 결과 제출",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_lSmWU_1649387402016",
                            "title": "4/8(월) 형성평가 다시보기",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_wpynz_1648884407918",
                            "title": "4/8(월) 형성평가",
                            "userCount": 16.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kyonggi",
            "channelIndex": "kyonggi",
            "channelName": "경기대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_xoUXP_1646274923212",
                    "subject": "C프로그래밍기초 (2022-1)",
                    "examInfo": [
                        {
                            "examIndex": "ex_eOxZE_1655164606966",
                            "title": "기말고사 (2163)",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_kYRDk_1654732768330",
                            "title": "기말고사 (2162)",
                            "userCount": 43.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kpcard",
            "channelIndex": "kpcard",
            "channelName": "한국선불카드(주)",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_jAqIO_1556599776175",
                    "subject": "한국선불카드 1차 평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_KsPyp_1641359023323",
                            "title": "[한국선불카드]코딩테스트(경력_상)",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_gsJtn_1642755721114",
                            "title": "[한국선불카드]코딩테스트(신입)",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_dMVll_1642756359663",
                            "title": "[한국선불카드]코딩테스트(초급)",
                            "userCount": 28.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "k-digital-credit",
            "channelIndex": "k-digital-credit",
            "channelName": "K-Digital-Credit",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_SXgDt_1640055420396",
                    "subject": "[12/28 개강] 17기 바로 써먹는 풀스택 기초 - 파이썬",
                    "examInfo": [
                        {
                            "examIndex": "ex_khhXj_1642407571862",
                            "title": "[2주차 과제]",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_IOhYu_1644814740603",
                            "title": "[복습 - 6주차 과제]",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_IiFpu_1642038529390",
                            "title": "[4주차 과제]",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_eeFAL_1642038529472",
                            "title": "[6주차 과제]",
                            "userCount": 4.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_NebOi_1644202277128",
                    "subject": "[2/8 개강] 19기 바로 써먹는 풀스택 기초 - 자바스크립트",
                    "examInfo": [
                        {
                            "examIndex": "ex_gwYTu_1646706980492",
                            "title": "[복습 - 4주차 과제]",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_grWDv_1644202336338",
                            "title": "[2주차 과제]",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_rnzpp_1644202336347",
                            "title": "[6주차 과제]",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_FXSWo_1644202336352",
                            "title": "[4주차 과제]",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_BnHgS_1647841764297",
                            "title": "[6주차 과제 - 복습]",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_FbXjh_1645410766854",
                            "title": "[복습 - 2주차 과제]",
                            "userCount": 7.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_RjtlN_1647833286542",
                    "subject": "[3/22 개강] 21기 바로 써먹는 풀스택 기초 - 자바스크립트",
                    "examInfo": [
                        {
                            "examIndex": "ex_cMzkc_1647833392761",
                            "title": "[4주차 과제]",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_lhlAn_1647833392751",
                            "title": "[6주차 과제]",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_FiWEl_1651455757211",
                            "title": "[6주차 과제 - 복습]",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_HfXAZ_1650274326841",
                            "title": "[4주차 과제 - 복습]",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_SoVxM_1647833392739",
                            "title": "[2주차 과제]",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_hrhMv_1649122073448",
                            "title": "[2주차 과제 - 복습]",
                            "userCount": 12.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_WXXbh_1638760979928",
                    "subject": "[12/7 개강] 16기 바로 써먹는 풀스택 기초 - 자바스크립트",
                    "examInfo": [
                        {
                            "examIndex": "ex_gfCre_1642038140624",
                            "title": "[6주차 과제]",
                            "userCount": 9.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_paJfR_1649404637872",
                    "subject": "[4/12 개강] 22기 바로 써먹는 풀스택 기초 - 자바스크립트",
                    "examInfo": [
                        {
                            "examIndex": "ex_ihowd_1649404740991",
                            "title": "[4주차 과제]",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_uPkdj_1653455539284",
                            "title": "[6주차 과제 - 복습]",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_hduvY_1650867475272",
                            "title": "[2주차 과제 - 복습]",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_LYjgJ_1649404740978",
                            "title": "[2주차 과제]",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_nZYeW_1649404740986",
                            "title": "[6주차 과제]",
                            "userCount": 7.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_jZBcN_1645774712843",
                    "subject": "[3/1 개강] 20기 바로 써먹는 풀스택 기초 - 자바스크립트",
                    "examInfo": [
                        {
                            "examIndex": "ex_VmgyQ_1645774824292",
                            "title": "[2주차 과제]",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_lQdEh_1647222767189",
                            "title": "[2주차 과제 - 복습]",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_hZmrh_1645774824304",
                            "title": "[4주차 과제]",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_scFhf_1649728618650",
                            "title": "[6주차 과제 - 복습]",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_JUTwj_1645774824299",
                            "title": "[6주차 과제]",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_zMgQQ_1629985353889",
                    "subject": "K-Digital Credit",
                    "examInfo": [
                        {
                            "examIndex": "ex_VdzXa_1647329052624",
                            "title": "K-Digital Credit 코딩테스트 모의고사 20회",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_dJhZJ_1644313747740",
                            "title": "K-Digital Credit 코딩테스트 모의고사 18회",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_Xeobl_1645595684651",
                            "title": "K-Digital Credit 코딩테스트 모의고사 19회",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_bPykT_1641795392665",
                            "title": "K-Digital Credit 코딩테스트 모의고사 17회",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_dgPQm_1649123176130",
                            "title": "K-Digital Credit 코딩테스트 모의고사 21회",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_stmdN_1652777891821",
                            "title": "K-Digital Credit 코딩테스트 모의고사 23회",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_lmbXj_1641197253402",
                            "title": "K-Digital Credit 코딩테스트 모의고사 16회",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_EXMcd_1642127161446",
                    "subject": "[1/18 개강] 18기 바로 써먹는 풀스택 기초 - 자바스크립트",
                    "examInfo": [
                        {
                            "examIndex": "ex_uglDR_1644808822155",
                            "title": "[복습 - 4주차 과제]",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_jtAFM_1642127267966",
                            "title": "[2주차 과제]",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_lnUWl_1642127267972",
                            "title": "[6주차 과제]",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_jlPNl_1642127267977",
                            "title": "[4주차 과제]",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_JRjIa_1644311187859",
                            "title": "[복습 - 2주차 과제]",
                            "userCount": 14.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_eqzVM_1640055382574",
                    "subject": "[12/28 개강] 17기 바로 써먹는 풀스택 기초 - 자바스크립트",
                    "examInfo": [
                        {
                            "examIndex": "ex_Gikdh_1644814712585",
                            "title": "[복습 - 6주차 과제]",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_aCPaj_1642640631872",
                            "title": "[2주차 과제]",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_iThGl_1642038498709",
                            "title": "[6주차 과제]",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_ZjuoB_1642038498793",
                            "title": "[4주차 과제]",
                            "userCount": 19.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_JamUy_1644202857840",
                    "subject": "[2/8 개강] 19기 바로 써먹는 풀스택 기초 - 파이썬",
                    "examInfo": [
                        {
                            "examIndex": "ex_eLkVy_1646707022020",
                            "title": "[복습 - 4주차 과제]",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_ednak_1647841806974",
                            "title": "[6주차 과제 - 복습]",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_uiaIB_1644202895287",
                            "title": "[2주차 과제]",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_fcvkJ_1644202895267",
                            "title": "[6주차 과제]",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_xXcaW_1644202895277",
                            "title": "[4주차 과제]",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_GaXpb_1645410841338",
                            "title": "[복습 - 2주차 과제]",
                            "userCount": 5.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_aucEp_1642127197385",
                    "subject": "[1/18 개강] 18기 바로 써먹는 풀스택 기초 - 파이썬",
                    "examInfo": [
                        {
                            "examIndex": "ex_HxHFL_1644808872451",
                            "title": "[복습 - 4주차 과제]",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_gOxBK_1642127228553",
                            "title": "[6주차 과제]",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_GbAqf_1642127228568",
                            "title": "[2주차 과제]",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_gsjdk_1644311185327",
                            "title": "[복습 - 2주차 과제]",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_zofST_1642127228563",
                            "title": "[4주차 과제]",
                            "userCount": 7.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_jGkOW_1638761012570",
                    "subject": "[12/7 개강] 16기 바로 써먹는 풀스택 기초 - 파이썬",
                    "examInfo": [
                        {
                            "examIndex": "ex_GRnEe_1642038149338",
                            "title": "[6주차 과제]",
                            "userCount": 6.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_fBPhL_1645774792546",
                    "subject": "[3/1 개강] 20기 바로 써먹는 풀스택 기초 - 파이썬",
                    "examInfo": [
                        {
                            "examIndex": "ex_hdqcE_1649728645110",
                            "title": "[6주차 과제 - 복습]",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_GKlUe_1645774817553",
                            "title": "[2주차 과제]",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_wXlXf_1645774817535",
                            "title": "[6주차 과제]",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_AkDhc_1647222804485",
                            "title": "[2주차 과제 - 복습]",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_Nbofy_1645774817545",
                            "title": "[4주차 과제]",
                            "userCount": 4.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_zhlcK_1649404640485",
                    "subject": "[4/12 개강] 22기 바로 써먹는 풀스택 기초 - 파이썬",
                    "examInfo": [
                        {
                            "examIndex": "ex_pwtIl_1649404667912",
                            "title": "[6주차 과제]",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_iimoi_1649404667922",
                            "title": "[4주차 과제]",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_CIEOj_1653455484309",
                            "title": "[6주차 과제 - 복습]",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_tmwcm_1650867499149",
                            "title": "[2주차 과제 - 복습]",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_Plxnl_1649404667930",
                            "title": "[2주차 과제]",
                            "userCount": 8.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_rzMVV_1647833365157",
                    "subject": "[3/22 개강] 21기 바로 써먹는 풀스택 기초 - 파이썬",
                    "examInfo": [
                        {
                            "examIndex": "ex_ChkJi_1647833394914",
                            "title": "[2주차 과제]",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_Jvfew_1647833394896",
                            "title": "[6주차 과제]",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_xgZoM_1649122038842",
                            "title": "[2주차 과제 - 복습]",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_YNMjK_1651455780193",
                            "title": "[6주차 과제 - 복습]",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_bRxeW_1647833394906",
                            "title": "[4주차 과제]",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_iHWeb_1650274351875",
                            "title": "[4주차 과제 - 복습]",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "koreatech",
            "channelIndex": "koreatech",
            "channelName": "한국기술교육대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_Oyydg_1639975722360",
                    "subject": "컴퓨팅사고 21년도 겨울계절학기",
                    "examInfo": [
                        {
                            "examIndex": "ex_dbokw_1641191324519",
                            "title": "과제 10",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_WKqlB_1641279765549",
                            "title": "과제 11",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_cBTeZ_1645505122414",
                    "subject": "2022_컴퓨팅사고",
                    "examInfo": [
                        {
                            "examIndex": "ex_QucCQ_1650264343016",
                            "title": "기말고사",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_FngCy_1650517863996",
                    "subject": "[한기대]컴퓨팅사고(BSM590-25)",
                    "examInfo": [
                        {
                            "examIndex": "ex_pOMgf_1651630888428",
                            "title": "10주차 과제",
                            "userCount": 14.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_BfGCb_1607003489639",
                    "subject": "한국기술교육대학교 테스트풀",
                    "examInfo": [
                        {
                            "examIndex": "ex_FGWei_1643368540646",
                            "title": "테스트 테스트",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_sorLT_1643250803775",
                            "title": "테스트_1",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_VkuxX_1651478977836",
                    "subject": "컴퓨팅사고(메카15~18분반)중간고사",
                    "examInfo": [
                        {
                            "examIndex": "ex_jvTKA_1651592790430",
                            "title": "컴퓨팅사고-중간시험",
                            "userCount": 86.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_pUtLB_1651121193903",
                    "subject": "2022학년도 1학기 컴퓨팅사고 중간고사",
                    "examInfo": [
                        {
                            "examIndex": "ex_lqqkA_1652183287745",
                            "title": "[기계] 2022 컴퓨팅 사고 중간고사",
                            "userCount": 131.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gefll_1649821003724",
                    "subject": "[한기대]컴퓨팅사고(BSM590-24)",
                    "examInfo": [
                        {
                            "examIndex": "ex_CoMiV_1651629784683",
                            "title": "10주차 과제",
                            "userCount": 13.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_vbwdb_1645592273549",
                    "subject": "[DSC 공유대학] 센서시스템프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_sUFyP_1649922576874",
                            "title": "[5주차 실습] 파일과 디렉토리 (File & directory) 예제 타이핑",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_FnrdO_1652862488330",
                            "title": "[11주차 실습] 메모리 맵핑 (memory mapping) 예제 타이핑",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_JjzZy_1645687670040",
                            "title": "[3주차 실습] 파일 입출력 (Low-level file I/O, system call) 예제 타이핑",
                            "userCount": 36.0
                        },
                        {
                            "examIndex": "ex_xPdxb_1653315348195",
                            "title": "[12주차 실습] 파이프 (Pipe) 예제 타이핑",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_iFcir_1653703282295",
                            "title": "기말고사 (6/15)",
                            "userCount": 36.0
                        },
                        {
                            "examIndex": "ex_fcdZI_1653387125994",
                            "title": "시험방법 안내 및 연습",
                            "userCount": 36.0
                        },
                        {
                            "examIndex": "ex_JfBua_1650968193076",
                            "title": "[7주차 실습] 프로세스 정보 (Process information) 예제 타이핑",
                            "userCount": 34.0
                        },
                        {
                            "examIndex": "ex_Hkfyh_1653315420563",
                            "title": "[13주차 실습] 프로세스 사이 통신-1 (inter-process communication, IPC) 예제 타이핑",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_gloqk_1650361001536",
                            "title": "[6주차 실습] 시스템 정보 (Systen information) 예제 타이핑",
                            "userCount": 34.0
                        },
                        {
                            "examIndex": "ex_bhGSF_1649076817334",
                            "title": "[4주차 실습] 표준 입출력 (Standard IO : High-Level File IO) 예제 타이핑",
                            "userCount": 36.0
                        },
                        {
                            "examIndex": "ex_lbtrv_1653316525137",
                            "title": "[14주차 실습] 프로세스 사이 통신-1 (inter-process communication, IPC) 예제 타이핑",
                            "userCount": 34.0
                        },
                        {
                            "examIndex": "ex_lAaez_1651573936382",
                            "title": "[9주차 실습] 환경변수(environment variable), 프로세스 관리(Process management) 예제 타이핑",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_giuKl_1652247095879",
                            "title": "[10주차 실습] 시그널(Signal) 예제 타이핑",
                            "userCount": 35.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_fSMdH_1650346455392",
                    "subject": "Computational Thinking_2022",
                    "examInfo": [
                        {
                            "examIndex": "ex_EunBy_1650962440699",
                            "title": "Mock quiz2",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_xTSai_1650964689611",
                            "title": "mock quiz3 - 시험 아닙니다.",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_aafpf_1652151386837",
                            "title": "Midterm exam",
                            "userCount": 91.0
                        },
                        {
                            "examIndex": "ex_Gcekr_1650957767042",
                            "title": "Mock quiz",
                            "userCount": 93.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_zdIba_1619449422507",
                    "subject": "컴퓨팅사고의 중간시험",
                    "examInfo": [
                        {
                            "examIndex": "ex_aMZfC_1651592389385",
                            "title": "컴퓨팅사고-중간시험",
                            "userCount": 91.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "dgsw",
            "channelIndex": "dgsw",
            "channelName": "대구SW고",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_nGFjV_1642571311292",
                    "subject": "2022학년도 비포스쿨 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_rSZzU_1646284241809",
                            "title": "비포스쿨 코딩문제 풀이",
                            "userCount": 59.0
                        },
                        {
                            "examIndex": "ex_JcvEZ_1645659938569",
                            "title": "비포스쿨 코딩테스트",
                            "userCount": 78.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_tBOji_1655770912803",
                    "subject": "2022학년도 2분기 B반(조현아T)",
                    "examInfo": [
                        {
                            "examIndex": "ex_ARdox_1655857837966",
                            "title": "6/22(수) 문자열+함수+구조체!",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_tbGlc_1647237313138",
                    "subject": "2022학년도 1분기 C1반(이유준T)",
                    "examInfo": [
                        {
                            "examIndex": "ex_JfzUT_1650456921755",
                            "title": "0420(목) C1반 코딩테스트",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_UgNfa_1652313423727",
                            "title": "0512(목) C1반 코딩테스트",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_sWqcB_1651102895090",
                            "title": "0428(목) C1반 코딩테스트",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_mbrJx_1648078519905",
                            "title": "0324(목) C1반 코딩테스트",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_gLbFj_1648684111244",
                            "title": "0331(목) C1반 코딩테스트",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_cofQD_1647448847786",
                            "title": "0317(목) C1반 코딩테스트",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_getkO_1647386272507",
                    "subject": "2022학년도 C언어 1분기 B반 (이진주T)",
                    "examInfo": [
                        {
                            "examIndex": "ex_BNiWO_1647390626273",
                            "title": "3/16 혼자서도 쉽게 익힐 수 있는 자기주도 c언어(기본입출력, 연산자)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_lrtSy_1649682813901",
                            "title": "4/12 ~중첩반복문",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_DimpY_1648599780211",
                            "title": "3/30 ~반복문",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_mcsUc_1651020624533",
                            "title": "4/27 ~배열",
                            "userCount": 19.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_cayjn_1652330845549",
                    "subject": "1학년 프로그래밍C 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_YslHQ_1656488612934",
                            "title": "프로그래밍C 2차 코딩테스트",
                            "userCount": 67.0
                        },
                        {
                            "examIndex": "ex_gQyTb_1654651887113",
                            "title": "6월 8일 (수) NCS 응용프로그래밍 테스트",
                            "userCount": 74.0
                        },
                        {
                            "examIndex": "ex_mrIec_1652915538239",
                            "title": "프로그래밍C 1차 코딩테스트",
                            "userCount": 75.0
                        },
                        {
                            "examIndex": "ex_VjXst_1656908058093",
                            "title": "프로그래밍C 2차 코딩테스트",
                            "userCount": 6.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dsaKE_1647302685692",
                    "subject": "2022학년도 1분기 A반(김익현T)",
                    "examInfo": [
                        {
                            "examIndex": "ex_fruym_1652304808367",
                            "title": "A반 6주차 테스트",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_BUeia_1649850827422",
                            "title": "A반 4주차 테스트",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_GWnMP_1648039465642",
                            "title": "A반 2주차 테스트",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_eJtRo_1651058932440",
                            "title": "A반 5주차 테스트",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_MeHuG_1647433157860",
                            "title": "A반 1주차 테스트",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_TaCfK_1648624038920",
                            "title": "A반 3주차 테스트",
                            "userCount": 18.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_eTbCR_1654506782495",
                    "subject": "2022학년도 C언어 2분기 S반 (이진주T)",
                    "examInfo": [
                        {
                            "examIndex": "ex_Mxjmf_1654527242806",
                            "title": "~ 문자열",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_IIqvx_1655687279673",
                            "title": "~구조체",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_aakdW_1652784023946",
                    "subject": "2022학년도 2분기 D반(이유준T)",
                    "examInfo": [
                        {
                            "examIndex": "ex_ahYwA_1653522572357",
                            "title": "0526(목) D반 코딩테스트",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_ntKZI_1656293738285",
                            "title": "0627(월) D반 코딩테스트(함수)",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_bFbTE_1655336002207",
                            "title": "0616(목) D반 코딩테스트",
                            "userCount": 17.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_AlXjv_1647153320951",
                    "subject": "2022학년도 1분기 C2반(조현아T)",
                    "examInfo": [
                        {
                            "examIndex": "ex_XDbhZ_1649745068928",
                            "title": "0414(목) C2반 코딩테스트",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_ffiRr_1647925834591",
                            "title": "0324(목) C2반 코딩테스트",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_iwtgO_1651052923943",
                            "title": "0428(목) C2반 코딩테스트",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_Wicmo_1648638380221",
                            "title": "0331(목) C2반 코딩테스트",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_WmrHk_1652275273060",
                            "title": "0512(목) C2반 코딩테스트",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_CoofL_1647473682807",
                            "title": "0317(목) C2반 코딩테스트",
                            "userCount": 18.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "nightwatch",
            "channelIndex": "nightwatch",
            "channelName": "nightwatch",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_LeDUm_1653273595115",
                    "subject": "일반 문제 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_WsZzl_1653274252833",
                            "title": "시험테스트",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_uWblW_1655861244502",
                    "subject": "220622 dataq 스트레스테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_WckLn_1655864911043",
                            "title": "스트레스 테스트 1차",
                            "userCount": 7000.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_enKzY_1653460241255",
                    "subject": "220525 LGEHA 스트레스 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_ynQKE_1653462404484",
                            "title": "1차 테스트 250명",
                            "userCount": 250.0
                        },
                        {
                            "examIndex": "ex_lCZhz_1653463350783",
                            "title": "2차 테스트 500명",
                            "userCount": 500.0
                        },
                        {
                            "examIndex": "ex_jHiFu_1653463917314",
                            "title": "3차 테스트 1000명",
                            "userCount": 1000.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ikjht_1658811643411",
                    "subject": "엘지전자 스트레스테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_cGxYb_1658811808242",
                            "title": "엘지전자 테스트",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "thinktank-hs",
            "channelIndex": "thinktank-hs",
            "channelName": "thinktank",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_EhxMY_1645901632776",
                    "subject": "대구서부고 - 프로그래밍(C언어)",
                    "examInfo": [
                        {
                            "examIndex": "ex_Kffkq_1650935291347",
                            "title": "나만의 창의적 프로그램 만들기",
                            "userCount": 10.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_hKxJL_1615445695944",
                    "subject": "2022년 갑예쌤과 함께하는 파이썬",
                    "examInfo": [
                        {
                            "examIndex": "ex_phWRc_1653613405666",
                            "title": "개인 프로젝트 (체고 ) -",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_CpcgC_1649832602461",
                            "title": "나만의 프로그램만들기(조건문)",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_yebBf_1657588835846",
                            "title": "나만의 창의적 프로그램(서부고)",
                            "userCount": 14.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "jojong-hs",
            "channelIndex": "jojong-hs",
            "channelName": "조종고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_hMEpl_1650200316144",
                    "subject": "2022_2학년 DB 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_taaDG_1652698429478",
                            "title": "1차 수행평가",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_kaiAp_1652698550915",
                            "title": "2차 수행평가",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_dvycd_1655124415376",
                            "title": "3, 4차 수행평가",
                            "userCount": 19.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "ksacs-hs",
            "channelIndex": "ksacs-hs",
            "channelName": "Automata",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_cjcUl_1653987955980",
                    "subject": "2022 Spring CS1 Final Mock Exam",
                    "examInfo": [
                        {
                            "examIndex": "ex_PinDs_1654324184765",
                            "title": "2022 Spring CS1 Final Mock Exam",
                            "userCount": 16.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_hObeK_1622269622710",
                    "subject": "검수용",
                    "examInfo": [
                        {
                            "examIndex": "ex_kxsQz_1654071228790",
                            "title": "(test) 2022 Spring CS1 Final Mock Exam",
                            "userCount": 11.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "hanwhawm",
            "channelIndex": "hanwhawm",
            "channelName": "한화투자증권",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_vYRVX_1655874023363",
                    "subject": "(한화투자증권)2022년 상반기 신입사원 채용_IT업무개발",
                    "examInfo": [
                        {
                            "examIndex": "ex_bjbre_1656407467521",
                            "title": "시험 환경 체험하기",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_BIHiF_1656407703300",
                            "title": "코딩테스트",
                            "userCount": 5.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_cSdho_1655879590886",
                    "subject": "(한화투자증권) 2022년 상반기 신입사원 채용_매매시스템 개발 및 운용",
                    "examInfo": [
                        {
                            "examIndex": "ex_fSYTC_1655882451437",
                            "title": "시험 환경 체험하기",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_hekhz_1655880795252",
                            "title": "코딩 테스트",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_ihKTT_1655880792869",
                            "title": "서술형 평가",
                            "userCount": 11.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_EISXk_1654836826443",
                    "subject": "TEST",
                    "examInfo": [
                        {
                            "examIndex": "ex_eEbQR_1654845421753",
                            "title": "데이터 직군",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_rYlJh_1655882798100",
                    "subject": "(한화투자증권) 2022년 상반기 신입사원 채용_IT전산개발",
                    "examInfo": [
                        {
                            "examIndex": "ex_qcjRC_1656401160176",
                            "title": "코딩테스트",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_mlsaK_1656404146379",
                            "title": "시험 환경 체험하기",
                            "userCount": 6.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "dgysinfo-hs",
            "channelIndex": "dgysinfo-hs",
            "channelName": "영신고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_vbBkc_1646987978015",
                    "subject": "프로그래밍(2022)",
                    "examInfo": [
                        {
                            "examIndex": "ex_cEOSa_1655183891022",
                            "title": "1학기 실력 평가하기",
                            "userCount": 190.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "areumhs-hs",
            "channelIndex": "areumhs-hs",
            "channelName": "아름고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_aYKej_1647845091392",
                    "subject": "아름고 정보과학",
                    "examInfo": [
                        {
                            "examIndex": "ex_uWekZ_1656859094490",
                            "title": "수행평가",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_hKbEn_1648982709705",
                            "title": "[과제] 중단원 마무리",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_frIdn_1649505998918",
                            "title": "마름모 출력하기",
                            "userCount": 5.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "infobank",
            "channelIndex": "infobank",
            "channelName": "인포뱅크",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_gLNhO_1505357706381",
                    "subject": "인포뱅크 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_qAlVD_1656375917059",
                            "title": "IVI개발그룹 경력 개발자 코딩테스트",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_exdUc_1658574748893",
                            "title": "iMotors 코딩 테스트",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_gLXjI_1646878293482",
                            "title": "[iMessage] 2022년 서버개발팀 코딩테스트",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_WsdrF_1654566359385",
                            "title": "IVI개발그룹 경력 개발자 코딩테스트",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kyunggigirls-hs",
            "channelIndex": "kyunggigirls-hs",
            "channelName": "경기여자고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_YilnF_1647784104604",
                    "subject": "2022학년도 경기여자고등학교 1학년 정보",
                    "examInfo": [
                        {
                            "examIndex": "ex_GWdxi_1652604860799",
                            "title": "5차시 과제 - 이상형",
                            "userCount": 74.0
                        },
                        {
                            "examIndex": "ex_JasfA_1653543023570",
                            "title": "7차시 과제 - 팀프로젝트",
                            "userCount": 62.0
                        },
                        {
                            "examIndex": "ex_czhTl_1653538979629",
                            "title": "7차시 과제 - 열 번 찍어 안 넘어가는 나무 없다",
                            "userCount": 76.0
                        },
                        {
                            "examIndex": "ex_DCdRB_1653891423559",
                            "title": "8차시 과제 - 열 번 찍어 안 넘어가는 나무 없다",
                            "userCount": 77.0
                        },
                        {
                            "examIndex": "ex_xhlaR_1654144316015",
                            "title": "9차시 선택과제 - 평균은 하겠지?",
                            "userCount": 54.0
                        },
                        {
                            "examIndex": "ex_SEEJF_1654144296111",
                            "title": "9차시 과제 - 중간은 하겠지?",
                            "userCount": 75.0
                        },
                        {
                            "examIndex": "ex_XcAWh_1650414626151",
                            "title": "4차시 과제 - 큰 수",
                            "userCount": 72.0
                        },
                        {
                            "examIndex": "ex_fBfuW_1649598211284",
                            "title": "2차시 과제 - 어쩔티비",
                            "userCount": 78.0
                        },
                        {
                            "examIndex": "ex_cGDzc_1649598594408",
                            "title": "2차시 선택과제 - 멍멍",
                            "userCount": 67.0
                        },
                        {
                            "examIndex": "ex_AhDEd_1649984261768",
                            "title": "3차시 과제 - 너의 나이는",
                            "userCount": 77.0
                        },
                        {
                            "examIndex": "ex_qAEga_1652856938397",
                            "title": "6차시 과제 - 구구단",
                            "userCount": 76.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kcsl",
            "channelIndex": "kcsl",
            "channelName": "KCSL",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_YfnMQ_1653167948691",
                    "subject": "ACSL Finals 2021-2022",
                    "examInfo": [
                        {
                            "examIndex": "ex_lXbHe_1653512579839",
                            "title": "Sr_Programming_Finals",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_aehAE_1653507841111",
                            "title": "Jr_Programming_Finals",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_gpiOD_1653509441290",
                            "title": "Int_Short Problems_Finals",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_vTDAb_1653430414911",
                            "title": "Jr_Short Problems_Finals",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_Jplsd_1653510212540",
                            "title": "Int_Programming_Finals",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_gkgRY_1653512121540",
                            "title": "Sr_Short Problems_Finals",
                            "userCount": 28.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ebJFu_1638498949664",
                    "subject": "KCSL_2021-2022",
                    "examInfo": [
                        {
                            "examIndex": "ex_qvlSj_1647217073946",
                            "title": "C3_Int_Short Problems",
                            "userCount": 53.0
                        },
                        {
                            "examIndex": "ex_eNVec_1650410000978",
                            "title": "C4_Sr_Short Problems",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_fQgdp_1650408303869",
                            "title": "C4_Jr_Short Problems",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_bobfS_1643772611562",
                            "title": "C2_Int_Programming: Fibonacci Cypher",
                            "userCount": 61.0
                        },
                        {
                            "examIndex": "ex_istJC_1650487241881",
                            "title": "C4_Int_Programming: Fibonacci & Mandelbrot",
                            "userCount": 48.0
                        },
                        {
                            "examIndex": "ex_hbyBZ_1650486658553",
                            "title": "C4_Jr_Programming: Fibonacci & Mandelbrot",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_hPdjl_1650409338457",
                            "title": "C4_Int_Short Problems",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_ZnHWc_1647216435938",
                            "title": "C3_Jr_Short Problems",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_ATnzg_1647217693445",
                            "title": "C3_Sr_Short Problems",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_TwcXs_1650487721730",
                            "title": "C4_Sr_Programming: Fibonacci & Mandelbrot",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_vZuPi_1643739596359",
                            "title": "C2_Jr_Short Problems",
                            "userCount": 44.0
                        },
                        {
                            "examIndex": "ex_JWQPw_1647227779189",
                            "title": "C3_Int_Programming: Fibonacci & Pascal",
                            "userCount": 52.0
                        },
                        {
                            "examIndex": "ex_eSTlq_1643759014290",
                            "title": "C2_Int_Short Problems",
                            "userCount": 61.0
                        },
                        {
                            "examIndex": "ex_fjNUq_1647218559209",
                            "title": "C3_Jr_Programming: Fibonacci & Pascal",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_auvqj_1643759586552",
                            "title": "C2_Sr_Short Problems",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_KnowL_1643760315057",
                            "title": "C2_Jr_Programming: Fibonacci Cypher",
                            "userCount": 45.0
                        },
                        {
                            "examIndex": "ex_NVCRZ_1647228268908",
                            "title": "C3_Sr_Programming: Fibonacci & Pascal",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_gISja_1643773066873",
                            "title": "C2_Sr_Programming: Fibonacci Cypher",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_yaFOj_1644182004095",
                            "title": "Updated_C2_Sr_Programming: Fibonacci Cypher",
                            "userCount": 37.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "jongno-hs",
            "channelIndex": "jongno-hs",
            "channelName": "종로산업정보학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_NzJbd_1647916642359",
                    "subject": "2022학년도 종로산업정보학교 응용프로그래밍 과정",
                    "examInfo": [
                        {
                            "examIndex": "ex_ZPPXQ_1657675011465",
                            "title": "리눅스 기본 명령어(디렉터리 및 파일)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_DBuDj_1657674951489",
                            "title": "사용자 생성 및 계정 관리",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_InGay_1649377610250",
                            "title": "if 문으로 문제 해결하기",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_HlwiX_1657674776671",
                            "title": "리눅스 설치-기본설치유형",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_lxmcb_1657675046984",
                            "title": "기타명령어",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_cCobl_1657595081811",
                            "title": "리눅스의 개요",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_qLMdx_1657674762088",
                            "title": "리눅스 라이센스",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_dDAna_1651191813906",
                            "title": "4월 수행평가",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_fHTyy_1651549773750",
                            "title": "컴퓨터보안2반 수행평가",
                            "userCount": 14.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gtiWe_1647833371987",
                    "subject": "2022학년도 1학기 거점학교 파이썬 수업(종로산업정보학교)",
                    "examInfo": [
                        {
                            "examIndex": "ex_FgdHh_1652699770778",
                            "title": "모의 수행 평가",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_hZlTw_1653902376063",
                            "title": "수행평가1",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_prtdg_1657023243088",
                            "title": "소프트웨어 오류를 읽고 느낀점과 공공데이터 분석",
                            "userCount": 13.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "sanggye-hs",
            "channelIndex": "sanggye-hs",
            "channelName": "상계고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_hhWfl_1645674009109",
                    "subject": "프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_sIpgq_1647850405625",
                            "title": "과제1-A",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "cconma",
            "channelIndex": "cconma",
            "channelName": "(주)꽃피는 아침마을",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_LPwWO_1649866669504",
                    "subject": "[꽃마USA] 개발자 코딩테스트 (2022)",
                    "examInfo": [
                        {
                            "examIndex": "ex_yVCeI_1649867644386",
                            "title": "[꽃마USA] 개발자 코딩테스트 (2022)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_ecOzJ_1651037394713",
                            "title": "[꽃마USA] 개발자 코딩테스트 (2022) 2차",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "gumi123-hs",
            "channelIndex": "gumi123-hs",
            "channelName": "구미전자공업고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_tqISX_1657105550291",
                    "subject": "구미전자공고 전자 B-2 시험 대비용 강좌",
                    "examInfo": [
                        {
                            "examIndex": "ex_vkwXg_1657172730934",
                            "title": "모의고사 2",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_azZQH_1657241623271",
                            "title": "스퍼트 모의고사!",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_TTCVO_1657162437934",
                            "title": "모의고사1 풀이",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_TzlZF_1657176225384",
                            "title": "모의고사 2 풀이",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_rMWfA_1657158622073",
                            "title": "모의고사 1",
                            "userCount": 16.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_nXpJP_1657000288582",
                    "subject": "C언어시험 기초반",
                    "examInfo": [
                        {
                            "examIndex": "ex_IFeaj_1657000444727",
                            "title": "C언어 기초반 시험",
                            "userCount": 101.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ioRBS_1657004095304",
                    "subject": "C언어시험 미리보기 (학생등록용)",
                    "examInfo": [
                        {
                            "examIndex": "ex_bpssg_1657004096404",
                            "title": "C언어시험 미리보기 (학생등록용)",
                            "userCount": 180.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_FMpBR_1656818362074",
                    "subject": "C언어시험 심화반",
                    "examInfo": [
                        {
                            "examIndex": "ex_TqcQg_1656999818517",
                            "title": "C언어 심화반 시험",
                            "userCount": 111.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "opusm",
            "channelIndex": "opusm",
            "channelName": "오퍼스엠",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_kQjzg_1652094025010",
                    "subject": "[2022년도][오퍼스엠] 기초 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_PPSDr_1652095788882",
                            "title": "블록체인 기술 기업 오퍼스엠  코딩테스트",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "dhihs-hs",
            "channelIndex": "dhihs-hs",
            "channelName": "대구국제고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_SxSax_1616995180933",
                    "subject": "문제해결과 프로그래밍_정보",
                    "examInfo": [
                        {
                            "examIndex": "ex_OJdoe_1655130055979",
                            "title": "문제해결프로그래밍-6반",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_lDKwE_1655354162131",
                            "title": "문제해결프로그래밍-추가",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_gatoL_1655130556042",
                            "title": "문제해결프로그래밍-1반",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_hRbvi_1653437222798",
                            "title": "파이선 특강",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_YRaZl_1655306479590",
                            "title": "문제해결프로그래밍-3반",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_hsyHG_1654845008255",
                            "title": "문제해결프로그래밍-2반",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_zVNbJ_1655306744072",
                            "title": "문제해결프로그래밍-5반",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_LGwla_1655104118835",
                            "title": "문제해결프로그래밍-4반",
                            "userCount": 19.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "gangbuk-hs",
            "channelIndex": "gangbuk-hs",
            "channelName": "교사",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_mDdGb_1646364601157",
                    "subject": "[2022] 프로그래밍 2-2",
                    "examInfo": [
                        {
                            "examIndex": "ex_gzIoe_1650845175461",
                            "title": "1학기 수행평가 #1",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_TTDlH_1654124608210",
                            "title": "수행평가#2",
                            "userCount": 19.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_kaDxf_1646364735501",
                    "subject": "[2022] 프로그래밍 2-9",
                    "examInfo": [
                        {
                            "examIndex": "ex_dotzY_1653876083805",
                            "title": "수행평가#2",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_joTge_1649917626306",
                            "title": "1학기 수행평가 #1",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_JKwJg_1646364748202",
                    "subject": "[2022] 프로그래밍 2-10",
                    "examInfo": [
                        {
                            "examIndex": "ex_iZvoC_1650411383733",
                            "title": "1학기 수행평가 #1",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_DjGgl_1654643896025",
                            "title": "수행평가#2",
                            "userCount": 19.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dElzK_1646364655119",
                    "subject": "[2022] 프로그래밍 2-5",
                    "examInfo": [
                        {
                            "examIndex": "ex_PdsRU_1650496301456",
                            "title": "1학기 수행평가 #1",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_fvceP_1654125148226",
                            "title": "수행평가#2",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_jfCSa_1646364627369",
                    "subject": "[2022] 프로그래밍 2-3",
                    "examInfo": [
                        {
                            "examIndex": "ex_diAiy_1649915902332",
                            "title": "1학기 수행평가 #1",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_bufiS_1654125669695",
                            "title": "수행평가#2",
                            "userCount": 17.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_QruXF_1646364805743",
                    "subject": "[2022] 프로그래밍 2-11",
                    "examInfo": [
                        {
                            "examIndex": "ex_FpgbV_1653977136261",
                            "title": "수행평가#2",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_lLDkF_1650330074364",
                            "title": "1학기 수행평가 #1",
                            "userCount": 19.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_opvQr_1646364721826",
                    "subject": "[2022] 프로그래밍 2-8",
                    "examInfo": [
                        {
                            "examIndex": "ex_gLUlU_1650495856972",
                            "title": "1학기 수행평가 #1",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_QBcZd_1654124418699",
                            "title": "수행평가#2",
                            "userCount": 22.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_KBUbI_1646364642284",
                    "subject": "[2022] 프로그래밍 2-4",
                    "examInfo": [
                        {
                            "examIndex": "ex_ywRSc_1653885953623",
                            "title": "수행평가#2",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_ShpwT_1650005976947",
                            "title": "1학기 수행평가 #1",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dBOCe_1646113533640",
                    "subject": "[2022] 프로그래밍 2-1",
                    "examInfo": [
                        {
                            "examIndex": "ex_cptyG_1653961024047",
                            "title": "수행평가#2",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_llmxc_1650329642027",
                            "title": "1학기 수행평가 #1",
                            "userCount": 16.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gmEeY_1646364691569",
                    "subject": "[2022] 프로그래밍 2-6",
                    "examInfo": [
                        {
                            "examIndex": "ex_DwjNg_1654124914386",
                            "title": "수행평가#2",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_jBgMd_1650496191537",
                            "title": "1학기 수행평가 #1",
                            "userCount": 22.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_xOdIx_1646364705760",
                    "subject": "[2022] 프로그래밍 2-7",
                    "examInfo": [
                        {
                            "examIndex": "ex_IUnSr_1654125857186",
                            "title": "수행평가#2",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_WdzzY_1649916288187",
                            "title": "1학기 수행평가 #1",
                            "userCount": 22.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "changwon",
            "channelIndex": "changwon",
            "channelName": "창원대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_ydjQI_1647961998052",
                    "subject": "시스템프로그래밍_2022",
                    "examInfo": [
                        {
                            "examIndex": "ex_iReKS_1647964004747",
                            "title": "과제01",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_EAnfd_1652116712020",
                            "title": "과제02",
                            "userCount": 29.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_IdBlO_1647961937636",
                    "subject": "자료구조00분반_2022",
                    "examInfo": [
                        {
                            "examIndex": "ex_Phdge_1652112690982",
                            "title": "과제03",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_mqnCR_1647965372820",
                            "title": "과제01",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_DzMHh_1649829325705",
                            "title": "과제02",
                            "userCount": 38.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "khu",
            "channelIndex": "khu",
            "channelName": "경희대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_JlXyi_1646199546760",
                    "subject": "[2022년 1학기/김범석] 알기쉬운 소프트웨어 코딩(GEE1345-G02)",
                    "examInfo": [
                        {
                            "examIndex": "ex_dOcRd_1655017272771",
                            "title": "[기말고사] 코딩문제",
                            "userCount": 64.0
                        },
                        {
                            "examIndex": "ex_Olwsw_1651053840397",
                            "title": "[중간고사] 코딩문제",
                            "userCount": 68.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_pcliy_1646199397213",
                    "subject": "[2022년 1학기/허림] 알기쉬운 소프트웨어 코딩(GEE1345-G01)",
                    "examInfo": [
                        {
                            "examIndex": "ex_TWdSB_1651112215949",
                            "title": "[중간고사] 코딩문제",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_AIXqf_1655017349247",
                            "title": "[기말고사] 코딩문제",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_zjObe_1650863088239",
                    "subject": "2022년도 1학기 KHU 코딩 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_XZdoI_1650865195538",
                            "title": "1학기 SW코딩 모의평가",
                            "userCount": 17.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_cZSRp_1650609593697",
                    "subject": "2022년 봄 프로그래밍 경시대회",
                    "examInfo": [
                        {
                            "examIndex": "ex_MQAzj_1650609629596",
                            "title": "문제 풀이 테스트",
                            "userCount": 50.0
                        },
                        {
                            "examIndex": "ex_yXJhd_1652227152168",
                            "title": "22 봄 프로그래밍 경시대회",
                            "userCount": 42.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gFJWg_1646199251423",
                    "subject": "[2022년 1학기/이승형] 알기쉬운 소프트웨어 코딩(GEE1345-G00)",
                    "examInfo": [
                        {
                            "examIndex": "ex_cMTzc_1651112283874",
                            "title": "[중간고사] 코딩형",
                            "userCount": 63.0
                        },
                        {
                            "examIndex": "ex_hWkrd_1655017374753",
                            "title": "[기말고사] 코딩문제",
                            "userCount": 63.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_haKhe_1639973663553",
                    "subject": "[2021년 동계 계절학기/이승형] 알기쉬운 소프트웨어 코딩(GEE1345-G00)",
                    "examInfo": [
                        {
                            "examIndex": "ex_eGkWh_1641887232392",
                            "title": "기말고사",
                            "userCount": 13.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "bssm21-hs",
            "channelIndex": "bssm21-hs",
            "channelName": "부산소프트웨어마이스터고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_HzYeS_1646568393450",
                    "subject": "2022 BSSM C++ 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_MJifi_1655696732016",
                            "title": "20220620 알고리즘 수행평가",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_NPmnM_1656301029849",
                            "title": "20220627 C++ 문법 수행평가",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_gxmpT_1655372470432",
                            "title": "20220620 알고리즘 수행평가",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_YMCtz_1656037836881",
                            "title": "20220627 C++ 문법 수행평가",
                            "userCount": 17.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Rmfdh_1647291209960",
                    "subject": "프론트엔드 기초",
                    "examInfo": [
                        {
                            "examIndex": "ex_cQzVe_1647485290435",
                            "title": "#WEEK1",
                            "userCount": 61.0
                        },
                        {
                            "examIndex": "ex_dGaai_1650302446666",
                            "title": "#WEEK6",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_ezOIa_1649675425973",
                            "title": "#WEEK5",
                            "userCount": 45.0
                        },
                        {
                            "examIndex": "ex_CkaSw_1652319907208",
                            "title": "#WEEK7",
                            "userCount": 55.0
                        },
                        {
                            "examIndex": "ex_EaXAU_1648492638146",
                            "title": "#WEEK3",
                            "userCount": 45.0
                        },
                        {
                            "examIndex": "ex_zmkbY_1647882207015",
                            "title": "#WEEK2",
                            "userCount": 46.0
                        },
                        {
                            "examIndex": "ex_muaty_1649087838063",
                            "title": "#WEEK4",
                            "userCount": 44.0
                        },
                        {
                            "examIndex": "ex_JmWlE_1653958415242",
                            "title": "개인 프로젝트",
                            "userCount": 47.0
                        },
                        {
                            "examIndex": "ex_mgeZw_1653362529295",
                            "title": "MEME GENERATOR",
                            "userCount": 43.0
                        },
                        {
                            "examIndex": "ex_UegSe_1653958427496",
                            "title": "팀 프로젝트",
                            "userCount": 39.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_QtgHB_1629164893176",
                    "subject": "웹 기초(1학년)",
                    "examInfo": [
                        {
                            "examIndex": "ex_PjcbV_1657712797623",
                            "title": "1학기 여름방학 javascript 과제",
                            "userCount": 43.0
                        },
                        {
                            "examIndex": "ex_KcbDU_1655432776786",
                            "title": "자바스크립트 실습과제(1학기 수행 반영)",
                            "userCount": 68.0
                        },
                        {
                            "examIndex": "ex_EDBNj_1654747702239",
                            "title": "웹 수행 과제 -스타벅스 기본 클론 홈페이지",
                            "userCount": 70.0
                        },
                        {
                            "examIndex": "ex_dfpok_1655627360351",
                            "title": "1학기 화면구현 개인 프로젝트 수행평가 제출",
                            "userCount": 68.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Neelv_1645918227938",
                    "subject": "2022 임베디드 리눅스 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_nhfLH_1652921861936",
                            "title": "[문제해결 6] 부트로더-시험",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_jDlgR_1649292933905",
                            "title": "[문제해결02] 리눅스 기본-시험",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_ajVhU_1649897643235",
                            "title": "[문제해결03] 리눅스 기본2 - 시험",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_ADddw_1650506072189",
                            "title": "[문제해결] 리눅스 기본3 - 시험",
                            "userCount": 28.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "mh2021-ms",
            "channelIndex": "mh2021-ms",
            "channelName": "매현중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_yfHdh_1646111525442",
                    "subject": "22년 매현중",
                    "examInfo": [
                        {
                            "examIndex": "ex_lcDbo_1657670472990",
                            "title": "박태식 작품 따라하기(1-6)",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_kJCae_1656035324133",
                            "title": "1학년1반 실습시험",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_fbaKg_1655960516695",
                            "title": "1학년4반 실습시험",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_cuejc_1657776290065",
                            "title": "한도현 작품 따라하기 (1-4)",
                            "userCount": 70.0
                        },
                        {
                            "examIndex": "ex_pYmla_1657853769683",
                            "title": "작품 따라하기",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_kccjZ_1657242940311",
                            "title": "정지후 작품 따라하기(1-3)",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_MPHhK_1656289772173",
                            "title": "1학년2반 실습시험",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_aHhsJ_1658104623038",
                            "title": "윤준서 작품 따라하기 (1-2)",
                            "userCount": 76.0
                        },
                        {
                            "examIndex": "ex_SfwrD_1656289664992",
                            "title": "1학년5반 실습시험",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_qklus_1656471575771",
                            "title": "5반",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_nJOPV_1656290265123",
                            "title": "1학년6반 실습시험",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_cAgWF_1657678871971",
                            "title": "노건국 작품 따라하기 (1-5)",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_aMiWe_1656035998858",
                            "title": "1학년3반 실습시험",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_wLYhR_1657681814620",
                            "title": "우승현 작품 따라하기 (1-1)",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_iiyvc_1658104712335",
                            "title": "신정윤 작품 따라하기 (1-4)",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_bzvlm_1657498386302",
                            "title": "신지우 작품 따라하기",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_anQmL_1657776234159",
                            "title": "권유빈 작품 따라하기(1-4)",
                            "userCount": 24.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_obAhD_1646224411586",
                    "subject": "22년 이의중",
                    "examInfo": [
                        {
                            "examIndex": "ex_aIgfY_1655102876872",
                            "title": "프로그래밍 시험연습",
                            "userCount": 68.0
                        },
                        {
                            "examIndex": "ex_PIWho_1655686285802",
                            "title": "2학년4반 실습시험",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_hHjap_1655686639691",
                            "title": "2학년6반 실습시험",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_QGQen_1655686406490",
                            "title": "2학년1반 실습시험",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_nGuKh_1655856219844",
                            "title": "2학년2반 실습시험",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_IOxns_1655856319060",
                            "title": "2학년3반 실습시험",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_hYAMc_1655955806356",
                            "title": "시험(전민성)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_cgBlj_1658188256538",
                            "title": "로또번호 구하기",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_PTeyb_1658188270101",
                            "title": "행성에서 무게구하기",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_fhXFC_1655856097695",
                            "title": "2학년5반 수행평가",
                            "userCount": 27.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kangwon",
            "channelIndex": "kangwon",
            "channelName": "강원대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_UEhhS_1648457745538",
                    "subject": "자료구조 (3분반)",
                    "examInfo": [
                        {
                            "examIndex": "ex_EaYue_1652854135065",
                            "title": "8-2. Tree 서브함수 구현",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_ZwBAS_1648710443170",
                            "title": "5 큐 실습",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_fehrk_1654666250186",
                            "title": "8-3. Tree 서브함수 구현",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_KAPfk_1648710809717",
                            "title": "8. Tree 서브함수 구현",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_THbMT_1648710718869",
                            "title": "7. 연결리스트 실습 2",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_Xjdio_1648710297558",
                            "title": "4. 스택 실습",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_FdWnK_1648710911460",
                            "title": "9. 우선순위 큐 : Heap Sort",
                            "userCount": 37.0
                        },
                        {
                            "examIndex": "ex_JjLrm_1648710601457",
                            "title": "6. 연결리스트 실습",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_aqSEi_1648707019430",
                            "title": "3. 배열,구조체,포인터 실습",
                            "userCount": 40.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_IBxAm_1645513671029",
                    "subject": "자바프로그래밍1 - 정충교",
                    "examInfo": [
                        {
                            "examIndex": "ex_JcscR_1652706167101",
                            "title": "12주 실습과제",
                            "userCount": 71.0
                        },
                        {
                            "examIndex": "ex_cScii_1647676872271",
                            "title": "4주 실습과제",
                            "userCount": 79.0
                        },
                        {
                            "examIndex": "ex_ifpda_1645588195430",
                            "title": "1주 실습과제",
                            "userCount": 82.0
                        },
                        {
                            "examIndex": "ex_Gdebc_1650892335291",
                            "title": "9주 실습과제",
                            "userCount": 73.0
                        },
                        {
                            "examIndex": "ex_TToig_1648512121511",
                            "title": "5주 실습과제",
                            "userCount": 79.0
                        },
                        {
                            "examIndex": "ex_NcdSF_1646481844784",
                            "title": "2주 실습과제",
                            "userCount": 83.0
                        },
                        {
                            "examIndex": "ex_zEfaN_1653907724506",
                            "title": "14주 실습과제",
                            "userCount": 66.0
                        },
                        {
                            "examIndex": "ex_oIxdf_1649507140732",
                            "title": "7주 실습과제",
                            "userCount": 76.0
                        },
                        {
                            "examIndex": "ex_kWGjw_1647137669319",
                            "title": "3주 실습과제",
                            "userCount": 79.0
                        },
                        {
                            "examIndex": "ex_DgmoG_1651461258183",
                            "title": "10주 실습과제",
                            "userCount": 70.0
                        },
                        {
                            "examIndex": "ex_gxylY_1648963917224",
                            "title": "6주 실습과제",
                            "userCount": 76.0
                        },
                        {
                            "examIndex": "ex_nJffd_1653315416302",
                            "title": "13주 실습과제",
                            "userCount": 71.0
                        },
                        {
                            "examIndex": "ex_pscjg_1652101568367",
                            "title": "11주 실습과제",
                            "userCount": 71.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_GJbrb_1648453033646",
                    "subject": "고급파이썬프로그래밍(2분반)",
                    "examInfo": [
                        {
                            "examIndex": "ex_Hjgdc_1648458820556",
                            "title": "[6주차] 실습",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_laMUl_1648458820614",
                            "title": "[12주차] 실습",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_uDdgf_1648458820545",
                            "title": "[11주차] 실습",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_uuHPC_1655377193588",
                            "title": "[15주차] 실습",
                            "userCount": 35.0
                        },
                        {
                            "examIndex": "ex_fPCaG_1648458830679",
                            "title": "[9주차] 실습",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_bmLfh_1648458820565",
                            "title": "[4주차] 실습",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_Chbev_1648458820561",
                            "title": "[13주차] 실습",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_jbkOh_1648458820540",
                            "title": "[5주차] 실습",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_UYihN_1648458820624",
                            "title": "[7주차] 실습",
                            "userCount": 40.0
                        },
                        {
                            "examIndex": "ex_SmaYl_1648458820552",
                            "title": "[10주차] 실습",
                            "userCount": 40.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_oeVTH_1645763382857",
                    "subject": "2022-1 자바프로그래밍 (박성규)",
                    "examInfo": [
                        {
                            "examIndex": "ex_QyQQj_1645763405415",
                            "title": "9주차 과제",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_ILlmE_1645763405427",
                            "title": "중간고사(실기)",
                            "userCount": 42.0
                        },
                        {
                            "examIndex": "ex_tSgIH_1645763405496",
                            "title": "6주차 과제",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_NaWas_1645763405461",
                            "title": "14주차 과제",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_zMOHv_1645763405466",
                            "title": "11주차 과제",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_vhhvL_1645763405505",
                            "title": "4주차 과제",
                            "userCount": 42.0
                        },
                        {
                            "examIndex": "ex_JZAJa_1645763405456",
                            "title": "5주차 과제",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_MSEej_1645763405432",
                            "title": "1주차 과제",
                            "userCount": 42.0
                        },
                        {
                            "examIndex": "ex_Jrjbr_1645763405477",
                            "title": "기말고사(실기)",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_SdcTk_1645763405443",
                            "title": "3주차 과제",
                            "userCount": 42.0
                        },
                        {
                            "examIndex": "ex_yFbfh_1645763405523",
                            "title": "10주차 과제",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_nFFxD_1645763405488",
                            "title": "7주차 과제",
                            "userCount": 42.0
                        },
                        {
                            "examIndex": "ex_agUbt_1645763405421",
                            "title": "12주차 과제",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_PKmrj_1645763405472",
                            "title": "13주차 과제",
                            "userCount": 38.0
                        },
                        {
                            "examIndex": "ex_hjehL_1645763405437",
                            "title": "2주차 과제",
                            "userCount": 41.0
                        },
                        {
                            "examIndex": "ex_ibekb_1645763405406",
                            "title": "기말고사(필기)",
                            "userCount": 41.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_tnLRb_1614836896914",
                    "subject": "자바프로그래밍1(5분반-담당교수:하진영)",
                    "examInfo": [
                        {
                            "examIndex": "ex_VbnJc_1644469899533",
                            "title": "1주차 과제",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_Icgrg_1644977749984",
                            "title": "기말고사(필기)",
                            "userCount": 34.0
                        },
                        {
                            "examIndex": "ex_oPlJU_1649820653374",
                            "title": "중간고사(필기)",
                            "userCount": 34.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "mkyu",
            "channelIndex": "mkyu",
            "channelName": "MKYU",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_Yjzad_1646963472972",
                    "subject": "구름 실시간 감독실 TEST",
                    "examInfo": [
                        {
                            "examIndex": "ex_gMteP_1646963550584",
                            "title": "평가 TEST",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kaist",
            "channelIndex": "kaist",
            "channelName": "KAIST",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_TjjjY_1653995870861",
                    "subject": "2023년도 KAIST 봄학기 전산학부 프로그래밍 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_ccHhe_1654002501898",
                            "title": "대학원 코딩 테스트",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "ajou",
            "channelIndex": "ajou",
            "channelName": "아주대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_vMpUd_1643167680853",
                    "subject": "2022년 동계SW역량강화 집중훈련대상자 평가테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_bdFZL_1643167928291",
                            "title": "[본 시험] 평가 테스트 (프로그래밍) 시험",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_TwaPa_1644219598381",
                            "title": "[본 시험] 평가 테스트 (프로그래밍) 시험 (추가시험)",
                            "userCount": 3.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "iarkdata",
            "channelIndex": "iarkdata",
            "channelName": "(주)아크데이타",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_Weddn_1586225147929",
                    "subject": "아크데이터 개발자 채용",
                    "examInfo": [
                        {
                            "examIndex": "ex_JhHgG_1649294157649",
                            "title": "웹 프론트엔드 개발자",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_URxBL_1655700970574",
                            "title": "자바 백엔드 개발자",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Cfkll_1645753837232",
                    "subject": "[2022 ARKDATA] 개발팀 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_hJccC_1646231397498",
                            "title": "[2022 ARKDATA] 개발팀 신입 코딩 테스트",
                            "userCount": 7.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kisy1998-ms",
            "channelIndex": "kisy1998-ms",
            "channelName": "연변한국학교(중)",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_xhzKg_1650359102544",
                    "subject": "AI코딩대회 본선대비",
                    "examInfo": [
                        {
                            "examIndex": "ex_Fmahs_1652606155478",
                            "title": "2022학년도 AI코딩대회 본선",
                            "userCount": 19.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "hyangilh-hs",
            "channelIndex": "hyangilh-hs",
            "channelName": "향일고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_equTy_1648007873703",
                    "subject": "2022학년도 3학년 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_UbjTs_1653539130059",
                            "title": "융합 소프트웨어 제작(30점)",
                            "userCount": 126.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_lAdfY_1646636498505",
                    "subject": "2022학년도 3학년 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_YVdeF_1652929255746",
                            "title": "수행평가",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "sangin-hs",
            "channelIndex": "sangin-hs",
            "channelName": "상인고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_sLKld_1645704911511",
                    "subject": "프로그래밍(2022)",
                    "examInfo": [
                        {
                            "examIndex": "ex_dkGKa_1646580660991",
                            "title": "출력문",
                            "userCount": 30.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kakaocloudschool",
            "channelIndex": "kakaocloudschool",
            "channelName": "카카오클라우드스쿨",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_jjAiU_1656460555888",
                    "subject": "파이썬프로그래밍/Django",
                    "examInfo": [
                        {
                            "examIndex": "ex_UbMcl_1656563357589",
                            "title": "파이썬 프로그래밍 평가",
                            "userCount": 26.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "hansolhs-hs",
            "channelIndex": "hansolhs-hs",
            "channelName": "한솔고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_eaSSh_1646135380701",
                    "subject": "프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_ZMnia_1655253118103",
                            "title": "1학기 문제해결 수행평가",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_opORS_1646135252979",
                    "subject": "정보과학",
                    "examInfo": [
                        {
                            "examIndex": "ex_MeyJP_1654843477094",
                            "title": "1학기 문제해결 수행평가",
                            "userCount": 49.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "tastycode-camp",
            "channelIndex": "tastycode-camp",
            "channelName": "맛있는코드",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_lhweQ_1655346201436",
                    "subject": "[2022 맛있는 코드 iOS 앱 개발과정 1차선발]",
                    "examInfo": [
                        {
                            "examIndex": "ex_jPCCc_1657250024258",
                            "title": "맛잇는 코드 선발테스트",
                            "userCount": 15.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kyungdong-hs",
            "channelIndex": "kyungdong-hs",
            "channelName": "경동고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_qkdjz_1654235296998",
                    "subject": "수행평가 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_gHpyy_1654384757244",
                            "title": "2022학년도 1학기 파어선 수행평가",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_VGeve_1654235297871",
                            "title": "2022학년도 1학기 파이선 수행평가2",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ZXjyk_1655082980783",
                    "subject": "정보 수행평가 6반",
                    "examInfo": [
                        {
                            "examIndex": "ex_PYDnC_1655082981742",
                            "title": "2022학년도 1학기 파어선 수행평가",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_weivF_1655075189918",
                    "subject": "수행평가 2반",
                    "examInfo": [
                        {
                            "examIndex": "ex_fJbiw_1655075190499",
                            "title": "2022학년도 1학기 파어선 수행평가",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_DcZdp_1641532856918",
                    "subject": "임시로 직접 만드는 강좌 2번째",
                    "examInfo": [
                        {
                            "examIndex": "ex_YkXRx_1641881247067",
                            "title": "수행평가1",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_BihGy_1655083044240",
                    "subject": "정보 수행평가 7반",
                    "examInfo": [
                        {
                            "examIndex": "ex_ZLGNc_1655083045833",
                            "title": "2022학년도 1학기 파어선 수행평가",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_pmFZz_1655078785819",
                    "subject": "정보 수행평가 4반",
                    "examInfo": [
                        {
                            "examIndex": "ex_GgNfF_1655078786537",
                            "title": "2022학년도 1학기 파어선 수행평가",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Ibddr_1655082926495",
                    "subject": "정보 수행평가 5반",
                    "examInfo": [
                        {
                            "examIndex": "ex_EEOaf_1655082927263",
                            "title": "2022학년도 1학기 파어선 수행평가",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_kjxgn_1655078715465",
                    "subject": "정보 수행평가 3반",
                    "examInfo": [
                        {
                            "examIndex": "ex_hSran_1655078716355",
                            "title": "2022학년도 1학기 파어선 수행평가",
                            "userCount": 22.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_vOSaA_1655078558898",
                    "subject": "정보 수행평가 1반",
                    "examInfo": [
                        {
                            "examIndex": "ex_StyTx_1655078559758",
                            "title": "2022학년도 1학기 파어선 수행평가",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_yafgP_1641883681435",
                    "subject": "경동고등학교 Python 기초",
                    "examInfo": [
                        {
                            "examIndex": "ex_knCDw_1653435954155",
                            "title": "수행평가1",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_TXJlV_1655092338899",
                    "subject": "정보 수행평가 8반",
                    "examInfo": [
                        {
                            "examIndex": "ex_aiyhW_1655092339873",
                            "title": "2022학년도 1학기 파어선 수행평가",
                            "userCount": 20.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kw",
            "channelIndex": "kw",
            "channelName": "광운대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_xGBba_1646019280869",
                    "subject": "고급프로그래밍 2022년도 1학기",
                    "examInfo": [
                        {
                            "examIndex": "ex_xSzjt_1652763297248",
                            "title": "실습 05/17",
                            "userCount": 51.0
                        },
                        {
                            "examIndex": "ex_kGdNy_1647843963609",
                            "title": "실습 03/22",
                            "userCount": 71.0
                        },
                        {
                            "examIndex": "ex_dBNFa_1651542802844",
                            "title": "실습 05/05",
                            "userCount": 53.0
                        },
                        {
                            "examIndex": "ex_Vysao_1652173638264",
                            "title": "실습 05/10 (05/05와 동일)",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_kaaNe_1649121488540",
                            "title": "실습 04/05",
                            "userCount": 68.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "zipdoc",
            "channelIndex": "zipdoc",
            "channelName": "집닥",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_lptsa_1630541506643",
                    "subject": "[2022][집닥] BE경력자 온라인 코딩 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_lQlrx_1647327935138",
                            "title": "2022 자바 백앤드 경력자 온라인 코딩 테스트",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "gajaeul",
            "channelIndex": "gajaeul",
            "channelName": "가재울고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_Rbuwd_1646353493656",
                    "subject": "2022학년도 1학년 정보",
                    "examInfo": [
                        {
                            "examIndex": "ex_iliLc_1655769061194",
                            "title": "Python_1학기_수행",
                            "userCount": 203.0
                        },
                        {
                            "examIndex": "ex_CfTam_1656034533808",
                            "title": "Python_1학기_수행_추가",
                            "userCount": 8.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "hyundaimobis",
            "channelIndex": "hyundaimobis",
            "channelName": "현대모비스",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_jxFdK_1656313847382",
                    "subject": "[`22 현대모비스 알고리즘 경진대회]",
                    "examInfo": [
                        {
                            "examIndex": "ex_CgVhs_1656484883854",
                            "title": "`22 현대모비스 알고리즘 경진대회 예선 (일반부)",
                            "userCount": 824.0
                        },
                        {
                            "examIndex": "ex_dyQzc_1656484865036",
                            "title": "`22 현대모비스 알고리즘 경진대회 예선 (학생부)",
                            "userCount": 1233.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_UxJbX_1656998297371",
                    "subject": "[`22 현대모비스 알고리즘 경진대회 본선]",
                    "examInfo": [
                        {
                            "examIndex": "ex_yYzXa_1657076703405",
                            "title": "`22 현대모비스 알고리즘 경진대회 본선 (사전테스트 환경점검)",
                            "userCount": 86.0
                        },
                        {
                            "examIndex": "ex_QGCva_1657076705241",
                            "title": "`22 현대모비스 알고리즘 경진대회 본선 (일반부)",
                            "userCount": 50.0
                        },
                        {
                            "examIndex": "ex_eiQqk_1657076709891",
                            "title": "`22 현대모비스 알고리즘 경진대회 본선 (학생부)",
                            "userCount": 53.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "seocheongo-hs",
            "channelIndex": "seocheongo-hs",
            "channelName": "서천고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_MEMak_1653891443623",
                    "subject": "2-8 문제해결 프로젝트(나도 출제자) 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_mCATh_1655045879988",
                            "title": "다른 반 문제 풀어보기(2-6, 5일부)",
                            "userCount": 27.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_rDxTi_1653867846506",
                    "subject": "2-3 문제해결 프로젝트(나도 출제자) 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_HRfaS_1655044020668",
                            "title": "다른 반 문제 풀기(2-4)",
                            "userCount": 33.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_BgdJU_1654645330064",
                    "subject": "2-7 문제해결 프로젝트(나도 출제자) 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_kLXeA_1655105272370",
                            "title": "다른 반 문제 풀어보기(2-5꺼)",
                            "userCount": 25.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gWEqp_1654645342727",
                    "subject": "2-9 문제해결 프로젝트(나도 출제자) 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_uacoy_1654791396689",
                            "title": "다른 반 문제 풀어보기(5반 - 2문항)",
                            "userCount": 19.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_RpeJc_1654126440305",
                    "subject": "2-5 문제해결 프로젝트(나도 출제자) 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_hemlC_1655104498122",
                            "title": "다른 반 문제 풀어보기(2-7꺼)",
                            "userCount": 27.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_bSWqf_1654790550659",
                    "subject": "2-6 문제해결 프로젝트(나도 출제자) 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_xeGgX_1655077342063",
                            "title": "다른 반 문제 풀기(2-8, 5일부)",
                            "userCount": 31.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_uxErK_1654126455474",
                    "subject": "2-1 문제해결 프로젝트(나도 출제자) 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_rsYhX_1655104123498",
                            "title": "다른 반 문제 풀어보기(2-2꺼)",
                            "userCount": 33.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dhWwd_1654645357956",
                    "subject": "2-4 문제해결 프로젝트(나도 출제자) 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_klgzG_1655250393773",
                            "title": "다른 반 문제 풀기(2-3꺼)",
                            "userCount": 27.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_leVMi_1654790564951",
                    "subject": "2-2 문제해결 프로젝트(나도 출제자) 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_DMCre_1655360658368",
                            "title": "다른 반 문제 풀어보기(2-1꺼)",
                            "userCount": 30.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "devth-beta",
            "channelIndex": "devth-beta",
            "channelName": "devthBeta",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_UdpOp_1653530045348",
                    "subject": "시험 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_CfhhA_1654156637036",
                            "title": "test",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_OnmAS_1654740020932",
                    "subject": "평가 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_FGlny_1655278871587",
                            "title": "시험",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dOLfa_1658148710632",
                    "subject": "테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_QcdSN_1658148816775",
                            "title": "test",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kakaorecruit",
            "channelIndex": "kakaorecruit",
            "channelName": "구kakaorecurit",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_tXitW_1644571929216",
                    "subject": "임시 평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_MelOB_1644572479228",
                            "title": "임시 시험",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kise",
            "channelIndex": "kise",
            "channelName": "한국정보과학진흥협회",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_iauhO_1653891343515",
                    "subject": "제19회 ICT어워드코리아(ICT Award KOREA 2022) 창의와 코딩분야",
                    "examInfo": [
                        {
                            "examIndex": "ex_Xbgeg_1654700704987",
                            "title": "알고리즘 프로그래밍 고등부",
                            "userCount": 110.0
                        },
                        {
                            "examIndex": "ex_lUBUm_1654700558176",
                            "title": "알고리즘 프로그래밍 중등부",
                            "userCount": 85.0
                        },
                        {
                            "examIndex": "ex_cMQAl_1654665549340",
                            "title": "이산수학 중등부",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_WVFsr_1654665786205",
                            "title": "이산수학_고등부",
                            "userCount": 39.0
                        },
                        {
                            "examIndex": "ex_cbFzI_1654755005463",
                            "title": "ICT Award_A_Test",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_jtAGf_1654700338784",
                            "title": "알고리즘 프로그래밍 초등부",
                            "userCount": 53.0
                        },
                        {
                            "examIndex": "ex_ppHMd_1654701330891",
                            "title": "알고리즘 프로그래밍 연습문제",
                            "userCount": 207.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "sejong-hs",
            "channelIndex": "sejong-hs",
            "channelName": "세종고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_pTzRe_1620349566521",
                    "subject": "정보 심화 프로그래밍 문제",
                    "examInfo": [
                        {
                            "examIndex": "ex_ZFPYd_1657695850891",
                            "title": "22학년도 문제해결 프로그래밍 대회 본선",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_GXNVO_1655968449038",
                            "title": "22학년도 문제해결 프로그래밍 예선 대회",
                            "userCount": 91.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_alVjQ_1649553084203",
                    "subject": "[22학년도] 정보",
                    "examInfo": [
                        {
                            "examIndex": "ex_ZrmUk_1654935262029",
                            "title": "[2022학년도 정보] 문제해결 프로그래밍 수행평가",
                            "userCount": 316.0
                        },
                        {
                            "examIndex": "ex_jRYjU_1653869801744",
                            "title": "수행평가 시험 환경 확인",
                            "userCount": 216.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_FIUwc_1645662906089",
                    "subject": "[세종고] 2학년 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_wJyHB_1654700584995",
                            "title": "문제해결 수행평가",
                            "userCount": 62.0
                        },
                        {
                            "examIndex": "ex_acBlN_1649306417156",
                            "title": "보너스 문제",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_iolHb_1654830087912",
                            "title": "문제해결과 프로그래밍 (재시험)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_ArFii_1654152332376",
                            "title": "수행평가 환경 확인",
                            "userCount": 75.0
                        },
                        {
                            "examIndex": "ex_fDEgb_1647327012336",
                            "title": "동아리배 회장 뽑기",
                            "userCount": 61.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "pillyze",
            "channelIndex": "pillyze",
            "channelName": "필라이즈",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_zWcfF_1642407925976",
                    "subject": "필라이즈 개발자 코딩 테스트 (2022.4",
                    "examInfo": [
                        {
                            "examIndex": "ex_grgVa_1642408071126",
                            "title": "개발자 채용 문제",
                            "userCount": 8.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "ssu",
            "channelIndex": "ssu",
            "channelName": "숭실대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_YElhY_1651038557987",
                    "subject": "(2022년-1학기) 숭실대학교 IT미래인재릴레이장학생 선발시험",
                    "examInfo": [
                        {
                            "examIndex": "ex_iHlqR_1651039544754",
                            "title": "숭실대학교 IT미래인재릴레이장학생 선발",
                            "userCount": 44.0
                        },
                        {
                            "examIndex": "ex_MbHCS_1651039534452",
                            "title": "[모의시험] 숭실대학교 IT미래인재릴레이장학생 선발",
                            "userCount": 39.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "sshs",
            "channelIndex": "sshs",
            "channelName": "서울과학고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_gkyfq_1646055102891",
                    "subject": "2022-1 컴퓨터과학프로젝트",
                    "examInfo": [
                        {
                            "examIndex": "ex_mIszl_1646666079080",
                            "title": "파이썬 복습 문제",
                            "userCount": 41.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_NzitE_1649295593458",
                    "subject": "2022과학한마당_정보경시",
                    "examInfo": [
                        {
                            "examIndex": "ex_gXePl_1649637103092",
                            "title": "2022정보경시 pretest",
                            "userCount": 57.0
                        },
                        {
                            "examIndex": "ex_QAfyg_1649639357027",
                            "title": "2022과학한마당 정보경시대회",
                            "userCount": 57.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "wooribank",
            "channelIndex": "wooribank",
            "channelName": "우리은행",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_CGDvc_1649411271599",
                    "subject": "우리은행 직무역량 평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_Roflu_1649413653064",
                            "title": "내부역량 평가",
                            "userCount": 3.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "sunrin_genius",
            "channelIndex": "sunrin_genius",
            "channelName": "선린인터넷고등학교 중학생특별교육",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_mhKLE_1640569953083",
                    "subject": "2022 여름방학 중학생 특별교육(뼈대)",
                    "examInfo": [
                        {
                            "examIndex": "ex_nSuuV_1641471015707",
                            "title": "2021 겨울방학 중학생 특별교육 실기평가",
                            "userCount": 31.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_RlDPb_1657681835351",
                    "subject": "2022 여름방학 중학생 특별교육",
                    "examInfo": [
                        {
                            "examIndex": "ex_hPoSM_1658744717633",
                            "title": "2022 여름방학 중학생 특별교육 실기평가",
                            "userCount": 63.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "skyautonet",
            "channelIndex": "skyautonet",
            "channelName": "스카이오토넷",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_LNQly_1640321297246",
                    "subject": "(주)스카이오토넷 SW개발자 공개 채용",
                    "examInfo": [
                        {
                            "examIndex": "ex_uluak_1652074052862",
                            "title": "(주)스카이오토넷 [영상처리 SW Engineer 채용] 코딩테스트",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "smilegate",
            "channelIndex": "smilegate",
            "channelName": "스마일게이트",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_HOlri_1653615371850",
                    "subject": "스마일게이트 메가포트 채용 평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_uIXky_1654150103557",
                            "title": "[AI Agent] 코딩 테스트",
                            "userCount": 12.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "intec-hs",
            "channelIndex": "intec-hs",
            "channelName": "인천전자마이스터고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_KsdkL_1645238590895",
                    "subject": "자유실습",
                    "examInfo": [
                        {
                            "examIndex": "ex_dOjIn_1645238939422",
                            "title": "자유실습",
                            "userCount": 12.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_UYcof_1645512159894",
                    "subject": ".",
                    "examInfo": [
                        {
                            "examIndex": "ex_ghkCu_1653891919324",
                            "title": "gg",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_OojLT_1649254908295",
                            "title": "d",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_HhIej_1653892763446",
                            "title": "이거",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ksBhd_1614440100740",
                    "subject": "2021_기초 C프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_iaxkT_1641121327542",
                            "title": "[과제33] 매크로 상수의 이해(#define)",
                            "userCount": 47.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_TelcO_1646129761046",
                    "subject": "데이터베이스 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_fzIDd_1647532068419",
                            "title": "[과제6]3/18 (금) PPT 제출함",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_SIEFk_1647392831073",
                            "title": "[과제4]3/16(수요일) PPT 제출함2",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_SrqEX_1646354965081",
                            "title": "[과제1] 3/4 기본예제_1",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_ZvZqW_1646315371571",
                            "title": "3월4일_1",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_ZPkQm_1646354985426",
                            "title": "[과제2]3/4 퀴즈생성",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_FPXbC_1647392847360",
                            "title": "[과제5]3/16(수요일) PPT 제출함3(내용정리)",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_ldhWv_1647357709049",
                            "title": "[과제3]3/16(수요일) PPT 제출함1",
                            "userCount": 17.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_yrtEu_1646129658359",
                    "subject": "2022 프로그래밍(회로1-1)",
                    "examInfo": [
                        {
                            "examIndex": "ex_dNeUD_1646837085637",
                            "title": "C언어 연습장",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_EctjC_1648041396105",
                            "title": "3/24 PPT제출함",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_EkLYl_1654150579172",
                            "title": "복붙가능한 메모장",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_djfzn_1654572107241",
                            "title": "[수행평가 연습장]",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_ncdaf_1647434112359",
                            "title": "3/17 실습1",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_rIPcX_1646837200702",
                            "title": "3/9 < 4. 기본개념1 >",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_BZFRc_1646837118918",
                            "title": "3/9 < 1. 컴파일러 알아보기 >",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_iVSpK_1647433925384",
                            "title": "[ 연습장 ]",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_wFJqh_1646837174558",
                            "title": "3/9 < 3. Hello World >",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_DxeHi_1646837217559",
                            "title": "3/9 < 5. 기본개념2 >",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_RlJxM_1651473546435",
                            "title": "2022학년도 1학기 2차 수행평가",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_jkQkC_1649258364999",
                            "title": "[수행평가]기초코딩1",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_rspDw_1654124254545",
                            "title": "[수행평가] 5월 31일",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_jHfAH_1646837143520",
                            "title": "3/9 < 2. 인터프리터 알아보기 >",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_dlkgl_1647433955598",
                            "title": "3/17 과제해결2. 변수와 자료형",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_YtjdZ_1648454646058",
                            "title": "[연습장]",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_hiXWN_1649939528476",
                            "title": "장동혁",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_qPdli_1647479870291",
                            "title": "3/17 실습4",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_dhjiK_1646837242146",
                            "title": "3/9 < 6. 알고리즘 PPT제출함 >",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_ItgrK_1647434192778",
                            "title": "3/17 실습3",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_miyPk_1647434271840",
                            "title": "3/17 보너스문제",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_wBhbl_1646231165424",
                            "title": "3/3 구름 알아보기1",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_HUKFa_1654664465425",
                            "title": "김현준",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_nMXiC_1647434168441",
                            "title": "3/17 실습2",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_mQgdg_1655273084449",
                            "title": "[6월16일] 수행평가 2시 시험",
                            "userCount": 17.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_OMVgi_1645771044967",
                    "subject": "2022_프로그래밍(통신과 1학년)",
                    "examInfo": [
                        {
                            "examIndex": "ex_CbhFB_1653445019593",
                            "title": "32차시. 팩토리얼 계산하기",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_cLoSd_1653445133789",
                            "title": "33차시. 온도변환 테이블(for문)",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_YsQJA_1647829010500",
                            "title": "7차시. 형식지정자(%d)를 이용한 출력",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_IGQgi_1648430866276",
                            "title": "12차시. 반지름을 입력받아 원의 면적과 둘레 출력하기",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_Qkqsh_1652079936940",
                            "title": "23차시. 두수중 큰수출력하기(if문)",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_epllg_1652239305367",
                            "title": "24차시. 학점 구하기",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_ndUcr_1646614241667",
                            "title": "3차시 과제(객체지향,절차지향언어)",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_dWdeJ_1654647950688",
                            "title": "35차시. While문을 활용한 프로그램 작성하기(3문항-출력,합,구구단출력)",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_jfEqI_1655700468891",
                            "title": "연습장",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_scwOD_1647830217207",
                            "title": "9차시. 출력칸수 조절 및 소수점 자릿수 조정 출력",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_bcrUc_1651458796314",
                            "title": "20차시. 탄도 궤적 프로그램 만들기",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_JWlCB_1652833713046",
                            "title": "25차시. 포인트를 활용한 회원등급 구하기(IF문)",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_zeRNd_1649659497612",
                            "title": "암호화하기",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_vwmov_1653446995485",
                            "title": "35차시. 주사위의 합 경우의 수 출력하는 프로그램(다중 for문)",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_BXNlg_1656286414264",
                            "title": "43차시. 최소공배수와 최대공약수 구하기",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_KBUtV_1652842789965",
                            "title": "29차시. 사칙연산 계산 프로그램작성(switch문)",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_kLflF_1648430639874",
                            "title": "10차시. 기호상수를 이용한 원의 넓이 구하기",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_QlfdZ_1649035081554",
                            "title": "15차시. 화씨온도를 섭씨온도로 변환하기(형변환 응용)",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_BckEv_1652842660431",
                            "title": "28차시. 달을 입력받아 일수 계산(Switch문)",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_XDEkv_1654648020908",
                            "title": "36차시. 입력받은 정수 중에서 최소값과 최대값 찾기",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_icJlB_1649033031197",
                            "title": "13차시. 학번,이름 입력받아 출력하기(문자열 함수 응용)",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_oFYVS_1652079273559",
                            "title": "22차시. 윤년 판별하기",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_AbfUl_1653446925993",
                            "title": "34차시. 입력받은 단수의 구구단을 출력(for문)",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_Mgxth_1653440628553",
                            "title": "30차시. 점수에 따른 학점구하기(switch~case문)",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_gVgJq_1656286347386",
                            "title": "41차시. 다양한 *모양 출력하기",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_ydEbQ_1652833933226",
                            "title": "27차시. 산술연산 계산기 만들기(IF문)",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_WkBNU_1649035013410",
                            "title": "14차시. 거스름돈 계산하기(산술연산자 활용)",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_vdefv_1646979206000",
                            "title": "6차시_과제. 자신의 이름과 나이, 주소 출력하는 프로그램 작성 후 제출",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_ypXHk_1646614096336",
                            "title": "2차시 과제(고급언어의 종류 조사하기)",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_JdVZj_1649650863494",
                            "title": "16차시. 은행 이자 계산하기",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_KhWak_1653440690078",
                            "title": "31차시. 입력받은 수까지의 합을 구하는 프로그램(for문)",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_LYlGp_1648430791079",
                            "title": "11차시. 3개 정수 입력받아 평균 출력하기",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_mDHbi_1650261638290",
                            "title": "18차시. 야구 투구 속도 마일을 Km로 환산하기",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_frjiv_1651459435528",
                            "title": "19차시. 시간 변환하는 프로그램 작성하기",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_jxYjd_1655252158917",
                            "title": "40차시. 숫자 추측 게임 프로그램(do~while문)",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_ltbGf_1655252098008",
                            "title": "39차시. 신호등 프로그램(do~while문)",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_PdiUB_1655102736995",
                            "title": "카운트 다운 프로그램",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_Xrtpg_1652076921782",
                            "title": "21차시. 홀짝수 구분하기",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_gaeen_1656309074896",
                            "title": "44차시. 2개의 실수를 계산하는 계산기 프로그램(While문)",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_VUbeA_1652833846657",
                            "title": "26차시. 비만도(BMI) 계산하기(IF문)",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_yhAdH_1647829083250",
                            "title": "8차시. 형식지정자(%c,%s)를 활용한 문자 출력하기",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_xqgyr_1649650969740",
                            "title": "17차시. 식사비용 지불 프로그램",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_zyDDm_1656286376559",
                            "title": "42차시. 약수와 약수 개수 구하기",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_qrpfj_1649657351085",
                            "title": "논리연산자와 삼항연산자의 활용",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_DFCyb_1646611638379",
                            "title": "1차시. 운영체제의 종류",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_FGNCh_1646980166246",
                            "title": "4차시. C언어의 기본 구조 이해하기",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_SlrsJ_1654648720071",
                            "title": "37차시. 1~100사이 3의 배수의 합을 구하는 프로그램(While문)",
                            "userCount": 30.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_rPikW_1646141748680",
                    "subject": "2022_1학년 프로그래밍(제어1반~2반)",
                    "examInfo": [
                        {
                            "examIndex": "ex_VYPRe_1647178668324",
                            "title": "[과제06] II_03. 연산자",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_kkDBo_1653627048130",
                            "title": "[과제11] II_03_제어문_반복문: 반복문의 기초 <단순반복>",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_bubJt_1654340373630",
                            "title": "[과제12] II_03_제어문_반복문: 반복문의 기초 <기본패턴>",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_nSSZw_1649423438101",
                            "title": "[과제07] II_03. 연산자 <종합실습>",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_simfG_1657499306316",
                            "title": "[과제 _ 023차시 ] _ 1차원 배열(1)",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_vGeag_1646364228907",
                            "title": "자유실습",
                            "userCount": 34.0
                        },
                        {
                            "examIndex": "ex_gqvhb_1650119162078",
                            "title": "[과제08] 알고리즘 제어 구조: 순차, 선택, 반복",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_JjDPf_1647178648374",
                            "title": "[과제05] II_02. 입출력함수",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_ZaKfe_1651409342343",
                            "title": "[과제09] II_03_제어문_조건문",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_iUhBc_1653610386486",
                            "title": "2022년 1학기 수행평가: <1차> 기초 코딩",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_haCeu_1646143232037",
                            "title": "[과제03] I_02. 프로그래밍의 절차 ~ 04. 프로그래밍 개발 환경",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_sdfFh_1647178629307",
                            "title": "[과제04] II_01. 자료형과변수",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_cwVfa_1656047207488",
                            "title": "2022년 1학기 수행평가: <2차> 발전 코딩",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_yFblk_1646143105911",
                            "title": "[과제02] I_01. 프로그래밍 언어의 종류와 특징(2)",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_mdefT_1646143086958",
                            "title": "[과제01] I_01. 프로그래밍 언어의 종류와 특징(1)",
                            "userCount": 33.0
                        },
                        {
                            "examIndex": "ex_jgOLz_1654341766665",
                            "title": "[과제13] II_03_제어문_반복문: 반복문의 기초 <중첩반복>",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_VGoov_1651409418661",
                            "title": "[과제10] II_03_제어문_조건문: 종합실습",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_PjHku_1654342992343",
                            "title": "[과제14] II_03_제어문_반복문: 반복문의 기초 <기초응용>",
                            "userCount": 32.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dNSce_1632917482666",
                    "subject": "모두의C기초",
                    "examInfo": [
                        {
                            "examIndex": "ex_SufxT_1645237645742",
                            "title": "자유실습",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_jhSdf_1646143978844",
                    "subject": "2022_1학년 프로그래밍(보충학습방)",
                    "examInfo": [
                        {
                            "examIndex": "ex_UOYZj_1651116407245",
                            "title": "[과제01] 1학기 1회고사 오답노트 제출",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_bzlvE_1657500095263",
                            "title": "1학기 2회고사 오답노트 제출",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_Nvuqz_1654824963224",
                            "title": "2회고사 시험범위(3)_[과제10] II_03_제어문_조건문: 종합실습",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_jEvNK_1654825062860",
                            "title": "2회고사 시험범위(6)_[과제13] II_03_제어문_반복문: 반복문의 기초 <중첩반복>",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_XanXa_1654825074073",
                            "title": "2회고사 시험범위(7)_[과제14] II_03_제어문_반복문: 반복문의 기초 <기초응용>",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_odOTi_1654825040814",
                            "title": "2회고사 시험범위(5)_[과제12] II_03_제어문_반복문: 반복문의 기초 <기본패턴>",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_Ebakj_1652957859574",
                            "title": "[연습용] 1차 수행평가 공개과제: 20문항",
                            "userCount": 34.0
                        },
                        {
                            "examIndex": "ex_Ugncc_1654825015574",
                            "title": "2회고사 시험범위(4)_[과제11] II_03_제어문_반복문: 반복문의 기초 <단순반복>",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_Evvky_1654580267656",
                            "title": "[연습용] 2차 수행평가 공개과제: 20문항",
                            "userCount": 34.0
                        },
                        {
                            "examIndex": "ex_hIsaF_1654824903119",
                            "title": "2회고사 시험범위(1)_[과제08] 알고리즘 제어 구조: 순차, 선택, 반복",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_QEXbr_1654824945976",
                            "title": "2회고사 시험범위(2)_[과제09] II_03_제어문_조건문",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_KFsjk_1646129689595",
                    "subject": "2022 프로그래밍(회로1-2)",
                    "examInfo": [
                        {
                            "examIndex": "ex_OjcFq_1646659377238",
                            "title": "3/8 연습장_인터프리터",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_lyCkI_1647868722451",
                            "title": "[3월22일]실습-1",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_RwijG_1646658861738",
                            "title": "3/8 연습장_컴파일러",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_wDMPF_1653913328308",
                            "title": "[수행평가] 5월 31일",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_apItg_1646659698999",
                            "title": "3/8 오프닝코드",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_lHlfj_1647269960018",
                            "title": "3/15 [과제해결1] 등교 알고리즘 제출함",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_ksMyw_1646659993702",
                            "title": "[과제] 3/8 PPT제출",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_egkvq_1647868770143",
                            "title": "[3월22일]PPT제출함",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_agEhA_1646650748026",
                            "title": "3/8 구름맛보기",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_bSQdV_1647309512971",
                            "title": "3/15 [과제해결1] 학교불편한점 알고리즘 제출함",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_HlcbL_1655102510174",
                            "title": "[6월14일 수행평가] 2시 시작",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_qwyIO_1647270091096",
                            "title": "3/15[과제해결2] 변수와 자료형",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_bDYUc_1654566246945",
                            "title": "[수행평가 연습장]",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_llPMU_1653965988601",
                            "title": "오늘 메모장",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_ifjHY_1649640102053",
                            "title": "-",
                            "userCount": 16.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_hPYej_1648195013833",
                    "subject": "2022 해원고 진로선택강좌 프로그래밍(C언어)",
                    "examInfo": [
                        {
                            "examIndex": "ex_ctaZx_1648195821031",
                            "title": "자유실습",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_NboPp_1648822637860",
                            "title": "1. 입출력함수",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_eFvtn_1650023014622",
                            "title": "5. 조건문",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_uYqlN_1649420406309",
                            "title": "2. 연산자",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_eOjrQ_1652483442554",
                            "title": "[연습용] 수행평가 공개과제 (30문항)",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_ncLxg_1654248585889",
                            "title": "수행평가(1차시)",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_HkOlr_1652446185525",
                            "title": "6. 반복문",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_LxTRN_1654248734080",
                            "title": "수행평가(2차시)",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_efMPe_1649425957776",
                            "title": "3. 연산자 <종합실습>",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_EYUWW_1650020413763",
                            "title": "4. 알고리즘 제어 구조: 순차, 선택, 반복",
                            "userCount": 18.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "dasaedu-hs",
            "channelIndex": "dasaedu-hs",
            "channelName": "다사고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_mzdIA_1645954204219",
                    "subject": "정보[2022]",
                    "examInfo": [
                        {
                            "examIndex": "ex_CBuJy_1652010385594",
                            "title": "[2022_퀴즈2] 조건문(2)",
                            "userCount": 50.0
                        },
                        {
                            "examIndex": "ex_KMZvl_1648769837050",
                            "title": "[2022_퀴즈1] 입출력과 변수, 연산자(3)",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_asaTH_1653912168637",
                            "title": "[2022_퀴즈3] 반복문(2)",
                            "userCount": 50.0
                        },
                        {
                            "examIndex": "ex_KcuEf_1653904766935",
                            "title": "[2022_퀴즈2] 조건문(3)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_dikLB_1652229307919",
                            "title": "[2022_퀴즈3] 반복문",
                            "userCount": 72.0
                        },
                        {
                            "examIndex": "ex_xYbiR_1651983477871",
                            "title": "[2022_퀴즈2] 조건문(1)",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_avaab_1649209993120",
                            "title": "[2022_퀴즈1] 입출력과 변수, 연산자(4)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_tjwIs_1648292504804",
                            "title": "[2022_퀴즈1] 입출력과 변수, 연산자",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_WSDPJ_1648701397485",
                            "title": "[2022_퀴즈1] 입출력과 변수, 연산자(2)",
                            "userCount": 47.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "sutaek-hs",
            "channelIndex": "sutaek-hs",
            "channelName": "수택고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_umndP_1651383950790",
                    "subject": "C언어 기초 (3-4)",
                    "examInfo": [
                        {
                            "examIndex": "ex_bcRsE_1654221823244",
                            "title": "[수행평가 5] 한 개의 정수를 입력받아 가위 바위 보 출력하기",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_slVYY_1655342494176",
                            "title": "[수행평가] 나만의 프로그램 만들기 (20점)",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_pSjHb_1653354724012",
                            "title": "[수행평가 3] 두 수를 입력받아 두 수의 합 출력하기",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_aePcF_1653549036932",
                            "title": "[수행평가 4] 두 수를 입력 받아 사칙 연산 출력하기",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_XdQxi_1652318768390",
                            "title": "[수행평가 1] 두 수의 합 출력하기",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_XEYee_1655252650417",
                            "title": "[수행평가 6] 한 개의 정수를 입력받아 계절 출력하기",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_TdpWB_1653005117764",
                            "title": "[수행평가 2] 두 변수의 값 교환하기",
                            "userCount": 23.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_hTUxd_1651383661093",
                    "subject": "C언어 기초 (3-8)",
                    "examInfo": [
                        {
                            "examIndex": "ex_pnLIf_1653617529246",
                            "title": "[수행평가 4] 두 수를 입력 받아 사칙 연산 출력하기",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_dxWfV_1652227479784",
                            "title": "[수행평가 1] 두 수의 합 출력하기",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_hiwHe_1655342752812",
                            "title": "[수행평가] 나만의 프로그램 만들기 (20점)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_skxFr_1655108280684",
                            "title": "[수행평가 6] 한 개의 정수를 입력받아 계절 출력하기",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_jfgdL_1652833648361",
                            "title": "[수행평가 2] 두 변수의 값 교환하기",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_lhqkb_1654221808499",
                            "title": "[수행평가 5] 한 개의 정수를 입력받아 가위 바위 보 출력하기",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_wllob_1653549081765",
                            "title": "[수행평가 3] 두 수를 입력받아 두 수의 합 출력하기",
                            "userCount": 21.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_lCCQF_1651384119742",
                    "subject": "C언어 기초 (3-2)",
                    "examInfo": [
                        {
                            "examIndex": "ex_oCfSJ_1652018028956",
                            "title": "[수행평가 1] 두 수의 합 출력하기",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_yzaDS_1655252683634",
                            "title": "[수행평가] 나만의 프로그램 만들기 (20점)",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_ddViO_1652227012117",
                            "title": "[수행평가 2] 두 변수의 값 교환하기",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_ghjzX_1652767501335",
                            "title": "[수행평가 3] 두 수를 입력받아 두 수의 합 출력하기",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_BUBZb_1653268034266",
                            "title": "[수행평가 4] 두 수를 입력 받아 사칙 연산 출력하기",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_HSfgj_1655024897009",
                            "title": "[수행평가 6] 한 개의 정수를 입력받아 계절 출력하기",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_FLybc_1653814771554",
                            "title": "[수행평가 5] 한 개의 정수를 입력받아 가위 바위 보 출력하기",
                            "userCount": 26.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_sRvTR_1651384161643",
                    "subject": "C언어 기초 (3-1)",
                    "examInfo": [
                        {
                            "examIndex": "ex_SaCwZ_1655108397362",
                            "title": "[수행평가] 나만의 프로그램 만들기 (20점)",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_xaMXj_1652624317081",
                            "title": "[수행평가 3] 두 수를 입력받아 두 수의 합 출력하기",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_EVNlh_1655024872503",
                            "title": "[수행평가 6] 한 개의 정수를 입력받아 계절 출력하기",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_xqAWH_1652098705878",
                            "title": "[수행평가 2] 두 변수의 값 교환하기",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_LMkaM_1653203129710",
                            "title": "[수행평가 4] 두 수를 입력 받아 사칙 연산 출력하기",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_aljTw_1652017984120",
                            "title": "[수행평가 1] 두 수의 합 출력하기",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_yaSfo_1653886687558",
                            "title": "[수행평가 5] 한 개의 정수를 입력받아 가위 바위 보 출력하기",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_yilVL_1651383533338",
                    "subject": "C언어 기초 (3-9)",
                    "examInfo": [
                        {
                            "examIndex": "ex_ZjTUN_1655698696840",
                            "title": "[수행평가] 나만의 프로그램 만들기 (20점)",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_zKddk_1655337948090",
                            "title": "[수행평가 6] 한 개의 정수를 입력받아 계절 출력하기",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_UbUti_1654221852092",
                            "title": "[수행평가 5] 한 개의 정수를 입력받아 가위 바위 보 출력하기",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_JaqVW_1653537188451",
                            "title": "[수행평가 4] 두 수를 입력 받아 사칙 연산 출력하기",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_uZsee_1653275048736",
                            "title": "[수행평가 2] 두 변수의 값 교환하기",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_wAVIg_1653376047391",
                            "title": "[수행평가 3] 두 수를 입력받아 두 수의 합 출력하기",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_ssjTF_1652314063386",
                            "title": "[수행평가 1] 두 수의 합 출력하기",
                            "userCount": 22.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dVgkz_1651383711573",
                    "subject": "C언어 기초 (3-7)",
                    "examInfo": [
                        {
                            "examIndex": "ex_uLgjL_1653015423616",
                            "title": "[수행평가 3] 두 수를 입력받아 두 수의 합 출력하기",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_iAIaY_1655044710725",
                            "title": "[수행평가 6] 한 개의 정수를 입력받아 계절 출력하기",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_QgcSM_1655363314110",
                            "title": "[수행평가] 나만의 프로그램 만들기 (20점)",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_iEery_1652833702016",
                            "title": "[수행평가 2] 두 변수의 값 교환하기",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_dGKln_1652227438406",
                            "title": "[수행평가 1] 두 수의 합 출력하기",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_dtdbd_1654221754366",
                            "title": "[수행평가 5] 한 개의 정수를 입력받아 가위 바위 보 출력하기",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_XrKvc_1653549237983",
                            "title": "[수행평가 4] 두 수를 입력 받아 사칙 연산 출력하기",
                            "userCount": 16.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gbBVl_1614778452274",
                    "subject": "3-1  C언어",
                    "examInfo": [
                        {
                            "examIndex": "ex_gAaqh_1655037616364",
                            "title": "[수행평가] 나만의 프로그램 만들기 (20점)",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_mBzHh_1651383856787",
                    "subject": "C언어 기초 (3-5)",
                    "examInfo": [
                        {
                            "examIndex": "ex_KcbOt_1652767445735",
                            "title": "[수행평가 3] 두 수를 입력받아 두 수의 합 출력하기",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_gjHql_1652018056050",
                            "title": "[수행평가 1] 두 수의 합 출력하기",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_eeNpR_1655252616760",
                            "title": "[수행평가] 나만의 프로그램 만들기 (20점)",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_PixVE_1653272413864",
                            "title": "[수행평가 4] 두 수를 입력 받아 사칙 연산 출력하기",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_SwdzZ_1652226950551",
                            "title": "[수행평가 2] 두 변수의 값 교환하기",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_tKqVk_1653883139802",
                            "title": "[수행평가 5] 한 개의 정수를 입력받아 가위 바위 보 출력하기",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_zLMCT_1655044619374",
                            "title": "[수행평가 6] 한 개의 정수를 입력받아 계절 출력하기",
                            "userCount": 25.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_MiXfg_1651384074658",
                    "subject": "C언어 기초 (3-3)",
                    "examInfo": [
                        {
                            "examIndex": "ex_BvnHt_1652767383760",
                            "title": "[수행평가 2] 두 변수의 값 교환하기",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_ArgXi_1655337916432",
                            "title": "[수행평가] 나만의 프로그램 만들기 (20점)",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_YDknR_1655252561537",
                            "title": "[수행평가 6] 한 개의 정수를 입력받아 계절 출력하기",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_cOWVc_1653351007562",
                            "title": "[수행평가 3] 두 수를 입력받아 두 수의 합 출력하기",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_iLsfh_1653354752986",
                            "title": "[수행평가 4] 두 수를 입력 받아 사칙 연산 출력하기",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_clhhw_1654128207420",
                            "title": "[수행평가 5] 한 개의 정수를 입력받아 가위 바위 보 출력하기",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_nuQoR_1652314024053",
                            "title": "[수행평가 1] 두 수의 합 출력하기",
                            "userCount": 19.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_kVrAc_1651383797663",
                    "subject": "C언어 기초 (3-6)",
                    "examInfo": [
                        {
                            "examIndex": "ex_NBYjf_1653354553706",
                            "title": "[수행평가 2] 두 변수의 값 교환하기",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_TaNHl_1653976887916",
                            "title": "[수행평가 5] 한 개의 정수를 입력받아 가위 바위 보 출력하기",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_kGufR_1655698674346",
                            "title": "[수행평가] 나만의 프로그램 만들기 (20점)",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_gUEeD_1653617565444",
                            "title": "[수행평가 4] 두 수를 입력 받아 사칙 연산 출력하기",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_dvSoe_1652227534056",
                            "title": "[수행평가 1] 두 수의 합 출력하기",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_TfQzA_1653375402541",
                            "title": "[수행평가 3] 두 수를 입력받아 두 수의 합 출력하기",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_Vbkue_1655337968617",
                            "title": "[수행평가 6] 한 개의 정수를 입력받아 계절 출력하기",
                            "userCount": 20.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "feelway",
            "channelIndex": "feelway",
            "channelName": "(주)필웨이",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_QYRNH_1645503843235",
                    "subject": "Feelway / [ Front-end ]  / 주니어",
                    "examInfo": [
                        {
                            "examIndex": "ex_zBVVL_1646414149076",
                            "title": "[ Feelway - Front-end / 주니어 ]",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_rdjju_1646964752406",
                    "subject": "Feelway / [Back-end] / 주니어",
                    "examInfo": [
                        {
                            "examIndex": "ex_txsTR_1646964825100",
                            "title": "[ Feelway - backend / 주니어]",
                            "userCount": 4.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "saraminhr",
            "channelIndex": "saraminhr",
            "channelName": "saramin",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_JFafb_1644977792923",
                    "subject": "사람인HR TEST 평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_faUPJ_1644979235956",
                            "title": "사람인  TEST",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_IaskY_1589259886448",
                    "subject": "[사람인HR] 2022 Tech 직무 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_Ogkok_1643332390227",
                            "title": "[개발팀] 경력직  개발자 코딩테스트 B",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_anwTG_1652762827783",
                            "title": "[IT연구소] 2022년 앱개발자 채용",
                            "userCount": 16.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "dge",
            "channelIndex": "dge",
            "channelName": "대구교육청",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_PdEVg_1656304384303",
                    "subject": "제4회 청소년 ICT 창업가 캠프 예선 대회 (고등학생부)",
                    "examInfo": [
                        {
                            "examIndex": "ex_DbOcL_1657599127435",
                            "title": "제4회 청소년 ICT창업가 캠프 예선대회(고등학생부)",
                            "userCount": 68.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_EJVTy_1654832544902",
                    "subject": "창의성경진대회테스트(중학)",
                    "examInfo": [
                        {
                            "examIndex": "ex_oCbxj_1654833723284",
                            "title": "test",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_OJzbe_1656317212322",
                    "subject": "[테스트] 제4회 청소년 ICT창업가 캠프 예선 대회",
                    "examInfo": [
                        {
                            "examIndex": "ex_lfoMe_1656827290921",
                            "title": "[테스트] 제4회 청소년 ICT창업가 캠프 예선 대회",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_CaXwG_1656555198285",
                    "subject": "제4회 청소년 ICT창업가 캠프 예선대회(중학생부)",
                    "examInfo": [
                        {
                            "examIndex": "ex_HdVUF_1657164815474",
                            "title": "제4회 청소년 ICT창업가 캠프 예선대회(중학생부)",
                            "userCount": 121.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "osong-hs",
            "channelIndex": "osong-hs",
            "channelName": "오송고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_rFNbY_1656998088289",
                    "subject": "[2학년 정보과학] 나도 출제자!",
                    "examInfo": [
                        {
                            "examIndex": "ex_IdTrO_1658190370678",
                            "title": "다른 친구들의 문제를 풀어보자~",
                            "userCount": 27.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_iWfsE_1653825201904",
                    "subject": "[3학년 정보과학] 나도 출제자!",
                    "examInfo": [
                        {
                            "examIndex": "ex_ZbkZV_1655683578473",
                            "title": "(6월 20일) 다른 친구가 만든 문제 해결해보기!",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_zatQf_1655258467479",
                            "title": "다른 친구들 문제 해결해보기~~~",
                            "userCount": 13.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "hanbaek-hs",
            "channelIndex": "hanbaek-hs",
            "channelName": "한백고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_nBAGT_1648443919991",
                    "subject": "정보",
                    "examInfo": [
                        {
                            "examIndex": "ex_yyhbZ_1653611997107",
                            "title": "수행평가[3-9]",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_giEge_1653522850184",
                            "title": "수행평가[3-11]",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_bKcRu_1653612112360",
                            "title": "수행평가 [3-1]",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_btTKe_1653959881727",
                            "title": "수행평가[3-7]",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_FrgzJ_1653612112241",
                            "title": "수행평가[3-5]",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_snoRv_1654575626247",
                            "title": "수행평가[원본]",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_gREez_1653452421599",
                            "title": "[sample]수행평가[원본]",
                            "userCount": 196.0
                        },
                        {
                            "examIndex": "ex_HLZSa_1655170041086",
                            "title": "수행평가[원본]-8~11반",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_roczA_1653522918180",
                            "title": "수행평가[3-8]",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_inCtl_1653034238964",
                            "title": "수행평가[원본]",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_cBYAr_1653434709268",
                            "title": "수행평가[3-4]",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_eTqlp_1654575624254",
                            "title": "수행평가[추가시험]",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_ooAbZ_1652855109242",
                            "title": "[sample]수행평가",
                            "userCount": 51.0
                        },
                        {
                            "examIndex": "ex_MvgaQ_1653959871568",
                            "title": "수행평가[3-10]",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_ddNSV_1653522915788",
                            "title": "수행평가[3-6]",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_zcVEO_1654575624184",
                            "title": "[sample]수행평가[원본]",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_BUHtP_1653612112130",
                            "title": "수행평가[3-2]",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_iOfJj_1653612075195",
                            "title": "수행평가[3-3]",
                            "userCount": 28.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_zOqne_1648454237688",
                    "subject": "한백고 정보 파이썬 강좌",
                    "examInfo": [
                        {
                            "examIndex": "ex_iXmaN_1652251271118",
                            "title": "test",
                            "userCount": 3.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "sanbuk-ms",
            "channelIndex": "sanbuk-ms",
            "channelName": "산북중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_iZZzG_1647492300303",
                    "subject": "프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_wdlew_1650288966930",
                            "title": "엔트리 프로그래밍 수행평가",
                            "userCount": 7.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "cosmos21-hs",
            "channelIndex": "cosmos21-hs",
            "channelName": "이일여자고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_phgLV_1649636752986",
                    "subject": "2022[3-8] 문제해결과 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_zBXil_1649636777813",
                            "title": "프로그래밍 중간평가(연습용-2)",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_cBdlJ_1655341367741",
                            "title": "22년1학기 [8반]문제해결 수행평가(20일)",
                            "userCount": 27.0
                        },
                        {
                            "examIndex": "ex_kcfjM_1649636777802",
                            "title": "수행평가(C형)",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_hVxHc_1649636777838",
                            "title": "수행평가(A형)",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_jtMYv_1649636777823",
                            "title": "2학기 프로그래밍 수행평가",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_SZKLt_1649636777827",
                            "title": "프로그래밍 중간평가(연습용-1)",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_fHlGk_1649636777808",
                            "title": "수행평가(B형)",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_IAaHz_1649636777831",
                            "title": "2021-1학기 수행평가 연습용 (0반)",
                            "userCount": 8.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_CWEhe_1649636529059",
                    "subject": "2022[3-5] 문제해결과 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_ewKKe_1649636546742",
                            "title": "수행평가(A형)",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_gVGMa_1649636546695",
                            "title": "수행평가(C형)",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_lglop_1655334408983",
                            "title": "22년1학기 [5반]문제해결 수행평가(16일)",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_nOyLG_1649636546724",
                            "title": "2학기 프로그래밍 수행평가",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_DaHWV_1649636546713",
                            "title": "프로그래밍 중간평가(연습용-2)",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_TXmPK_1655774798533",
                            "title": "추가 수행평가(21일)-출력",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_PjclL_1649636546735",
                            "title": "2021-1학기 수행평가 연습용 (0반)",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_zbBhJ_1649636546702",
                            "title": "수행평가(B형)",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_NLcJa_1649636546730",
                            "title": "프로그래밍 중간평가(연습용-1)",
                            "userCount": 5.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_epeIh_1649636689049",
                    "subject": "2022[3-7] 문제해결과 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_lFdTv_1655418915378",
                            "title": "22년1학기 [7반]문제해결 수행평가(17일)",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_hGale_1649636711910",
                            "title": "수행평가(C형)",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_KQgjf_1649636711957",
                            "title": "수행평가(A형)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_aZMgl_1649636711945",
                            "title": "프로그래밍 중간평가(연습용-1)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_LZGdd_1649636711916",
                            "title": "수행평가(B형)",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_limHi_1649636711951",
                            "title": "2021-1학기 수행평가 연습용 (0반)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_LfNxS_1649636711926",
                            "title": "프로그래밍 중간평가(연습용-2)",
                            "userCount": 3.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ejfYC_1649636397084",
                    "subject": "2022[3-4] 문제해결과 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_dQgDQ_1649636421055",
                            "title": "2학기 프로그래밍 수행평가",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_CvUbH_1649636421029",
                            "title": "수행평가(C형)",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_BqTjQ_1649636421076",
                            "title": "수행평가(A형)",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_jberO_1649636421064",
                            "title": "프로그래밍 중간평가(연습용-1)",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_pJnDc_1649636421036",
                            "title": "수행평가(B형)",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_KqFkj_1649636421070",
                            "title": "2021-1학기 수행평가 연습용 (0반)",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_nJEhM_1655425957583",
                            "title": "22년1학기 [4반]문제해결 수행평가(17일)",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_sUniP_1649636421043",
                            "title": "프로그래밍 중간평가(연습용-2)",
                            "userCount": 8.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_yAdwY_1649636353755",
                    "subject": "2022[3-3] 문제해결과 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_gMvVc_1649636376533",
                            "title": "2학기 프로그래밍 수행평가",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_pkFIa_1649636376554",
                            "title": "프로그래밍 중간평가(연습용-1)",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_xKfls_1649636376476",
                            "title": "수행평가(C형)",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_QXiLk_1649636376508",
                            "title": "프로그래밍 중간평가(연습용-2)",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_hLDfE_1649636376584",
                            "title": "수행평가(A형)",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_TTkDV_1649636376490",
                            "title": "수행평가(B형)",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_qhhNy_1649636376574",
                            "title": "2021-1학기 수행평가 연습용 (0반)",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_VBbhS_1655425895111",
                            "title": "22년1학기 [3반]문제해결 수행평가(17일)",
                            "userCount": 25.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gHade_1649636581280",
                    "subject": "2022[3-6] 문제해결과 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_HHAhN_1649636596846",
                            "title": "프로그래밍 중간평가(연습용-2)",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_NkNaD_1649636596862",
                            "title": "프로그래밍 중간평가(연습용-1)",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_NlxEM_1649636596874",
                            "title": "수행평가(A형)",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_eogEX_1649636596833",
                            "title": "수행평가(C형)",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_aPlNj_1655776887259",
                            "title": "22년1학기 [6반]문제해결 수행평가(21일)",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_cNgsW_1649636596857",
                            "title": "2학기 프로그래밍 수행평가",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_lFlEl_1649636596839",
                            "title": "수행평가(B형)",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_GWyzh_1649636596868",
                            "title": "2021-1학기 수행평가 연습용 (0반)",
                            "userCount": 5.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_yJkja_1649635342687",
                    "subject": "2022[3-1] 문제해결과 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_AeLui_1649635369755",
                            "title": "프로그래밍 중간평가(연습용-2)",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_cxkLr_1649635369766",
                            "title": "2학기 프로그래밍 수행평가",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_ZDYaO_1649635369749",
                            "title": "수행평가(B형)",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_wulMs_1649635369776",
                            "title": "2021-1학기 수행평가 연습용 (0반)",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_lvfBv_1655689862119",
                            "title": "추가문제(6월20일)",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_nCdQl_1655169079240",
                            "title": "22년 [1반] 1학기문제해결 수행평가(14일)",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_HpngK_1649635369736",
                            "title": "수행평가(C형)",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_gBYae_1649635369771",
                            "title": "프로그래밍 중간평가(연습용-1)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_jjOxu_1649635369781",
                            "title": "수행평가(A형)",
                            "userCount": 3.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_EdHEB_1649635527358",
                    "subject": "2022[3-2] 문제해결과 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_hGxUG_1655767755634",
                            "title": "추가 수행평가(21일)-출력",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_SWgak_1649635553734",
                            "title": "수행평가(B형)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_yvFdh_1649635553743",
                            "title": "프로그래밍 중간평가(연습용-2)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_Xlhva_1649635553774",
                            "title": "2021-1학기 수행평가 연습용 (0반)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_xkVGC_1655159815574",
                            "title": "[2반] 22년1학기 문제해결 수행평가(14일)",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_ExhUl_1649635553783",
                            "title": "수행평가(A형)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_zBNsb_1649635553761",
                            "title": "2학기 프로그래밍 수행평가",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_dccaN_1649635553726",
                            "title": "수행평가(C형)",
                            "userCount": 5.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "yonseicte",
            "channelIndex": "yonseicte",
            "channelName": "연세대학교 미래캠퍼스",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_ckizc_1597236996804",
                    "subject": "전공자",
                    "examInfo": [
                        {
                            "examIndex": "ex_ksQea_1641541555928",
                            "title": "기초 테스트",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "samjin-h-hs",
            "channelIndex": "samjin-h-hs",
            "channelName": "마산삼진고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_iFgYe_1656892780986",
                    "subject": "2022년 알고리즘 설계 경연한마당",
                    "examInfo": [
                        {
                            "examIndex": "ex_fvwNi_1656913447040",
                            "title": "2022년 알고리즘 설계 경연한마당",
                            "userCount": 15.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_PFplS_1655086895525",
                    "subject": "2022년 2학년 1학기 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_iYDrv_1655946894952",
                            "title": "22년 2학년 1학기 수행평가2 - 1, 2반",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_Emlhh_1655946804036",
                            "title": "22년 2학년 1학기 수행평가2 - 3반",
                            "userCount": 6.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "ulsan",
            "channelIndex": "ulsan",
            "channelName": "울산대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_bVbSO_1623050365943",
                    "subject": "교육기관용 문제 은행",
                    "examInfo": [
                        {
                            "examIndex": "ex_WWICi_1655814333593",
                            "title": "프로그래밍경진대회(2학년)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_khcgn_1655811615579",
                            "title": "프로그래밍경진대회(1학년)",
                            "userCount": 22.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_yicNM_1655703202055",
                    "subject": "[2022] 프로그래밍경진대회 1학년 test",
                    "examInfo": [
                        {
                            "examIndex": "ex_rHujq_1655703773811",
                            "title": "프로그래밍 경진대회",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "b2en",
            "channelIndex": "b2en",
            "channelName": "비투엔",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_bXfVW_1646281147572",
                    "subject": "[2022]비투엔 상반기 공채 모집",
                    "examInfo": [
                        {
                            "examIndex": "ex_bxpUq_1650873608268",
                            "title": "[2022]비투엔 상반기 공채 테스트-0427",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_GXQfi_1650875146793",
                            "title": "[2022]비투엔 상반기 공채 테스트-0428",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_zfGXk_1650872838138",
                            "title": "[2022]비투엔 상반기 공채 테스트-0426",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_hlbFm_1649397237992",
                            "title": "[2022]비투엔 상반기 공채 테스트-0420",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_STiyZ_1650416462576",
                            "title": "[2022]비투엔 상반기 공채 테스트-0421",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "wondang-hs",
            "channelIndex": "wondang-hs",
            "channelName": "인천원당고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_PKrRM_1596611585632",
                    "subject": "2022 교내 프로그래밍 경시대회",
                    "examInfo": [
                        {
                            "examIndex": "ex_jbyKu_1650005098607",
                            "title": "2022 교내 프로그래밍 경시대회(3학년)",
                            "userCount": 11.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "dangha-ms",
            "channelIndex": "dangha-ms",
            "channelName": "인천당하중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_YXaCr_1630147573655",
                    "subject": "한 눈에 읽는 파이썬3 기초",
                    "examInfo": [
                        {
                            "examIndex": "ex_Mrhbj_1641249376406",
                            "title": "수업과제",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kbsec",
            "channelIndex": "kbsec",
            "channelName": "KB증권",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_mzcZb_1655114185436",
                    "subject": "2022 KB증권 대졸 신입 온라인 필기전형- 코딩테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_flczD_1655188099109",
                            "title": "2022 KB증권 대졸 신입 온라인 필기전형-코딩테스트(추가 사전테스트)",
                            "userCount": 53.0
                        },
                        {
                            "examIndex": "ex_evlpx_1655188111450",
                            "title": "2022 KB증권 대졸 신입 온라인 필기전형-코딩테스트(본 시험)",
                            "userCount": 67.0
                        },
                        {
                            "examIndex": "ex_buGLo_1655188280833",
                            "title": "2022 KB증권 대졸 신입 온라인 필기전형-코딩테스트(사전테스트)",
                            "userCount": 31.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_kaabf_1654649010289",
                    "subject": "본 시험 문제 확인용",
                    "examInfo": [
                        {
                            "examIndex": "ex_dcdrK_1655187183273",
                            "title": "KB증권 내부 테스트용",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_hHucD_1654858516703",
                    "subject": "2022 KB증권 대졸 신입 온라인 필기전형(사전테스트)-코딩테스트  (TEST용)",
                    "examInfo": [
                        {
                            "examIndex": "ex_NiUhb_1655008042040",
                            "title": "2022 KB증권 대졸 신입사원 IT직무 코딩테스트(test용)",
                            "userCount": 6.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "daseo303-ms",
            "channelIndex": "daseo303-ms",
            "channelName": "대서중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_lPild_1653871140660",
                    "subject": "2학년 AI동아리",
                    "examInfo": [
                        {
                            "examIndex": "ex_WeYhO_1655100533274",
                            "title": "연습문제",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_LaroM_1655703933265",
                            "title": "6월 20일",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_bVjUT_1657517518597",
                            "title": "7월 11일",
                            "userCount": 8.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_NeIPq_1652622376683",
                    "subject": "5반",
                    "examInfo": [
                        {
                            "examIndex": "ex_NyApU_1653880772306",
                            "title": "수행평가",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_fdcpb_1653878721613",
                            "title": "연습",
                            "userCount": 12.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ycuLG_1652622224880",
                    "subject": "3반",
                    "examInfo": [
                        {
                            "examIndex": "ex_oFifS_1653976911201",
                            "title": "수행평가",
                            "userCount": 14.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_bUNMd_1652622299203",
                    "subject": "4반",
                    "examInfo": [
                        {
                            "examIndex": "ex_sTyAj_1653436010703",
                            "title": "연습",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_fgrGF_1653438057752",
                            "title": "수행평가",
                            "userCount": 15.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_kqNOj_1652622401246",
                    "subject": "6반",
                    "examInfo": [
                        {
                            "examIndex": "ex_tRKuD_1654136519391",
                            "title": "수행평가",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_ffKfl_1654136057183",
                            "title": "연습2",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_NWAKE_1654844437905",
                            "title": "수행 결석생",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_iUjaD_1652622440334",
                    "subject": "8반",
                    "examInfo": [
                        {
                            "examIndex": "ex_hOIgY_1654585771309",
                            "title": "수행(결석생)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_VcqYt_1653957711875",
                            "title": "수행평가",
                            "userCount": 13.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_lzucj_1652622421141",
                    "subject": "7반",
                    "examInfo": [
                        {
                            "examIndex": "ex_zxwEl_1653448173365",
                            "title": "수행평가",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_yeQMa_1653446621681",
                            "title": "연습",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_TgNUg_1653892014253",
                            "title": "수행(결석생)",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_njVQv_1652622118354",
                    "subject": "1반",
                    "examInfo": [
                        {
                            "examIndex": "ex_hbBkf_1654147473622",
                            "title": "연습",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_fcrZJ_1654585719499",
                            "title": "수행(결석생)",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_mVJeL_1654149260577",
                            "title": "수행평가",
                            "userCount": 13.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_NJHQA_1652255157171",
                    "subject": "2반 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_fkTbk_1654585810763",
                            "title": "수행(결석생)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_qfEOB_1653611172582",
                            "title": "수행평가",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_dXiHe_1653609676261",
                            "title": "연습",
                            "userCount": 14.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "nhncommerce",
            "channelIndex": "nhncommerce",
            "channelName": "엔에이치엔커머스(주)",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_heiQt_1654830090073",
                    "subject": "2022년 NHN COMMERCE 현장 실습 - 미림여자정보과학고등학교 전용",
                    "examInfo": [
                        {
                            "examIndex": "ex_JIHlI_1655271772722",
                            "title": "2022년 NHN COMMERCE 현장 실습 - Pre test - 미림여자정보과학고 전용",
                            "userCount": 8.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "mkmasung-ms",
            "channelIndex": "mkmasung-ms",
            "channelName": "마성중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_lwdgS_1645063278155",
                    "subject": "3단원 문제해결과 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_gdTgD_1650288597596",
                            "title": "엔트리 프로그래밍 수행평가",
                            "userCount": 7.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "gajeong2022-hs",
            "channelIndex": "gajeong2022-hs",
            "channelName": "프로그래밍부",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_DLApL_1650430050793",
                    "subject": "[2022 가정고] C언어로 코딩하기",
                    "examInfo": [
                        {
                            "examIndex": "ex_EiBND_1650430421769",
                            "title": "변수와 입출력함수",
                            "userCount": 6.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dexrC_1650430152445",
                    "subject": "[2022 가정고] 프로그래밍부",
                    "examInfo": [
                        {
                            "examIndex": "ex_fYlcm_1650430491785",
                            "title": "변수와 입출력함수",
                            "userCount": 20.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Wyurq_1654824676471",
                    "subject": "2022 [정보]",
                    "examInfo": [
                        {
                            "examIndex": "ex_PtjWi_1655955768387",
                            "title": "파이썬 실습하기",
                            "userCount": 11.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "tech01-hs",
            "channelIndex": "tech01-hs",
            "channelName": "TECH01 택공일",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_pclkN_1649738732894",
                    "subject": "도전하는 젊음은 멋지고 아름답다~!",
                    "examInfo": [
                        {
                            "examIndex": "ex_lrOfD_1658279617203",
                            "title": "코틀린 핵심파악 1",
                            "userCount": 9.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_axfGh_1646272390904",
                    "subject": "[3-14] 스마트문화앱 콘텐츠제작+자료구조 @2022",
                    "examInfo": [
                        {
                            "examIndex": "ex_ecfYl_1647480436799",
                            "title": "2022-03-17(목) 스마앱 수업",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_zioMW_1649903686969",
                            "title": "2022-04-14(목) 자료구조 실습 4 (배열)",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_XQYdN_1647480495845",
                            "title": "스마앱 연습문제 1 (3월 17일 목요일)",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_zQErv_1655285636216",
                            "title": "자료구조 수행평가 3 (실기형)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_kiaRc_1649295725579",
                            "title": "2022-04-07(목) 자료구조 실습 2",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_QMoLH_1646630399199",
                            "title": "2022-03-08(화) 스마앱 수업",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_xJwbe_1652752238520",
                            "title": "자료구조 수행평가2 대비 연습문제 ①",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_JcjNz_1654147175365",
                            "title": "[자료구조] 스택과 큐",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_dkVIi_1647396099632",
                            "title": "2022-03-16(수) 스마앱 수업",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_eHtiI_1653311416588",
                            "title": "자료구조 수행평가 2 (실기형)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_wYwUk_1649123510096",
                            "title": "스마앱 연습문제 2 (4월 5일 화요일)",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_ZZgVz_1647236041247",
                            "title": "2022-03-14(월) 스마앱 수업",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_eDdKv_1655095954053",
                            "title": "수행평가3 대비 연습문제",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_TAQCJ_1646878812106",
                            "title": "2022-03-10(목) 스마앱 수업",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_juYdP_1649140014764",
                            "title": "자료구조 연습문제 1 (4월 5일 화요일)",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_hSOrz_1651560015719",
                            "title": "2022-05-09(월) 자료구조 실습 6 (배열 활용)",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_KyAkV_1649814645541",
                            "title": "2022-04-13(수) 자료구조 실습 3 (배열)",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_jaqRA_1649215492432",
                            "title": "자료구조 연습문제 2 (4월 7일 목요일)",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_Zajph_1647912713542",
                            "title": "2022-03-22(화) 스마앱 수업",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_HGVzd_1650861589437",
                            "title": "2022-04-25(월) 자료구조 실습 5 (배열 응용)",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_WHach_1648097463311",
                            "title": "2022-03-24(목) 스마앱 수업",
                            "userCount": 18.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_IIaIu_1637285300917",
                    "subject": "[예비도제반] 안드로이드앱개발 과정반",
                    "examInfo": [
                        {
                            "examIndex": "ex_hFrFH_1653979088973",
                            "title": "코틀린 시작하기",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_hlOdj_1651478457523",
                            "title": "[방과후]5월 2일 월요일 실습",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_fJiQa_1649753919329",
                            "title": "도전문제 1 (2022. 4. 12 화요일)",
                            "userCount": 14.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_bxHLe_1646619371613",
                    "subject": "[3-13] 자료구조 @2022",
                    "examInfo": [
                        {
                            "examIndex": "ex_KhcHp_1652065222881",
                            "title": "자료구조 실습 5 (5월 9일 월요일)",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_LNUkk_1655090150524",
                            "title": "수행평가3 대비 연습문제",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_ITwWa_1648707281625",
                            "title": "자료구조 연습문제 2 (3월 31일 목요일)",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_YAfDn_1655286200098",
                            "title": "자료구조 수행평가 3 (실기형)",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_IdjMC_1650521502116",
                            "title": "자료구조 실습 4 : 배열 (4월 21일 목요일)",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_hfNXs_1653384903030",
                            "title": "3학년 13반 자료구조 수행평가 2 (실기형)",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_OhkfL_1652943086772",
                            "title": "자료구조 수행평가2 대비 연습문제 ①",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_RHjHT_1647497992770",
                            "title": "자료구조 연습문제 1 (3월 17일 목요일)",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_ggkaE_1654147864959",
                            "title": "[자료구조] 스택과 큐",
                            "userCount": 7.0
                        },
                        {
                            "examIndex": "ex_tUgKh_1650250589269",
                            "title": "자료구조 실습 3 : 배열 (4월 18일 월요일)",
                            "userCount": 14.0
                        },
                        {
                            "examIndex": "ex_jJyhp_1649313402712",
                            "title": "자료구조 실습 2 (4월 7일 목요일)",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_brdfR_1646895039894",
                            "title": "2022-03-10(목) 자료구조 수업",
                            "userCount": 21.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "yeardreamschool",
            "channelIndex": "yeardreamschool",
            "channelName": "이어드림 스쿨",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_QcLhn_1651539820486",
                    "subject": "1기수 ",
                    "examInfo": [
                        {
                            "examIndex": "ex_JNzYY_1651540173513",
                            "title": "디지털 분야 (1주차 시험)",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "bnk",
            "channelIndex": "bnk",
            "channelName": "부산은행",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_LyObc_1655254646492",
                    "subject": "＊ BNK부산은행 D-IT「채용연계형 테크 인턴십」",
                    "examInfo": [
                        {
                            "examIndex": "ex_obHky_1655372403377",
                            "title": "*** BNK 부산은행 테크 인턴십 SW역량테스트",
                            "userCount": 92.0
                        },
                        {
                            "examIndex": "ex_MXRtH_1655365850543",
                            "title": "[TEST] BNK 부산은행 테스트 그룹 B",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_PbRnc_1655366291248",
                            "title": "[TEST] BNK 부산은행 테스트 - 그룹 D",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_ieWtO_1655371841271",
                            "title": "* BNK 부산은행 테크 인턴십 SW역량테스트",
                            "userCount": 95.0
                        },
                        {
                            "examIndex": "ex_lOYhQ_1655365532951",
                            "title": "[TEST] BNK 부산은행 그룹 1",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_MbUUw_1655279432070",
                            "title": "TEST BNK 부산은행 테스트 1 *",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_Nkahk_1655372047219",
                            "title": "** BNK 부산은행 테크 인턴십 SW역량테스트",
                            "userCount": 98.0
                        },
                        {
                            "examIndex": "ex_fQPjR_1655366011857",
                            "title": "[TEST] BNK 부산은행 TEST 그룹 C",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_YNDLS_1655372532558",
                            "title": "**** BNK 부산은행 테크 인턴십 SW역량테스트",
                            "userCount": 105.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "sunrint-hs",
            "channelIndex": "sunrint-hs",
            "channelName": "선린인터넷고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_obMMQ_1646268160608",
                    "subject": "2022 정보보호과 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_UYcvU_1653725610111",
                            "title": "정보보호과 프로그래밍 수행평가(배열) 3반",
                            "userCount": 24.0
                        },
                        {
                            "examIndex": "ex_WLixW_1653799644065",
                            "title": "정보보호과 프로그래밍 수행평가(배열) 1반",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_fxopO_1653799616908",
                            "title": "정보보호과 프로그래밍 수행평가(배열) 2반",
                            "userCount": 23.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_NRTfa_1646633749440",
                    "subject": "3학년 자료구조",
                    "examInfo": [
                        {
                            "examIndex": "ex_QCaQd_1655030161834",
                            "title": "[2차-2반] 비선형구조",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_uFfmL_1652003951048",
                            "title": "(1차) 3-1",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_Utaoy_1646760022197",
                            "title": "(수행-학습 활동) 자료와 정보, 알고리즘, 선형구조 학습 확인",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_XloCZ_1652004394315",
                            "title": "(1차) 3-3",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_iienk_1655433238259",
                            "title": "(1차) 재시험",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_zmhhz_1652004259081",
                            "title": "(1차) 3-2",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_HCzXS_1655030148837",
                            "title": "[2차-3반] 비선형구조",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_ckfcc_1655030135325",
                            "title": "[2차-1반] 비선형구조",
                            "userCount": 15.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_cRGeK_1614304706700",
                    "subject": "App:ple Pi",
                    "examInfo": [
                        {
                            "examIndex": "ex_xbaXk_1649947221100",
                            "title": "애플파이 C언어 코딩 테스트",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_OjTDg_1646352264448",
                    "subject": "2022 소프트웨어과 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_VVgYR_1653553074383",
                            "title": "수행2차 1-4",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_Cgdkl_1650431480606",
                            "title": "수행1차 1-5",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_JdtNm_1653553200302",
                            "title": "수행2차 1-6",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_gdhJT_1653553148620",
                            "title": "수행2차 1-5",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_sfxUt_1650431566699",
                            "title": "수행1차 1-6",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_ysXmm_1650431314333",
                            "title": "수행1차 1-4",
                            "userCount": 23.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_daFIu_1653377177972",
                    "subject": "2022 소프트웨어과 자료구조",
                    "examInfo": [
                        {
                            "examIndex": "ex_lRUua_1653961927931",
                            "title": "1학기 자료구조 수행평가 - 문제해결평가",
                            "userCount": 66.0
                        },
                        {
                            "examIndex": "ex_BiBOq_1654236160514",
                            "title": "1학기 자료구조 수행평가 - 문제해결평가(추가)",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_MSECI_1655273535771",
                    "subject": "2022 프로그래밍 경시대회",
                    "examInfo": [
                        {
                            "examIndex": "ex_ecbcd_1656556149238",
                            "title": "test",
                            "userCount": 129.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_EkjrF_1640662855020",
                    "subject": "2022학년도 신입생프로그래밍 교육(소프트웨어과)",
                    "examInfo": [
                        {
                            "examIndex": "ex_gUeuX_1641641074292",
                            "title": "2022 신입생프로그래밍교육 중간 테스트",
                            "userCount": 69.0
                        },
                        {
                            "examIndex": "ex_vheyI_1641945381463",
                            "title": "신입생 프로그래밍교육 최종 테스트",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_jzBtG_1646234245679",
                            "title": "소프트웨어과 프로그래밍 챌린지",
                            "userCount": 67.0
                        },
                        {
                            "examIndex": "ex_jPSkU_1641650037133",
                            "title": "2022 신입생프로그래밍교육 중간 테스트",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_Opcfz_1641948760652",
                            "title": "신입생 프로그래밍교육 최종 테스트",
                            "userCount": 73.0
                        },
                        {
                            "examIndex": "ex_jBVHi_1641791306149",
                            "title": "2022 신입생프로그래밍교육 중간 테스트 미응시자 대상",
                            "userCount": 8.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_luMil_1646876861850",
                    "subject": "2학년 자료구조",
                    "examInfo": [
                        {
                            "examIndex": "ex_iZZMg_1655023880964",
                            "title": "[1학기] 1반",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_eRhss_1655432996743",
                            "title": "[1학기] 재시험",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_Vgjjj_1655023911183",
                            "title": "[1학기] 2반",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_DxMbV_1655023989546",
                            "title": "[1학기] 3반",
                            "userCount": 20.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kyesan-ms",
            "channelIndex": "kyesan-ms",
            "channelName": "계산중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_ecbZu_1649917720745",
                    "subject": "함께하는 C언어",
                    "examInfo": [
                        {
                            "examIndex": "ex_CdgXx_1654079952562",
                            "title": "2022.06.02. 문제",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_dwYha_1653980106474",
                            "title": "2022.05.31. 문제",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_ZRJgP_1652103488684",
                            "title": "2022.05.10. 문제",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_YWIZJ_1654577014983",
                            "title": "2022.06.07. 문제",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_avPfO_1650934475737",
                            "title": "2022.05.03. 문제",
                            "userCount": 9.0
                        },
                        {
                            "examIndex": "ex_vZddU_1650196900443",
                            "title": "2022.04.19. 문제",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_HdMVl_1653300271485",
                            "title": "2022.05.24. 문제",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_XEGzO_1652771380514",
                            "title": "2022.05.17. 문제",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_vdQlc_1652943920829",
                            "title": "2022.05.19. 문제",
                            "userCount": 12.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_DeskP_1653479880810",
                    "subject": "3-4 정보수업",
                    "examInfo": [
                        {
                            "examIndex": "ex_SaCIP_1653479898277",
                            "title": "수행평가",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_EOeqC_1653479307397",
                    "subject": "3-1 정보수업",
                    "examInfo": [
                        {
                            "examIndex": "ex_gVgfP_1654936102680",
                            "title": "수행평가 제출하기",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_fhCiW_1653479732758",
                    "subject": "3-2 정보수업",
                    "examInfo": [
                        {
                            "examIndex": "ex_ZOJPM_1653479750834",
                            "title": "수행평가",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_bkHcc_1653479796170",
                    "subject": "3-3 정보수업",
                    "examInfo": [
                        {
                            "examIndex": "ex_Swqvf_1653479813837",
                            "title": "수행평가",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "ggmanagement-hs",
            "channelIndex": "ggmanagement-hs",
            "channelName": "경기경영고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_aAhKO_1643081267239",
                    "subject": "파이썬",
                    "examInfo": [
                        {
                            "examIndex": "ex_zKxMr_1654732519747",
                            "title": "3-7",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_jJSbE_1654733393433",
                            "title": "3-5",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_Effie_1648605889898",
                            "title": "3-7 수행평가1차",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_qARVh_1652340404568",
                            "title": "3-6 수행평가2차(조건문)",
                            "userCount": 20.0
                        },
                        {
                            "examIndex": "ex_VOuNx_1654732769363",
                            "title": "3-6",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_oEOij_1648603521244",
                            "title": "수행평가연습",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_RhkeP_1652405706555",
                            "title": "3-5 수행평가2차(조건문)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_RlKUC_1654574406817",
                            "title": "3-5 수행평가3차(반복문)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_AXNba_1648605719813",
                            "title": "3-6 수행평가1차",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_UMNGj_1652329465759",
                            "title": "3-7 수행평가2차(조건문)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_hQSvE_1654575952820",
                            "title": "3-6 수행평가3차(반복문)",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_UhDzI_1654576108283",
                            "title": "3-7 수행평가3차(반복문)",
                            "userCount": 21.0
                        },
                        {
                            "examIndex": "ex_UPjZG_1648605569171",
                            "title": "3-5 수행평가1차",
                            "userCount": 22.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "songwo-ms",
            "channelIndex": "songwo-ms",
            "channelName": "송우중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_kPzhe_1652524375084",
                    "subject": "daily 코딩",
                    "examInfo": [
                        {
                            "examIndex": "ex_jeoIw_1653275986007",
                            "title": "5월 20, 21일",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_dSCld_1652527125285",
                            "title": "5월15일 일요일",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_ljMBR_1652527081957",
                            "title": "5월14일 토요일",
                            "userCount": 2.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "dimigo",
            "channelIndex": "dimigo",
            "channelName": "디미고",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_bdglF_1645149413602",
                    "subject": "2022 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_RbLZz_1657583674678",
                            "title": "1차원배열 수행평가 문제D",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_rBomf_1649749622524",
                            "title": "조건문 수행평가 추가",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_kiQTb_1657583500479",
                            "title": "1차원배열 수행평가 문제 B",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_YCcks_1653868618215",
                            "title": "중첩반복문 수행평가B",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_ZVgXd_1657583782643",
                            "title": "1차원배열 수행평가 문제C",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_irsov_1652060214518",
                            "title": "반복문 수행평가C",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_pNBpP_1648423981341",
                            "title": "입출력연산자수행평가4",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_VmPWC_1652059984749",
                            "title": "반복문 수행평가A",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_gaibs_1653868787634",
                            "title": "중첩반복문 수행평가A",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_DwzTP_1648423887930",
                            "title": "입출력연산자수행평가3",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_Gljev_1652060133443",
                            "title": "반복문 수행평가B",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_NIkra_1648423323196",
                            "title": "입출력연산자수행평가1",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_gTfdk_1646361081500",
                            "title": "IT도우미 테스트 문제(5반)",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_DkfkN_1654237950633",
                            "title": "중첩반복문 수행평가 추가",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_ehdgJ_1648423609366",
                            "title": "입출력연산자수행평가2",
                            "userCount": 25.0
                        },
                        {
                            "examIndex": "ex_nKTar_1649379219631",
                            "title": "조건문 수행평가 C",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_hLVAX_1657584336400",
                            "title": "1차원배열 수행평가 문제A",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_iaLhv_1649379401035",
                            "title": "조건문 수행평가 D",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_iiVdt_1653867830244",
                            "title": "중첩반복문 수행평가 C",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_xafPF_1649392058734",
                            "title": "조건문 수행평가 B",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_xhibE_1646370511571",
                            "title": "IT도우미 테스트(4반)",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_CHavo_1653868703218",
                            "title": "중첩반복문 수행평가D",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_dPUyc_1649379089961",
                            "title": "조건문 수행평가 A",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_OlsjW_1649074564300",
                            "title": "입출력연산자 추가 수행평가",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_dEITl_1652060301878",
                            "title": "반복문 수행평가D",
                            "userCount": 32.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_BvDtb_1647224531321",
                    "subject": "2022  프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_ghNda_1648514896993",
                            "title": "1. 변수와 상수",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_znmMz_1655100716238",
                            "title": "최종 프로젝트 제출 (6/17)",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_lNJIg_1649392466616",
                            "title": "4월 8일 프로젝트 개발일지",
                            "userCount": 26.0
                        },
                        {
                            "examIndex": "ex_BZdBK_1652142855701",
                            "title": "반복문 활용문제",
                            "userCount": 22.0
                        },
                        {
                            "examIndex": "ex_njiLM_1653353519096",
                            "title": "내가 만들어보는 멋진 프로그래밍 문제!!",
                            "userCount": 18.0
                        },
                        {
                            "examIndex": "ex_fCboO_1653022612484",
                            "title": "프로젝트 중간점검(5/20)",
                            "userCount": 23.0
                        },
                        {
                            "examIndex": "ex_tZdvE_1652142801182",
                            "title": "조건문 활용문제",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_RPjmS_1652142551795",
                            "title": "연산자 활용문제",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_nHlpY_1649117897163",
                            "title": "2. 연산자",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_VijDJ_1651553653855",
                            "title": "5월 3일 오늘 한 프로젝트 내용을 업로드 해주세요.",
                            "userCount": 19.0
                        },
                        {
                            "examIndex": "ex_dkHJU_1654145779445",
                            "title": "반복문 연습 - 별모양 출력하기",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_mdbOC_1653550895866",
                            "title": "반복문 (지윤쌤과 함께)",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_fMnrO_1655704826623",
                            "title": "5. 배열",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_oaOBx_1650328272670",
                            "title": "3. 조건문",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_enYkd_1651470502308",
                            "title": "4. 반복문",
                            "userCount": 29.0
                        },
                        {
                            "examIndex": "ex_YMjqh_1653739962005",
                            "title": "5월 30일 조건문 수행평가",
                            "userCount": 29.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_tUScu_1647226477026",
                    "subject": "2022 컴퓨터 시스템 일반",
                    "examInfo": [
                        {
                            "examIndex": "ex_amrcE_1650586799143",
                            "title": "5월 20일 보고서 중간점검 제출",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_DfvDf_1649033429403",
                            "title": "[연습용] 연산 평가",
                            "userCount": 127.0
                        },
                        {
                            "examIndex": "ex_kUJhq_1648690740005",
                            "title": "보고서작성 중간 점검 (5월 20일)",
                            "userCount": 127.0
                        },
                        {
                            "examIndex": "ex_GFjBb_1650502976118",
                            "title": "4월 22일 작성한 보고서 업로드 해주세요.",
                            "userCount": 87.0
                        },
                        {
                            "examIndex": "ex_lJilC_1650586975245",
                            "title": "6월 17일 마감) 최종 보고서 제출",
                            "userCount": 121.0
                        },
                        {
                            "examIndex": "ex_COvFe_1649807932579",
                            "title": "오늘 작성한 보고서 내용 제출하기",
                            "userCount": 85.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_KGaqJ_1645058527619",
                    "subject": "신입생 진단고사",
                    "examInfo": [
                        {
                            "examIndex": "ex_oqiLz_1645505193144",
                            "title": "2022-2차 진단고사 2교시 영어",
                            "userCount": 192.0
                        },
                        {
                            "examIndex": "ex_dlfzU_1645505480823",
                            "title": "2022-2차 진단고사 3교시 수학",
                            "userCount": 192.0
                        },
                        {
                            "examIndex": "ex_bQUhI_1645504823185",
                            "title": "2022-2차 진단고사 1교시 국어",
                            "userCount": 192.0
                        },
                        {
                            "examIndex": "ex_ZkvXS_1645361508370",
                            "title": "2022 모의테스트",
                            "userCount": 190.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_VjXCo_1648483609949",
                    "subject": "파이썬 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_wgdnD_1648542320254",
                            "title": "제어문, 반복문 [실습1~실습6]",
                            "userCount": 125.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "mkg1234567-ms",
            "channelIndex": "mkg1234567-ms",
            "channelName": "문경여자중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_ilAHs_1646715456847",
                    "subject": "2022년1학년3반",
                    "examInfo": [
                        {
                            "examIndex": "ex_eemNb_1650504766985",
                            "title": "엔트리 수행평가",
                            "userCount": 25.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_daEGM_1646715414246",
                    "subject": "2022년1학년2반",
                    "examInfo": [
                        {
                            "examIndex": "ex_hVPVQ_1650288369124",
                            "title": "엔트리 프로그래밍 수행평가",
                            "userCount": 25.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_krZWc_1646715856840",
                    "subject": "2022년1학년7반",
                    "examInfo": [
                        {
                            "examIndex": "ex_bBvZu_1650505374862",
                            "title": "엔트리 수행평가",
                            "userCount": 24.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ojwcj_1646715822765",
                    "subject": "2022년1학년6반",
                    "examInfo": [
                        {
                            "examIndex": "ex_oeSoL_1650286778482",
                            "title": "엔트리 프로그래밍 수행평가",
                            "userCount": 24.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_OBcSc_1646715750376",
                    "subject": "2022년1학년5반",
                    "examInfo": [
                        {
                            "examIndex": "ex_WnWth_1650505233347",
                            "title": "엔트리 수행평가",
                            "userCount": 25.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gdNcv_1646714152119",
                    "subject": "2022년1학년1반",
                    "examInfo": [
                        {
                            "examIndex": "ex_fwAQh_1650504595434",
                            "title": "엔트리 수행평가",
                            "userCount": 26.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_PBqVi_1646715703586",
                    "subject": "2022년1학년4반",
                    "examInfo": [
                        {
                            "examIndex": "ex_akvNx_1650505097348",
                            "title": "엔트리 수행평가",
                            "userCount": 25.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "ecount",
            "channelIndex": "ecount",
            "channelName": "이카운트",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_QgKNl_1652396873669",
                    "subject": "[2022][이카운트] 상반기 신입사원 코딩 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_QafEc_1652695880010",
                            "title": "[2022] 이카운트 상반기 신입 사원 코딩 테스트",
                            "userCount": 14.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "asdf-dimigo-hs",
            "channelIndex": "asdf-dimigo-hs",
            "channelName": "ASDF",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_WkpPi_1649164389067",
                    "subject": "Swift 기초 뿌시기",
                    "examInfo": [
                        {
                            "examIndex": "ex_pcikl_1649173839095",
                            "title": "3주차 복습 과제",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_iAahh_1650433257118",
                            "title": "4주차 수업 중 과제",
                            "userCount": 14.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "imsildong-ms",
            "channelIndex": "imsildong-ms",
            "channelName": "임실동중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_kTXoP_1647828115509",
                    "subject": "C언어 프로그래밍 - 황지영 선생님",
                    "examInfo": [
                        {
                            "examIndex": "ex_bMuDc_1648536939404",
                            "title": "최종평가",
                            "userCount": 12.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "chosungen-hs",
            "channelIndex": "chosungen-hs",
            "channelName": "조선대학교부속고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_mfNaq_1653357902705",
                    "subject": "22_2학년_프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_ePFcZ_1654092724523",
                            "title": "22학년도 프로그래밍 수행평가 1차",
                            "userCount": 56.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "yujinrobot",
            "channelIndex": "yujinrobot",
            "channelName": "(주)유진로봇",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_jQYot_1657186513248",
                    "subject": "YujinRobot Robot SW coding test",
                    "examInfo": [
                        {
                            "examIndex": "ex_ajTve_1657249035721",
                            "title": "202207-Yujin SW",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_IfhRE_1644910008105",
                    "subject": "[2022][SPT]-Senior",
                    "examInfo": [
                        {
                            "examIndex": "ex_rFbho_1644910713818",
                            "title": "2022-SPT-SENIOR",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_gaJTl_1641288425422",
                    "subject": "2022-1Q Robot Software Engineer",
                    "examInfo": [
                        {
                            "examIndex": "ex_ABqjd_1641518659803",
                            "title": "2022-1Q Robot Software Engineer",
                            "userCount": 9.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "choeun-hs",
            "channelIndex": "choeun-hs",
            "channelName": "인천초은고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_CuviG_1646026220781",
                    "subject": "3학년 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_SEOYB_1655388012508",
                            "title": "2차 수행평가",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_psyVF_1652626061450",
                            "title": "5/16(월) 2교시 프로그래밍 1차 수행평가",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_KioTc_1655076751068",
                            "title": "2차 수행평가 대비 예상문제",
                            "userCount": 10.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_CcMaa_1646026121612",
                    "subject": "2학년 정보과학",
                    "examInfo": [
                        {
                            "examIndex": "ex_Qocpa_1655388139849",
                            "title": "2차 수행평가",
                            "userCount": 17.0
                        },
                        {
                            "examIndex": "ex_acciv_1652626239400",
                            "title": "5/16(월) 5교시 정보과학 1차 수행평가",
                            "userCount": 17.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "bossemi",
            "channelIndex": "bossemi",
            "channelName": "보스반도체",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_guehJ_1658119599473",
                    "subject": "BOS semiconductors SW coding test",
                    "examInfo": [
                        {
                            "examIndex": "ex_JFZMI_1658127191816",
                            "title": "채용 1차 면접 SW 코딩 테스트",
                            "userCount": 4.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "shinmok-ms",
            "channelIndex": "shinmok-ms",
            "channelName": "신목중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_uIFyI_1649390588531",
                    "subject": "Python 자율동아리",
                    "examInfo": [
                        {
                            "examIndex": "ex_rThde_1654238268257",
                            "title": "6월3일 문제-2",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_nJsqJ_1654843273843",
                            "title": "6/10문제",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_PdESE_1654238176672",
                            "title": "6월3일 문제-1",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_gXIhl_1653635619727",
                            "title": "문자열 자료형: 나의 자기소개를 고쳐줘!",
                            "userCount": 6.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_cgxaf_1648013991579",
                    "subject": "Python 프로그래밍",
                    "examInfo": [
                        {
                            "examIndex": "ex_ewjRi_1652077474979",
                            "title": "7~8차시",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_hSyGc_1653222670738",
                            "title": "9차시",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_ifsjF_1650252784412",
                            "title": "4차시",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_spMjB_1648975943108",
                            "title": "2차시",
                            "userCount": 13.0
                        },
                        {
                            "examIndex": "ex_cHrfc_1648016756990",
                            "title": "1차시",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_EfYCl_1650858376082",
                            "title": "5차시",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_rcyDo_1649646970794",
                            "title": "3차시",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_fiInu_1651472226764",
                            "title": "6차시",
                            "userCount": 11.0
                        },
                        {
                            "examIndex": "ex_QIRha_1648016940980",
                            "title": "연습",
                            "userCount": 13.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ihkRP_1648614318343",
                    "subject": "AI동아리",
                    "examInfo": [
                        {
                            "examIndex": "ex_RBfVa_1648614814954",
                            "title": "연습",
                            "userCount": 12.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "pbagel",
            "channelIndex": "pbagel",
            "channelName": "플레인베이글",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_OdKgi_1650948883996",
                    "subject": "[2022 플레인베이글] \b코딩테스트 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_bPqjR_1650949379414",
                            "title": "구름 테스트",
                            "userCount": 7.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "dsmhs",
            "channelIndex": "dsmhs",
            "channelName": "대덕소프트웨어마이스터고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_pnGOl_1655269638022",
                    "subject": "알고리즘 실무 수행평가",
                    "examInfo": [
                        {
                            "examIndex": "ex_ClkaD_1656392682616",
                            "title": "알고리즘 실무 수행평가 2차",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_Qaesh_1655270985548",
                            "title": "알고리즘 실무 수행평가",
                            "userCount": 56.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "yspro-hs",
            "channelIndex": "yspro-hs",
            "channelName": "연수고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_uQITR_1649634420074",
                    "subject": "프로그래밍(파이썬)",
                    "examInfo": [
                        {
                            "examIndex": "ex_YyclP_1649635139643",
                            "title": "[조건문] 기초",
                            "userCount": 407.0
                        },
                        {
                            "examIndex": "ex_YlaZD_1652918808469",
                            "title": "터틀 그래픽",
                            "userCount": 364.0
                        },
                        {
                            "examIndex": "ex_CMgwR_1652032136897",
                            "title": "반복문",
                            "userCount": 375.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_hoosA_1658243088060",
                    "subject": "남동고등학교(프로그래밍)",
                    "examInfo": [
                        {
                            "examIndex": "ex_jywdj_1658766697328",
                            "title": "5일차-리스트1",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_aRrOd_1658411678142",
                            "title": "2일차-제어문1",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_ARiCQ_1658495988005",
                            "title": "3일차-터틀그래픽",
                            "userCount": 12.0
                        },
                        {
                            "examIndex": "ex_fcUab_1658447226666",
                            "title": "2일차-제어문2",
                            "userCount": 15.0
                        },
                        {
                            "examIndex": "ex_nyECM_1658882456636",
                            "title": "6일차-딕셔너리 분석",
                            "userCount": 10.0
                        },
                        {
                            "examIndex": "ex_IbQol_1658368335328",
                            "title": "1일차-조건문",
                            "userCount": 16.0
                        },
                        {
                            "examIndex": "ex_TfFky_1658502855090",
                            "title": "3일차-제어문3",
                            "userCount": 11.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kurly",
            "channelIndex": "kurly",
            "channelName": "(주)컬리",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_Ndkye_1617933859410",
                    "subject": "마켓컬리 개발자 채용",
                    "examInfo": [
                        {
                            "examIndex": "ex_OAdUm_1649759459953",
                            "title": "마켓컬리 프론트엔드 개발자 코딩 테스트",
                            "userCount": 18.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "chilseong-hs",
            "channelIndex": "chilseong-hs",
            "channelName": "칠성고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_PYcUE_1645950810290",
                    "subject": "2022 칠성고 2학년 정보 -  파이썬",
                    "examInfo": [
                        {
                            "examIndex": "ex_QEjhi_1653379260062",
                            "title": "test",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_lWcaq_1645950825261",
                            "title": "[과제]우리집 그리기",
                            "userCount": 17.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "wooseok-ms",
            "channelIndex": "wooseok-ms",
            "channelName": "우석중학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_kmdMc_1646721423306",
                    "subject": "TEST",
                    "examInfo": [
                        {
                            "examIndex": "ex_pdIIF_1646723621283",
                            "title": "test",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kds",
            "channelIndex": "kds",
            "channelName": "KB데이타시스템",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_llAho_1575854556136",
                    "subject": "경력직 채용",
                    "examInfo": [
                        {
                            "examIndex": "ex_leHEh_1646911028353",
                            "title": "20220314",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_blKKf_1645599768253",
                            "title": "20220301",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_NElyp_1641869909276",
                            "title": "20220114",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_cjkBE_1655805802368",
                            "title": "20220626",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_pjdgl_1650553318433",
                            "title": "20220424",
                            "userCount": 5.0
                        },
                        {
                            "examIndex": "ex_JcKbJ_1646910978630",
                            "title": "20220313",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_crkGl_1657524375313",
                            "title": "20220714",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_BWaMc_1647397416627",
                            "title": "20220320",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_XeBah_1644485875678",
                            "title": "20220213",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_JlgfP_1649760129686",
                            "title": "20220417",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_dlaMk_1651664435280",
                            "title": "20220508",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_GYsbK_1650022631336",
                            "title": "20220419",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_jkJPk_1657180297723",
                            "title": "20220710",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_cBPdy_1644842336584",
                            "title": "20220217",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_nIBMS_1643094140196",
                            "title": "20220206",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_ixyON_1652952913110",
                            "title": "20220522",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_svGhr_1646910228901",
                            "title": "20220316",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_vjClZ_1648105341903",
                            "title": "20220327",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_gsggz_1646219481907",
                            "title": "20220306",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_tyDza_1645524404174",
                            "title": "20220227",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_MjUyl_1642990069448",
                            "title": "20220125",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_MPxae_1653900135717",
                            "title": "20220601",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_GzXJq_1650882469837",
                            "title": "20220501",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_APlpu_1655454109939",
                            "title": "20220621",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_hdUbv_1645091599942",
                            "title": "20220222",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_ATkXU_1657604241855",
                            "title": "20220717",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_lCfqk_1656313272843",
                            "title": "20220703",
                            "userCount": 1.0
                        },
                        {
                            "examIndex": "ex_ZDDhd_1644841837142",
                            "title": "20220216",
                            "userCount": 2.0
                        },
                        {
                            "examIndex": "ex_yaSFU_1652193751222",
                            "title": "20220515",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_FLJlM_1644919278639",
                            "title": "20220220",
                            "userCount": 4.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "younghoon-hs",
            "channelIndex": "younghoon-hs",
            "channelName": "영훈고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_qzcXA_1654666139269",
                    "subject": "2022학년도 영훈고등학교 정보 수업",
                    "examInfo": [
                        {
                            "examIndex": "ex_fnzcD_1655692824237",
                            "title": "1학기 정보 수업을 통해서 배우고 느낀 점을 적어주세요.",
                            "userCount": 181.0
                        },
                        {
                            "examIndex": "ex_bLCKS_1654734486323",
                            "title": "정보 수행평가 전 테스트",
                            "userCount": 188.0
                        },
                        {
                            "examIndex": "ex_BekcZ_1654690673108",
                            "title": "영훈고등학교 1학기 정보 두 번째 수행평가",
                            "userCount": 233.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kdb",
            "channelIndex": "kdb",
            "channelName": "KDB산업은행",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_JvijH_1649134009997",
                    "subject": "연수팀 강좌",
                    "examInfo": [
                        {
                            "examIndex": "ex_ovELI_1649294057977",
                            "title": "평가",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_hekSK_1648788320742",
                    "subject": "(테스트)강좌개설해보기",
                    "examInfo": [
                        {
                            "examIndex": "ex_UccRh_1648794107557",
                            "title": "(테스트)강좌개설해보기 - 1차시험",
                            "userCount": 1.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "skku",
            "channelIndex": "skku",
            "channelName": "성균관대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_juTlw_1644541612111",
                    "subject": "데이터 분석 기초",
                    "examInfo": [
                        {
                            "examIndex": "ex_UbxLM_1653669718421",
                            "title": "22_spring_기말고사",
                            "userCount": 206.0
                        },
                        {
                            "examIndex": "ex_gGHnE_1649472971862",
                            "title": "22_spring_중간고사",
                            "userCount": 207.0
                        },
                        {
                            "examIndex": "ex_JjsfQ_1649471012646",
                            "title": "중간고사 연습 문제",
                            "userCount": 197.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_aAxgn_1657594288714",
                    "subject": "[AI MBA] Python Programming",
                    "examInfo": [
                        {
                            "examIndex": "ex_fhDed_1657594293872",
                            "title": "[Python Programming] 중간과제",
                            "userCount": 1.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_xifwk_1646978039960",
                    "subject": "공학컴퓨터프로그래밍(DASF003-47)",
                    "examInfo": [
                        {
                            "examIndex": "ex_cbDea_1651470030450",
                            "title": "HW2",
                            "userCount": 32.0
                        },
                        {
                            "examIndex": "ex_yvwlR_1646985021176",
                            "title": "HW1",
                            "userCount": 34.0
                        },
                        {
                            "examIndex": "ex_wOtZs_1653121741781",
                            "title": "Final",
                            "userCount": 31.0
                        },
                        {
                            "examIndex": "ex_FXOiv_1649513430494",
                            "title": "Midterm",
                            "userCount": 34.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_nbaYN_1646375178990",
                    "subject": "공학컴퓨터 프로그래밍 2022 신지태교수님 분반",
                    "examInfo": [
                        {
                            "examIndex": "ex_iEXay_1649638799341",
                            "title": "중간고사",
                            "userCount": 52.0
                        },
                        {
                            "examIndex": "ex_jyYke_1647173209552",
                            "title": "Weekly Assignment 4",
                            "userCount": 56.0
                        },
                        {
                            "examIndex": "ex_kwjfS_1654147022216",
                            "title": "Final Exam -BJS",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_iidFe_1652803768413",
                            "title": "Final Exam -1",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_XDgeW_1648990054934",
                            "title": "Weekly Assignment 7",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_bwSwe_1652062979120",
                            "title": "Weekly Assignment 12",
                            "userCount": 48.0
                        },
                        {
                            "examIndex": "ex_fcsAf_1647828513693",
                            "title": "Weekly Assignment 5",
                            "userCount": 51.0
                        },
                        {
                            "examIndex": "ex_Inogc_1653262315443",
                            "title": "Weekly Assignment 14",
                            "userCount": 43.0
                        },
                        {
                            "examIndex": "ex_FleuX_1650788442397",
                            "title": "Weekly Assignment 10",
                            "userCount": 49.0
                        },
                        {
                            "examIndex": "ex_zWApj_1647173101349",
                            "title": "Weekly Assignment 3",
                            "userCount": 51.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_lGrja_1618644089552",
                    "subject": "공컴프_문제연습",
                    "examInfo": [
                        {
                            "examIndex": "ex_TEcSV_1653899163410",
                            "title": "기말 대체 시험",
                            "userCount": 2.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_YxWSi_1590138269233",
                    "subject": "RISE LAB. CODING TEST BASIC",
                    "examInfo": [
                        {
                            "examIndex": "ex_cPIkv_1653207708822",
                            "title": "2023 1학기 TEST (KOR)",
                            "userCount": 6.0
                        },
                        {
                            "examIndex": "ex_gGreD_1645432889272",
                            "title": "2022 2학기 TEST (KOR)",
                            "userCount": 8.0
                        },
                        {
                            "examIndex": "ex_jeqei_1645779673220",
                            "title": "2022 2nd TEST (ENG)",
                            "userCount": 3.0
                        },
                        {
                            "examIndex": "ex_mQRje_1653207837423",
                            "title": "2023 1st TEST (ENG)",
                            "userCount": 5.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_idbMH_1651455561974",
                    "subject": "2022_공컴프_기말대체시험",
                    "examInfo": [
                        {
                            "examIndex": "ex_VGGuE_1653975049475",
                            "title": "기말 대체 시험",
                            "userCount": 4.0
                        },
                        {
                            "examIndex": "ex_mlkGP_1651456586468",
                            "title": "livetest",
                            "userCount": 15.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_Nomec_1645174073141",
                    "subject": "공학컴퓨터프로그래밍 (2022년 1학기)",
                    "examInfo": [
                        {
                            "examIndex": "ex_NfiVE_1653377501832",
                            "title": "Final",
                            "userCount": 47.0
                        },
                        {
                            "examIndex": "ex_koIzQ_1649743646273",
                            "title": "Midterm",
                            "userCount": 49.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_oXlav_1645085755243",
                    "subject": "Computer Programming for Engineers I4, I5, I6 (2022)",
                    "examInfo": [
                        {
                            "examIndex": "ex_SJwbg_1652762082366",
                            "title": "기말 모의 시험(Mock test)",
                            "userCount": 356.0
                        },
                        {
                            "examIndex": "ex_DfcJU_1653552802617",
                            "title": "기말 시험(Final test)",
                            "userCount": 368.0
                        },
                        {
                            "examIndex": "ex_CCmbV_1649831997260",
                            "title": "Computer Programming for Engineers_Midterm",
                            "userCount": 374.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_naYwc_1648092394337",
                    "subject": "Problem Solving 2022-1",
                    "examInfo": [
                        {
                            "examIndex": "ex_ddYjX_1648092615590",
                            "title": "컴파일 테스트",
                            "userCount": 62.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_NRMjr_1646978117093",
                    "subject": "공학컴퓨터프로그래밍(DASF003-44)",
                    "examInfo": [
                        {
                            "examIndex": "ex_Kxkdq_1649584561932",
                            "title": "Midterm",
                            "userCount": 53.0
                        },
                        {
                            "examIndex": "ex_BsdMr_1646987081671",
                            "title": "HW1",
                            "userCount": 58.0
                        },
                        {
                            "examIndex": "ex_oxgrm_1653365569785",
                            "title": "Final",
                            "userCount": 52.0
                        },
                        {
                            "examIndex": "ex_kJhqa_1651472905434",
                            "title": "HW2",
                            "userCount": 50.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_AAkse_1645085668653",
                    "subject": "Computer Programming for Engineers I1, I2, I3 (2022)",
                    "examInfo": [
                        {
                            "examIndex": "ex_ibJve_1652762167110",
                            "title": "기말 모의 시험(Mock test)",
                            "userCount": 307.0
                        },
                        {
                            "examIndex": "ex_VpYmH_1649831811156",
                            "title": "Computer Programming for Engineers_Midterm",
                            "userCount": 333.0
                        },
                        {
                            "examIndex": "ex_HZiih_1653552933460",
                            "title": "기말 시험(Final Exam)",
                            "userCount": 325.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "pnu",
            "channelIndex": "pnu",
            "channelName": "부산대학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_zPsXI_1646977416876",
                    "subject": "컴퓨터프로그래밍_76",
                    "examInfo": [
                        {
                            "examIndex": "ex_AIkcX_1649646735171",
                            "title": "퀴즈(04.13)",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_hYBGm_1650376194567",
                            "title": "중간고사",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_SLiRc_1648448568973",
                            "title": "퀴즈(03.30)",
                            "userCount": 29.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_dYHPi_1646977467640",
                    "subject": "컴퓨터프로그래밍_77",
                    "examInfo": [
                        {
                            "examIndex": "ex_xqXjj_1648448472516",
                            "title": "퀴즈(03.30)",
                            "userCount": 30.0
                        },
                        {
                            "examIndex": "ex_aqZtM_1650376354778",
                            "title": "중간고사",
                            "userCount": 28.0
                        },
                        {
                            "examIndex": "ex_bSLxe_1649646822022",
                            "title": "퀴즈(04.13)",
                            "userCount": 29.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "dgscience-hs",
            "channelIndex": "dgscience-hs",
            "channelName": "대구과학고등학교",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_bYSJC_1644966741113",
                    "subject": "정보과학(1학년)",
                    "examInfo": [
                        {
                            "examIndex": "ex_YgRhR_1647346201996",
                            "title": "수행평가 문제해결 프로그래밍",
                            "userCount": 4.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "kep-recruit",
            "channelIndex": "kep-recruit",
            "channelName": "KEP-RECRUIT",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_YmmTT_1649321254328",
                    "subject": "AI Assistant팀",
                    "examInfo": [
                        {
                            "examIndex": "ex_uiWFe_1649321496230",
                            "title": "자연어처리팀",
                            "userCount": 8.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "zigbang",
            "channelIndex": "zigbang",
            "channelName": "직방",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_VlDvL_1632366457897",
                    "subject": "[2022][직방] 개발자 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_CfRCe_1649659622034",
                            "title": "[CTO실] 디바이스",
                            "userCount": 20.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "chainlightning",
            "channelIndex": "chainlightning",
            "channelName": "ChainLightning",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_aNAkE_1657075520226",
                    "subject": "[체인라이트닝] 엔지니어 채용 코딩 테스트",
                    "examInfo": [
                        {
                            "examIndex": "ex_NnYGL_1657096252374",
                            "title": "[체인라이트닝] 백엔드 엔지니어 부문",
                            "userCount": 3.0
                        }
                    ]
                }
            ]
        },
        {
            "_id": "sempio",
            "channelIndex": "sempio",
            "channelName": "샘표식품",
            "lectureInfo": [
                {
                    "lectureIndex": "lec_GMWLl_1579680852642",
                    "subject": "[2022][샘표식품] 웹개발 직무 수시 채용",
                    "examInfo": [
                        {
                            "examIndex": "ex_DbKRi_1641539432523",
                            "title": "온라인 코딩테스트 - 2022.07.30",
                            "userCount": 13.0
                        }
                    ]
                },
                {
                    "lectureIndex": "lec_ALDJl_1655079250860",
                    "subject": "[2022][샘표식품] 플랫폼개발팀 신입/경력 공개채용",
                    "examInfo": [
                        {
                            "examIndex": "ex_eOrIR_1655089131961",
                            "title": "코딩테스트 문제 확인",
                            "userCount": 12.0
                        }
                    ]
                }
            ]
        }
    ]
}

module.exports = router
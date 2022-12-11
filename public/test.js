// const test = (...params) => {
//     // params.map((param) => {
//     //     console.log(param)
//     // })

//     const param = params.reduce((a, c, i) => {
//         // console.log(a)
//         return `${typeof a === 'object' ? JSON.stringify(a) : a} ${typeof c === 'object' ? JSON.stringify(c) : c}`
//     })

//     console.log(param)
//     console.log('=========================')
// }

const setParam = (...params) => {
    return params.map((param) => {
        console.log('    ', param)
    })
}

const test = (params) => {
    setParam(params)
}


test('ballboy test')
test('ballboy', 'seungwoo')
test([1, 2, 3, 4, 5], 'test')
test({ a: 1, b: 2 })
test({ a: 1, b: 2 }, 'temp')
test('ballboy yang', { a: 1, b: 2 })


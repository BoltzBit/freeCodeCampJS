//pode conter tipos variados de dados
let simpleArray = ['one', 'three', true, false, undefined,null]
console.log(simpleArray)

let complexArray = [
    [
        {
            one: 1,
            two: 2,
        },
        {
            three: 3,
            four: 4,
        }
    ],
    [
        {
            a: 'a',
            b: 'b',
        },
        {
            c: 'c',
            d: 'd',
        }
    ],
]
console.log(complexArray.length)
console.log(complexArray[0])
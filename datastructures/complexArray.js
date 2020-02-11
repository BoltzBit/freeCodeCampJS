//criar arrays complexos multidimentsionais
let nestedArray = [//first level
    ['deep'],//second level
    [
        ['deeper'],['deeper'] //third level
    ],
    [
        [
            ['deepest'],['deepest']//fourth level
        ],
        [
            [
                ['deepest-est?']//fifth level
            ]
        ]
    ]
]

console.log(nestedArray)
console.log('-------------------------')
console.log(nestedArray[0])
console.log('-------------------------')
console.log(nestedArray[1])
console.log('-------------------------')
console.log(nestedArray[2])
console.log('-------------------------')
console.log(nestedArray[1][0])
console.log('-------------------------')
console.log(nestedArray[1][1])
console.log('-------------------------')
console.log(nestedArray[2][0])
console.log('-------------------------')
console.log(nestedArray[2][1])
console.log('-------------------------')
console.log(nestedArray[2][1][0][0][0])
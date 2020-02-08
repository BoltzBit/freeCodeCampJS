//o terceiro parametro de splice() substitui o elemento index passado
//no primeiro parametro, pelos elementos passados no terceiro parametro
let numbers = [10,11,12,12,15]
const startIndex = 3
const amountDelete = 1//quantidade de elementos para deletar

numbers.splice(startIndex,amountDelete,13,14)
console.log(numbers)

function htmlColorNames(arr){

    arr.splice(0,2,
        'DarkSlamon',
        'BlanchedAlmond'
    )

    return arr
}

console.log(htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurqoise',
    'FireBrick'
]))
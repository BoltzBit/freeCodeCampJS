//usando os metodos push() 'final' e unshift()'inicio'
function mixedNumbers(arr){
    arr.unshift('I',2,'three')
    arr.push(7,'VIII',9)
    return arr
}

console.log(mixedNumbers(['IV',5,'six']))

let twentyThree = 'XXIII'
let romanNumerals = ['XXI','XXII']

romanNumerals.unshift('xix','xx')//adiciona no inicio
console.log(romanNumerals)

romanNumerals.push(twentyThree)
console.log(romanNumerals)
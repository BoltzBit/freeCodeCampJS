//deletar items do array pop() 'final' shift() 'inicio'

function popShift(arr){
    let popped = arr.pop()
    let shifted = arr.shift()

    return [shifted,popped]
}

console.log(popShift(['challenge', 'is', 'not', 'complete']))

let greeting = ['whats up?','hello','see ya!']

greeting.pop()//tira o elemento do final
console.log(greeting)

greeting.shift()//tira o elemento do inicio
console.log(greeting)

let popped = greeting.pop()//alocou o elemento removido em uma variavel
console.log(popped)
//copir os elementos de um array com spreedOperator
let thisArray = [true,true,undefined,false,null]
let thatArray = [...thisArray]

console.log(thatArray)


function copyMachine(arr,num){
    let newArray = []

    while(num >=1){
        newArray.push([...arr])
        num--
    }
    //newArray é uma matriz com a quantidade de copias passadas como parametros
    return newArray
}

console.log(copyMachine([true, false, true], 2))
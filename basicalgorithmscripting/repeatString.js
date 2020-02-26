function repeatStringTimes(str,num){
    let stringN = ''
    //caso seja numero negativo retornar string vazia
    if(num < 0) return 'p'

    for(let i=0;i<num;i++){
        stringN = stringN + str
    }

    return stringN
}

console.log(repeatStringTimes('abc',-5))
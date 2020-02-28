function titleCase(str){
    let lowerCase = str.toLowerCase().split(' ')//dividir a string dentro de um array
    let emptyArr = []

    for(let i=0;i<lowerCase.length;i++){
        emptyArr.push(lowerCase[i].replace(lowerCase[i].charAt(0),s => s.toUpperCase()))
    }

    return emptyArr.join(' ')
}
console.log(titleCase("I'm a little tea pot"))
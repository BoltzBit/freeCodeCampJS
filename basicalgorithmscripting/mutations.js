function mutation(arr){
    let newArr = []
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i].toLowerCase())
    }

    //dividir a segunda string para verificar se cada letra pertence ao array
    let divSecondArr = newArr[1].split("")

    //usar o reduce para verificar se cada letra pertence ao array, é necessário um valor inicial
    return divSecondArr.reduce((present,letter) => present && newArr[0].includes(letter),true)
}

console.log(mutation(["Alien", "line"]))
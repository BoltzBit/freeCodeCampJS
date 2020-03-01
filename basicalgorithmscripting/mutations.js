function mutation(arr){
    let newArr = []
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i].toLowerCase())
    }


    return newArr[1].includes(...newArr[0])
}

console.log(mutation("Mary", "Aarmy"))
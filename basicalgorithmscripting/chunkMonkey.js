function chunkMonkey(arr,n){
    let newArr = []

    while(arr.length!=0){
        newArr.push(arr.splice(0,n))
    }

    return newArr
}

console.log(chunkMonkey(["a", "b", "c", "d","d"],2))
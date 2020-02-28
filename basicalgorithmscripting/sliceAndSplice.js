function frankenSplice(arr1,arr2,n){
    let removArr2 =  arr2.slice(0)
    let newArr = removArr2.splice(n,0,...arr1)

    return removArr2
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))
function greaterThanTen(arr){
    let newArray = []

    for(i=0;i<arr.length;i++){
        if(arr[i]>10){
            newArray.push(arr[i])
        }
    }

    return newArray
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]))


function filteredArray(arr,elem){
    let newArray = []

    for(i=0;i<arr.length;i++){
        if(arr[i].indexOf(elem) === -1){
            newArray.push(arr[i])
        }
    }

    return newArray
}

const arr = [3,2,6,7]
console.log(arr.indexOf(6))

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3))
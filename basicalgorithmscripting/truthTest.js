function findElement(arr,func){
    let find = 0
    for(let i=0;i<arr.length;i++){
        if(func(arr[i])){
            find = (arr[i])
            return find || undefined
        }
    }
}

console.log(findElement([1,2,3,4], num => num % 2 === 0))
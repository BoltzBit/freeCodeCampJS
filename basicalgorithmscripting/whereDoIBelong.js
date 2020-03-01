function getIndexToIns(arr,num){
    //funcao para ordenar o array
    //let pos
    arr.sort((a,b) => a-b)

    if(num <= arr[0]) return 0

    for(let i=0; i<arr.length;i++){
        if(arr[i]<num && arr[i+1]>num){
            //pos = i+1
            return i+1
        }
    }

   //for(let j = arr.length;j>pos;j--){
   //    arr[j] = arr[j-1]
   //}
   //arr[pos] = num

    arr.push(num)
    return arr.length-1
}

console.log(getIndexToIns([], 1))
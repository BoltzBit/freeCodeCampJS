function largestOfOur(arr){
    let largeNumber = []
  
    for(let i=0;i<arr.length;i++){
       let bigNumber = 0
      for(let j=0;j<arr[i].length;j++){
         if(arr[i][j]>bigNumber){
           bigNumber = arr[i][j]
         }
      }
      largeNumber.push(bigNumber)
    }
    return largeNumber
  }
  
  console.log(largestOfOur([[4, -10, 18, 21], [-72, -3, -17, -10]]))
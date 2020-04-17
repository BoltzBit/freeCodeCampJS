function diffArray(arr1,arr2){
    let newArray = [];

    for(let i=0;i<arr1.length;i++){ 
        if(arr2.indexOf(arr1[i]) === -1){
            newArray.push(arr1[i]);
        }
    }

    for(let i=0;i<arr2.length;i++){
        if(arr1.indexOf(arr2[i]) === -1){
            newArray.push(arr2[i])
        }
    }

    return newArray;
}

//solucoes diferentes para o mesmo problema

//function diffArray(arr1,arr2){
//    let newArray = [];
//   function onlyInFirst(first,second){
//       for(let i=0;first.length;i++){
//           if(second.indexOf(first[i]) === -1){
//               newArray.push(first[i]);
//           }
//       }
//   }
//   
//   onlyInFirst(arr1,arr2);
//   onlyInFirst(arr2,arr1);
//   return newArray;
//}

//essa solucao eh top
//function diffArray(arr1,arr2){
//    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
//}

//solucao muito boa
//function diffArray(arr1,arr2){
//    return [...diff(arr1,arr2),...diff(arr2,arr1)];
//
//    function diff(a,b){
//        return a.filter(item => b.indexOf(item) === -1);
//    }
//}


console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

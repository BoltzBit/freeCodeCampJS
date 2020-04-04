function sliceArray(anim, beginArray, endArray){
    let arr = [...anim];
    
    let newArr = arr.slice(beginArray,endArray);


    return newArr;
}

let inputArray = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputArray,1,3));

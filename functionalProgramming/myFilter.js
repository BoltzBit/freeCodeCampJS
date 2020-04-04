let s =[23,65,98,5];

Array.prototype.myFilter = function(callback){
    let newArray = [];
    let arr = [...s];

    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

let new_s = s.myFilter(function(item){
    return item%2 === 1;
});

console.log(new_s);

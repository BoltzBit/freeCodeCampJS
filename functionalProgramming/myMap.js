const s =[23,65,98,5];

Array.prototype.myMap = function(callback){
    let arr = [...s];
    let newArray = [];

    for(let i=0;i<arr.length;i++){
       newArray.push(callback(arr[i]));
    }

    return newArray;
}

let new_s = s.myMap(function(item){
    return item*2;
});

console.log(new_s);


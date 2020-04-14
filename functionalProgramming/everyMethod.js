function checkPositive(arr){
    return arr.reduce((acum,a) => acum && a>0,true);
}

console.log(checkPositive([1, 2, 3, 0, 5]));


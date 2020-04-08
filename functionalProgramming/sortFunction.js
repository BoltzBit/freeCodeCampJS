function alphabeticOrder(arr){
    return arr.sort((a,b) => {
        return a === b ? 0 : a > b ? 1 : -1;
    });
}

console.log(alphabeticOrder(["a", "d", "c", "a", "z", "g"]));


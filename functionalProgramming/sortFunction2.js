let globalArray = [5, 6, 3, 2, 9];

function nonMutating(arr){
    let newArr = [...arr];

    return newArr.sort((a,b) => {
        return a-b;
    });
}

console.log(nonMutating(globalArray));
console.log(globalArray);

function nonMutationConcat(original,attach){
    return original.concat(attach);
}

let first = [1,2,3];
let second = [4,5];

console.log(nonMutationConcat(first,second));

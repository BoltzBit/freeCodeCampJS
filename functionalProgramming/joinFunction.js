//usar o split e o join para manipular a string

function sentensify(str){
    let arr = str.split(/\W/);

    let newArr = arr.join(" ");

    return newArr;
}

console.log(sentensify("May-the-force-be-with-you"));


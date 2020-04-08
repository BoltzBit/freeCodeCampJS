function splitify(str){
    //regex que exclui qualquer caracter que não é letra
    let arr = str.split(/\W/);
    return arr;
}

console.log(splitify("Hello World,I-am code"));

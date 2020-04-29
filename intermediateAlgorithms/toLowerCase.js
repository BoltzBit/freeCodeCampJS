function spinalCase(str){
    return str
        .toLowerCase()
        .split(/\W/)
        .filter(a => a !== '')
        .join('-');
}

//teste para ver se é letra Maiscula

function isUpper(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        let myStr = str.charCodeAt(i);

        if((myStr>64) && (myStr<91)){
            count++;
        }
    }

    return count;
}

console.log(isUpper('ThisIsSpinalTap'));

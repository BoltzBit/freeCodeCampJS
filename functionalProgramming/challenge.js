let global = "A Mind Needs Books Like A Sword Needs A Whetstone";

//function urlSlug(str){
//    let lowerCase = str.toLowerCase();
//    let strSplit = lowerCase.split(/\W/);
//
//    let url = strSplit.filter(a => a!=='');
//
//    let slugUrl = url.join("-");
//
//    return slugUrl;
//}
//
////let a = urlSlug(global);
////
////console.log(!!a[2]);
//
//console.log(urlSlug(global));
//console.log(global);

//solucao alternativa

function urlSlug(str){
    return str
        .toLowerCase()
        .split(/\W/)
        .filter(a => a !== '')
        .join("-")
}

var url = urlSlug(global);
console.log(url);

let global = "Winter Is  Coming";

function urlSlug(str){
    let lowerCase = str.toLowerCase();
    let strSplit = lowerCase.split(/\W/);
    let slugUrl = strSplit.join("-");

    return slugUrl;
}

console.log(urlSlug(global));

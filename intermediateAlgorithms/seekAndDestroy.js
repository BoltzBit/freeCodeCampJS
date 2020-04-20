function destroy(arr, ...params){
    return arr.filter(item => params.indexOf(item) === -1)
}

//outras solucoes para o mesmo problema
//function destroy(arr){
//    let args = Array.prototype.slice.call(arguments);
//
//    for(let i=0;i<arr.length;i++){
//        for(let j=0;i<args.length;j++){
//            if(arr[i] === args[j]){
//                delete arr[i];
//            }
//        }
//    }
//
//    //o arr tera algumas posicoes como null, e precisamos filtrar essas posicoes;
//    return arr.filter(Boolean);
//}

//function destroy(arr){
//    let args = Array.from(arguments).slice(1);
//
//    return arr.filter(item => !args.includes(item));
//
//}

//const destroy = (arr, ...params) => arr.filter(item => !params.includes(item));

console.log(destroy(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], 
"yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));

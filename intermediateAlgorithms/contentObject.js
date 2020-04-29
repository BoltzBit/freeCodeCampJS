//function whatIsInAName(collection,source){
//    let srcKeys = Object.keys(source);
//
//    return collection.filter(obj => {
//        for(let i=0;i<srcKeys.length;i++){
//            if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]){
//                return false;
//            }
//        }
//         return true;
//      });
//}


//solucao 2
function whatIsInAName(collection, source){
    let srcKeys = Object.keys(source);

    return collection.filter(obj => {
        return srcKeys.every(key => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}

//solucao 3
//function whatIsInAName(collection,source){
//    let srcKeys = Object.keys(source);
//
//    return collection.filter(obj =>{
//        return srcKeys.map(key => {
//            return obj.hasOwnProperty(key) && obj[key] === source[key];
//        }).reduce((a,b) => a&&b);        
//    });
//}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));

function whatIsInAName(collection,source){
    let srcKeys = Object.keys(source);

    return collection.filter(obj => {
        for(let i=0;i<srcKeys.length;i++){
            if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]){
                return false;
            }

            return true;
        }});
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));

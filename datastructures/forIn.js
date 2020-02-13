//usando For..in para acessar as chaves de um array
let users = {
    Alan:{
        online: true
    },
    Jeff:{
        online: true
    },
    Sarah:{
        online: true
    },
    Ryan:{
        online: true
    },
}

//pega somente as chaves, não pega os valores
for(let user in users){
    console.log(user)
}

function countOnline(userObj){
    let countUser = 0
    for(let user in userObj){
        if(userObj[user].online === true){
            countUser++
        }
    }

    return countUser
}

console.log(countOnline(users))
let users = {
    Alan:{
        age: 27,
        online: true
    },
    Jeff:{
        age: 32,
        online: true
    },
    Sarah:{
        age: 48,
        online: true
    },
    Ryan:{
        age:19,
        online: true
    },
}

function getArrayOfUsers(obj){
    return Object.keys(obj)
}

console.log(getArrayOfUsers(users))
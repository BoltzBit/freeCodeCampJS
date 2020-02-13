//verificar se existe uma propriedade em um objeto
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

function isEveryoneHere(obj){
    if( obj.hasOwnProperty('Alan') &&
        obj.hasOwnProperty('Jeff') &&
        obj.hasOwnProperty('Sarah') &&
        obj.hasOwnProperty('Ryan')) {
            return true
        } else {
            return false
        }
}

console.log(isEveryoneHere(users))
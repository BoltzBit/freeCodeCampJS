let duck = {
    name: "zoe",
    numLegs: 2,
    sayName: function(){
        return `Olá ${duck.name}`
    }
}

//exercicio criar metodo em dog que retorne, "This dog has 2 lags"

let dog = {
    name: "zoe",
    numLegs: 4,
    sayLags: function(){
        return `This dog has ${dog.numLegs}`
    }
}

console.log(dog.sayLags())
console.log(duck.sayName())
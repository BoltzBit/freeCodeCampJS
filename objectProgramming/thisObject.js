let duck = {
    name: "zoe",
    numLegs: 2,
    sayName: function(){
        return `O nome do pato é ${this.name}`
    }
}

let dog = {
    name: "zoe",
    numLegs: 4,
    sayLegs: function(){
        return `This dog has ${this.numLegs} legs.`
    }
}

console.log(dog.sayLegs())
console.log(duck.sayName())
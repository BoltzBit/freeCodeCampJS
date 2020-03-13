function Bird(name){
    this.name = name,
    this.numLegs = 2
}
let ownProperty = []
let ownProperty2 = []

let duck = new Bird("Meu passarin")
let canary = new Bird("brasil")

for(let property in duck){
    if(duck.hasOwnProperty(property)){
        ownProperty.push(property)
    }
}

for(let property in canary){
    if(canary.hasOwnProperty(property)){
        ownProperty2.push(property)
    }
}

console.log(ownProperty2)

console.log(ownProperty)
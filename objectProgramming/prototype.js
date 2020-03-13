function Bird(name,color){
    this.name = name,
    this.color = color
}
function Dog(name,color){
    this.name = name
    this.color = color
}
//prototipo é como uma receita para criar objetos   
Bird.prototype.numLegs = 2
Dog.prototype.numLegs = 4

let canary = new Bird("Pelin","blue")
let duck = new Bird("Afonso","grey")

let pintcher = new Dog("nervoso","azul")

console.log(canary.numLegs)
console.log(duck.numLegs)
console.log(pintcher.numLegs)

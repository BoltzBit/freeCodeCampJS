function Bird(name,color){
    this.name = name,
    this.color = color,
    this.numLegs = 2
}

function Dog(name,color){
    this.name = name,
    this.color = color,
    this.numLegs = 4
}

let meuDog = new Dog("filhao","purple")
let meuPassaro = new Bird("Sacanagem","black")


console.log(meuDog.name)
console.log(meuDog.color)
console.log(meuDog.numLegs)
console.log("----------------------------")
console.log(meuPassaro.name)
console.log(meuPassaro.color)
console.log(meuPassaro.numLegs)
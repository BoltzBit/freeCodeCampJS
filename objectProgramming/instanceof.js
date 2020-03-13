let Bird = function (name,color){
    this.name = name,
    this.color = color,
    this.numLegs = 2
}

let crow = new Bird("Bebe","yellow")

let bat = {
    name: "bruce",
    color: "dark",
    numLegs: 2
}


let House = function(numBedroons){
    this.numBedroons = numBedroons
}

let myHouse = new House(5)
console.log(myHouse instanceof House)

//instanceof verifica se um objeto foi instanciado apartir do construtor passado
console.log(crow instanceof Bird)
console.log(bat instanceof Bird)
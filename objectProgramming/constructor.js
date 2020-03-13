//Construtores definem propriedades e comportamentos ao inves de retornar valores
function Bird(){
    this.name = "Mateus",
    this.numLegs = 2,
    this.color = "blue"
}

function Dog(){
    this.name = String,
    this.numLegs = Number,
    this.color = String
}

let viraLata = new Dog()
viraLata.name = "MyLittle"
viraLata.numLegs = 4,
viraLata.color = "red"

console.log(viraLata.name)
function Animal(){

}

function Bird(name){
    this.name = name;
}

function Dog(name){
    this.name = name;
}

Animal.prototype = {
    constructor: Animal,
    describe: function(){
        console.log(`My name is ${this.name}`);
    }
}

Bird.prototype = {
    constructor:Bird
}

let pomba = new Bird('Azul');

console.log(pomba.describe);
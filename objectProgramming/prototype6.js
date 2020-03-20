function Animal(){}

Animal.prototype = {
    constructor: Animal,
    eat: function(){
        console.log('nom nom nom');
    }
};

let animal = Object.create(Animal.prototype);
let duck = Object.create(Animal.prototype);
let dog = Object.create(Animal.prototype);

animal.eat();
console.log(animal instanceof Animal);

duck.eat();
dog.eat();
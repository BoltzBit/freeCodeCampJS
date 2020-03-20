function Bird(name){
    this.name = name
}

function Dog(name){
    this.name = name;
}

//Bird.prototype.speak = function(){
//    console.log('pru pru pru');
//}
//
//Bird.prototype.describe = function(){
//    console.log(`My name is ${this.name}`);
//}

//um jeito melhor de fazer
Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    speak: function(){
        console.log('pru pru pru');
    },
    describe: function(){
        console.log(`My name is ${this.name}`);
    }
};

Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function(){
        console.log('nhak nhak');
    },
    describe: function(){
        console.log(`My name is ${this.name}`);
    }
};

const pomba = new Bird('Fedorenta');
const zoe = new Dog('Zoe');

console.log(Bird.prototype.isPrototypeOf(pomba));
console.log(pomba.constructor === Bird);
pomba.speak(); 
pomba.describe();
zoe.eat();
zoe.describe();
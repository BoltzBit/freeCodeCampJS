function Bird(name){
    this.name = name;
}

Bird.prototype.numLegs = 2;

let pomba = new Bird('Pombinha da Paz');

//let ownProperty = [];
//let protoProperty = [];

//usamos Bird como prototipo para colocar numLags
//for(let property in pomba){
//    if(pomba.hasOwnProperty(property)){
//        ownProperty.push(property);
//    }else{
//        protoProperty.push(property);
//    }
//}

//console.log(pomba.numLegs)
//console.log(ownProperty)
//console.log(protoProperty)

function Dog(name){
    this.name = name;
}

Dog.prototype.numLegs = 4;
Dog.prototype.latir = () => {
    console.log('Au Au!');
};

let beagle = new Dog('Joverson');

let ownProperty = [];
let protoProperty = []

for(let property in beagle){
    if(beagle.hasOwnProperty(property)){
        ownProperty.push(property);
    }else{
        protoProperty.push(property);
    }
}

beagle.latir();
console.log(ownProperty);
console.log(protoProperty);
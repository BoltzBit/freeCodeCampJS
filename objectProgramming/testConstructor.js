function Dog(name){
    this.name = name;
}

function Bird(name){
    this.name = name;
}


let beagle = new Dog('Mateus');
let pomba = new Bird('Pombinha da paz');

console.log(beagle.constructor === Dog);
console.log(pomba.constructor === Bird);

function joinBirdFraternity(candidate){
    if(candidate.constructor === Bird){
        return true;
    }else{
        return false;
    }
}

const galinha = {
    name: 'pintadinha',
    numLegs: 2,
}

console.log(joinBirdFraternity(galinha));
console.log(joinBirdFraternity(pomba));
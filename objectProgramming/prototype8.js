function Animal(){}

Animal.prototype.eat = function(){
	console.log('nom nom nom');
};

function Bird(){};

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;

Bird.prototype.fly = function(){
	console.log("I'm flying");
};

let pomba = new Bird();

pomba.fly();
pomba.eat();
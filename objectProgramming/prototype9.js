//é possivel substituir um metodo
function Animal(){}

Animal.prototype.eat = function(){
	console.log('nom nom nom');
}

function Bird(name){
	this.name = name;
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

//substituicao do metodo eat de Animal pelo de Bird
Bird.prototype.eat = function(){
	console.log('crack crack crack');
}

let pomba = new Bird('branca');

pomba.eat();
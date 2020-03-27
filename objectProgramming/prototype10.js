function Bird(){}

Bird.prototype.fly = function(){
	console.log('I\'m flying');
}

function Penguin(name){
	this.name = name
}

Penguin.prototype = Object.create(Bird.prototype);

Penguin.prototype.constructor = Penguin;

//substituir metodo fly

Penguin.prototype.fly = function(){
	console.log('Alas, this is a flightless bird');
}

let penguin = new Penguin('penguin');

penguin.fly();
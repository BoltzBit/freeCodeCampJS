function Bird(){
	//variavel vista somente neste escopo de Bird.
	let hatcheEgg = 10;
	let weight = 15;
	
	
	this.getHatchedEggCount = function(){
		return hatcheEgg;
	}
	
	this.getWeight = function(){
		return weight;
	}
}

let duck = new Bird();

console.log(duck.getHatchedEggCount());
console.log(duck.getWeight());
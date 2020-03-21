//funcao construtora de Animal
function Animal(){};

//Criamos um prototipo para animal, que contem o metodo eat()
Animal.prototype = {
	constructor: Animal,
	eat: function(){
		console.log('nom nom nom');
	}
}

//funcao construtora de Bird
function Bird(name){
	this.name = name;
}

//Criamos um protototipo para Bird que é filho de Animals, ou seja
//recebe por heranca as propriedades e metodos de Animal
Bird.prototype = Object.create(Animal.prototype);
//definindo manualmente o constructor de Bird
Bird.prototype.constructor = Bird;

//instancia de um Bird(), chamamos de pomba, herda todas as propriedades de Bird e Animal
let pomba = new Bird('branca');


pomba.eat();
console.log(pomba.name);
console.log(pomba.constructor);
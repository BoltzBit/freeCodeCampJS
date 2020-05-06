/*
function spinalCase(str){
	//variavel para espaços em branco e underscore
    let regex = /\s+|_+/g;
	
	//separa low-upper para low-space-upper
	str = str.replace(/([a-z])([A-Z])/g,'$1 $2');
	
	return str.replace(regex,'-').toLowerCase();
}
*/

//solucao 2

/*
function spinalCase(str){
	str = str.replace(/([a-z])([A-Z])/g,'$1 $2');
	
	return str
		.toLowerCase()
		.split(/(?:_| )+/)
		.join('-');
}
*/

//solucao 3

function spinalCase(str){
	return str
		.split(/\s|_|(?=[A-Z])/)
		.join('-')
		.toLowerCase();
}

console.log(spinalCase('The_Andy_Griffith_Show'));

//ideias para resolver
//regex maiuscula /[A-Z]/
//regex underscor /_/
//indexOf() das letras maiuscula
//slice() para separar onde começa maiuscula
//split() para gerar array com strings em lowerCase

const vowel = ['a','e','i','o','u'];

//minha solução
function pigLatinTranslate(str){
	
	//fazer um loop na string e verificar o indice da vogal
	if(!vowel.includes(str[0])){
		for(let i=0;i<str.length;i++){
			if(vowel.includes(str[i])){
				let cons = str.slice(0,i);
				let pieceVowel = str.slice(i);
				
				return `${pieceVowel}${cons}ay`;
			}
		}
		return `${str}ay`;
	}
	return `${str}way`;
}

//SOLUCAO ALTERNATIVA 1
/*function translatePigLatin(str){
	//regex para o que não é vogal
	let consonantRegex = /^[^aeiou]+/;
	
	//encontra as consoantes na string
	let myConsonant = str.match(consonantRegex);
	
	return myConsonant !== null
		? str
			.replace(consonantRegex,'')
			.concat(myConsonant)
			.concat('ay')
		: str.concat('way');
}*/

//SOLUÇÃO ALTERNATIVA 2
/*function translatePigLatin(str){
	let pigLatin = "";
	let regex = /[aeiou]/gi;
	
	//verifica se o primeiro caractere é uma vogal
	if(str[0].match(regex)){
		pigLatin = `${str}way`;
	}else if(str.match(regex) === null){
		pigLatin = `${str}ay`;
	}else{
		//procura o indice da primeira vogal
		let vowelIndice = str.indexOf(str.match(regex)[0]);
		
		//usando substr() concatena a string começando pela vogal, e adicionando a consoante no final
		pigLatin = `${str.substr(vowelIndice)}${str.substr(0,vowelIndice)}ay`;
	}
	
	return pigLatin;
}*/

//SOLUÇÃO ALTERNATIVA 3
/*function translatePigLatin(str){
	//verifica se começa com vogal e retorna com way
	if(str.match(/^[aeiou]/)){
		return `${str}way`;
	}
	
	//cria uma constante armazenando as primeiras consoantes, e retona concatenado com ay
	const consonantCluster = str.match(/^[^aeiou]+/)[0];
	return `${str.substring(consonantCluster.length)}${consonantCluster}ay`;
}*/

//SOLUÇÃO ALTERNATIVA 4

//function translatePigLatin(str){
//	return str
//		.replace(/^[aeiou]\w*/,"$&way")
//		.replace(/(^[^aeiou]+)(\w*)/,"$2$1ay");
//}

//SOLUÇÃO ALTERNATIVA 05
/*function translatePigLatin(str, charPos=0){
	return ['a','e','i','o','u'].includes(str[0])
		? str + (charPos === 0 ? 'way' : 'ay')
		: charPos === str.length
			? str + 'ay'
			:translatePigLatin(str.slice(1) + str[0], charPos+1);
}*/



console.log(translatePigLatin('aklkagjklk'));

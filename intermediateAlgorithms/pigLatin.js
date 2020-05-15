const vowel = ['a','e','i','o','u'];
const reg = /a,e,i,o,u/;

function pigLatinTranslate(str){
	
	/*if(!vowel.includes(str[0])){
		str2 = `${str.slice(0,1)}ay`;
		str3 = `${str.slice(1)}${str2}`;
		return str3;
	}*/
	
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

console.log(pigLatinTranslate('rhythm'));

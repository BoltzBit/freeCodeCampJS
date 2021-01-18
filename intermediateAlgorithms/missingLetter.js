function sliceString(alphabeto, str){
	let beginInAphabeto = alphabeto.indexOf(str[0]);
	let endInAlphabeto = alphabeto.indexOf(str[str.length-1]);
	
	return alphabeto.slice(beginInAphabeto, endInAlphabeto+1);
}

function test(letter,str){
	return str.indexOf(letter);
}

function fearNotLetter(str){
	let alphabeto = 'abcdefghijklmnopqrstuvwxyz';
	let alphabetoSlice = sliceString(alphabeto, str).split('');
	
	for(let i = 0; i<alphabetoSlice.length; i++){
		
		if(test(alphabetoSlice[i],str) === -1){
			return alphabetoSlice[i];
		};
	}
	
}

console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));

function myReplace(str,before,after){
	
	if(before.match(/^[A-Z]/)){
		after = after.replace(after.charAt(0),s => s.toUpperCase());
	}
	
	return str.replace(before,after);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

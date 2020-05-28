function pairElement(str){
	let newArr = [];
	let temp = str.split("");
	
	/*for(let i=0;i<str.length;i++){
		if(str[i] === "G"){
			newStr += "C";
		}else{
			newStr += "G";
		}
	}*/
	
	for(let i=0;i<temp.length;i++){
		switch(temp[i]){
			case "G":
				newArr.push([temp[i],"C"]);
				break;
			case "C":
				newArr.push([temp[i],"G"]);
				break;
			case "A":
				newArr.push([temp[i],"T"]);
				break;
			case "T":
				newArr.push([temp[i],"A"]);
				break;
		}
	}
	
	
	return newArr;
}

console.log(pairElement("ATCGA"));

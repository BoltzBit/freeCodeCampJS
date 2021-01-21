function uniteUnique(...arr){
	let unionArr = [];
	
	arr.map(p => p.map(i => {
		if(!unionArr.includes(i)) unionArr.push(i);
	}));
	
	return unionArr;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

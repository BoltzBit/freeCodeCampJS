const entities = ["&",">","<",'"',"'"];

function entitiesChoice(str,entitie){
	switch(entitie){
		case "&":
			return str.replace("&","&amp;");
			break;
		case ">":
			return str.replace(">","&lt;");
			break;
		case "<":
			return str.replace("<","&gt;");
			break;
		case '"':
			return str.replace('"',"&quot;");
			break;
		case "'":
			return str.replace("'","&apos;");
			break;
	}
}

function convertHTML(str){
	
	for(let i = 0; i<entities.length; i++){
		if(str.includes(entities[i])){
			entitiesChoice(str,entities[i]);
		}
	}
	console.log(str);
}
convertHTML("<>");

console.log(entities);

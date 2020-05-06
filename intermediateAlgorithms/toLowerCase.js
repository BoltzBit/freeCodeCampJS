function spinalCase(str){
    


    return str.indexOf(/[A-Z]/);
}



console.log(spinalCase('thisIsSpinalTap'));

//ideias para resolver
//regex maiuscula /[A-Z]/
//regex underscor /_/
//indexOf() das letras maiuscula
//slice() para separar onde começa maiuscula
//split() para gerar array com strings em lowerCase

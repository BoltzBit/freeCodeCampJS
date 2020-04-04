function nonMutatingSplice(cities){
    let arr = cities.slice(0,3);

    return arr;
}


let inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

console.log(nonMutatingSplice(inputCities));
console.log(inputCities);

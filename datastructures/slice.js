//o metodo para itens de um array é o slice
//primeiro parametro é onde começa, e segundo parametro
//é onde termina, o segundo parametro não é incluido no novo array
let weatherConditions = ['rain','snow','sleet','hail','clear']
let todayWeather = weatherConditions.slice(1,3)

//o metodo slice cria um novo array
console.log(todayWeather)


function forecast(arr){

    let newArr = arr.slice(2,4)

    return newArr
}

console.log(forecast([
    'cold',
    'rainy',
    'warm',
    'sunny',
    'cool',
    'thunderstorms',
]))
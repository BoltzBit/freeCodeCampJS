//chave valor em objetos Javascripts
let FCC_User = {
    username: 'awesome_coder',
    followers: 572,
    points: 1741,
    completedProjects: 15,
}

//dot notation

let userData = FCC_User.followers
console.log(userData)

//bracket notation, sempre passar o atributo do objeto entre aspas
let userData2 = FCC_User['followers']
console.log(userData2)

let foods = {
    apple: 25,
    oranges: 32,
    plums: 28,
}

foods.bananas = 13
foods.grapes = 35
foods.strawberries = 27

console.log(foods)
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 },
];

//sempre passar o valor inicial para acumulador no reduce
let sumOfAges = users.reduce((sum,user) => sum + user.age,0);
console.log(sumOfAges);

let nameAndAge = users.reduce((obj,user) => {
    obj[user.name] = user.age;
    return obj;
},{});

console.log(nameAndAge);

const users = [
    {name: 'John', age:20},
    {name:'Mateus', age:20},
    {name:'Gustavo',age:15},
];


const usersUnder30 = users.filter(user => user.age < 30);

console.log(usersUnder30);

let testnum = "4.6";

console.log(parseFloat(testnum));

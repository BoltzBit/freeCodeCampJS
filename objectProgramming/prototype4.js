function Bird(name){
    this.name = name;
}

function Dog(name){
    this.name = name;
}

console.log(typeof Dog.prototype);
console.log(Object.prototype.isPrototypeOf(Dog.prototype));

console.log(typeof Bird.prototype);
console.log(typeof Object.prototype);
console.log(Object.prototype.isPrototypeOf(Bird.prototype));
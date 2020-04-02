let bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae"
];

function add(arr,bookName){
    arr.push(bookName);

    return arr;
}

function remove(arr,bookName){
    let book_index = arr.indexOf(bookName);

    arr.splice(book_index,1);

    return arr;
}
console.log(bookList);

let newBookList = add(bookList,'A Brief History of Time');
console.log(newBookList);

let newerBookList = remove(bookList,'On The Electrodynamics of Moving Bodies');
console.log(newerBookList);



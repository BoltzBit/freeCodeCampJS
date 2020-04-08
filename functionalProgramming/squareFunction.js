const squareList = (arr) => {
    let newArr = arr.filter(a => a>0 && Number.isInteger(a));
    let square = newArr.reduce((a,item) => {
        a.push(Math.pow(item,2));
        return a;
    },[]);
    return square;
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//console.log([-3, 4.8, 5, 3, -3.2].filter(a => a>0 && Number.isInteger(a)));

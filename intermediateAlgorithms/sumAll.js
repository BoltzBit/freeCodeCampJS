function sumAll(arr){
    let a = arr[0];
    let b = arr[1];
    let sum = 0;

    if(a>b){
        for(let i=a;i>=b;i--){
            sum+=i;
        }
    }

    for(let i=a; i<=b;i++){
        sum += i;
    }

    
    return sum;
}

console.log(sumAll([10,5]));

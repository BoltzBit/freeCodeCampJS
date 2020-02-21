function factorial(num){
    let fat
    if(num==0 || num==1){
      return 1
    }else{
      fat = num*factorial(num-1)
    }
    return fat
  }
  
  console.log(factorial(0))
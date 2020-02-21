function reverse(str){
    let newStr=[]
    let lastPosition = str.length-1
    
    for(let i=lastPosition;i>=0;i--){
      newStr.push(str[i])
    }
    return newStr.join('')
  }
  
  console.log(reverse('Pastel do Zé'))
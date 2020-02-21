function confirmEnds(str,target){
    let lastLetter = str[str.length-1]
    
    if(lastLetter === target){
        return true
    }else{
        return false
    }

}

console.log(confirmEnds('Mateus','eus'))
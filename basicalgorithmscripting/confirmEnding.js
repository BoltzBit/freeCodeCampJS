function confirmEnds(str,target){
    let sizeTarget = target.length
    /*a propriedade slice do array quando passado um parametro 
    negativo extrai apartir do final o numero de elementos
    igual ao numero passado no parametro*/
    let endStr = str.slice(-sizeTarget)

    if(endStr === target){
        return true
    }else{
        return false
    }
}

console.log(confirmEnds('Open sesame','pen'))


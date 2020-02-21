function palavralonga(palavra){
    let dividir = palavra.split(' ')
    let maior = ''

    for(let i=0;i<dividir.length;i++){
      if(dividir[i].length>maior.length){
        maior = dividir[i]
      }
    }

    return maior.length
}

console.log(palavralonga('The quick brown fox jumped over the lazy dog'))
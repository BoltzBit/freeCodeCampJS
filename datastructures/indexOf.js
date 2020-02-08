//indexOf retorna a posição do elemento passado ou -1, se não estiver no array
let fruits =['apples','pears','oranges','peaches','pears']

console.log(fruits.indexOf('dates'))
console.log(fruits.indexOf('oranges'))
console.log(fruits.indexOf('pears'))

function quickCheck(arr,elem){
    if(arr.indexOf(elem) === -1){
        return false
    }else{
        return true
    }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'shallots'))
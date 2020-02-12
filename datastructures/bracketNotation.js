//bracket notation como usar
//let selectedFood = getCurrentFood(scannedItem)
//let inventory = foods[selectedFood]

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
}
//delete foods.apples

function checkInventory(scannedItem){
    let inventory = foods[scannedItem]

    return inventory
}

console.log(checkInventory('apples'))
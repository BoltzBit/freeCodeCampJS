//continuar comprando o celular e verificar se o saldo da conta permite a compra
//refatorar o codigo de acordo com a solucao do livro

const PRICE_CELL = 80.00;
const TAXS = 0.02;
const PRICE_OTHERS = 10.00;
const SPENDING_THRESHOLD = 150.00;


let saldoContaBancaria = 350.95;
let amount = 0;

//for(let i=0;i<14;i++){
//    totalCell+=PRICE_CELL;
//}
//
//for(let i=0;i<10;i++){
//    totalOthers+=PRICE_OTHERS;
//}
//
//let total = totalOthers+totalCell;
//let totalWithTaxs = total + (total*TAXS);
//
//if(totalWithTaxs<saldoContaBancaria){
//    console.log('Pode Comprar!');
//    console.log(`Total: $${totalWithTaxs.toFixed(2)}`);
//}else{
//    console.log('Saldo insuficiente!');
//}

//nucleo do programa


function calculateTaxs(amount){
    return amount*TAXS;
}

function formatAmount(amount){
    return `$${amount}`;
}

while(amount < saldoContaBancaria){
        amount += PRICE_CELL;

        if(amount<SPENDING_THRESHOLD){
            amount += PRICE_OTHERS;
        }
}

amount +=  calculateTaxs(amount);

console.log(`Sua compra foi de ${formatAmount(amount)}`);

if(amount > saldoContaBancaria){
    console.log('Você não pode pagar!');
}

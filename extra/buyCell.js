//continuar comprando o celular e verificar se o saldo da conta permite a compra
let saldoContaBancaria = 8500.95;
const PRICE_CELL = 800.00;
const TAXS = 0.12;
const PRICE_OTHERS = 2.56;

let totalCell=0;
let totalOthers=0;

for(let i=0;i<14;i++){
    totalCell+=PRICE_CELL;
}

for(let i=0;i<10;i++){
    totalOthers+=PRICE_OTHERS;
}

let total = totalOthers+totalCell;
let totalWithTaxs = total + (total*TAXS);

if(totalWithTaxs<saldoContaBancaria){
    console.log('Pode Comprar!');
    console.log(`Total: $${totalWithTaxs.toFixed(2)}`);
}else{
    console.log('Saldo insuficiente!');
}

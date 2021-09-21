let family = {
    incomes: [10, 23, 12, 10],
    expenses: [5, 13, 0]
}

function balance(family){
    let total = 0;

    for (let income of family.incomes) {
        total += income;
    }

    for (let expense of family.expenses) {
        total -= expense;
    }

    if(total >= 0){
        console.log(`Saldo positívo no valor de R$${total.toFixed(2)}`)
    } else {
        console.log(`Saldo negativo no valor de R$${total.toFixed(2)}`)
    }

}

balance(family);
let obj = {
    receitas: [1000, 2000],
    despesas: [100, 200],
}

function calcular(){
    Receita = 0
    Despesa = 0
    for (i = 0; i < obj.receitas.length; i++) {
        Receita += obj.receitas[i]
    }
    for (i = 0; i < obj.despesas.length; i++) {
        Despesa += obj.despesas[i];
    }
    saldo = Receita - Despesa
    if (saldo > 0) {
        console.log(`Saldo positivo: R$ ${saldo.toFixed(2)}`)
    } else if (saldo > 0) {
        console.log(`Saldo negativo: R$ ${saldo.toFixed(2)}`)
    } else {
        console.log(`Saldo zerado: R$ ${saldo.toFixed(2)}`)
    }
}

calcular()
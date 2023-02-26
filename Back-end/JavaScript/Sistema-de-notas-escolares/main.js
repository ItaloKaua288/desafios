function pontuacao(nota) {
    let notaA = 100 >= nota && nota >= 90 
    let notaB = 89 >= nota && nota >= 80
    let notaC = 79 >= nota && nota >= 70
    let notaD = 69 >= nota && nota >= 60
    let notaF = nota < 60 && nota >= 0

    if (notaA) {
        console.log('A')
    } else if (notaB) {
        console.log('B')
    } else if (notaC) {
        console.log('C')
    } else if (notaD) {
        console.log('D')
    } else if (notaF) {
        console.log('F')
    } else {
        console.log('Nota inválida!')
    }
}

pontuacao(100)
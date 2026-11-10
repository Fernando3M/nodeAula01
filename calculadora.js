const num1 = 12
const num2 = 8
const num3 = 3
const num4 = 10
const num5 = 2

function somar(n1, n2){
    let somarNum = n1 + n2
    return somarNum;
}

function mult(n1, n2){
    let multNum = n1 * n2
    return multNum
}

function subtrair(n1, n2){
    let subtrairNum = n1 - n2
    return subtrairNum
}

function dividir(n1, n2){
    let dividirNum = n1 / n2
    return dividirNum
}

const resultado1 = somar(num1, num2)
const resultado2 = mult(resultado1, num3)
const resultado3 = dividir(num4, num5)
const resultado4 = subtrair(resultado2, resultado3)


console.log(`${resultado4.toFixed(1)}`)

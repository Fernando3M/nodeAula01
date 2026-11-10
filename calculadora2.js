const num1 = 12
const num2 = 8
const num3 = 3
const num4 = 10
const num5 = 2

function expressao(n1, n2, n3, n4, n5){
    const resultado =  ((n1+n2) * n3) - (n4 / n5)
    return resultado
}

const res = expressao(12, 8, 3, 10, 2);

console.log(`${res.toFixed(1)}`)
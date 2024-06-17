console.log(calculadora(8, 10, '+'))
console.log(calculadora(8, 10, '-'))
console.log(calculadora(8, 10, '*'))
console.log(calculadora(8, 10, '/'))


function calculadora(n1, n2, sinal) {
    if (sinal == '+'){ 
        return n1 + n2
    
    } else if (sinal == '-') {
        return n1 - n2

    } else if (sinal == '*') {
        return n1 * n2

    } else if (sinal == '/') 
        return n1 / n2
}
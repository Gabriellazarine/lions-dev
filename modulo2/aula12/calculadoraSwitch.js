
function calculadora(n1, n2, sinal) {

    switch(sinal) {
        case '+':
         return n1 + n2
        
        case '-':
         return n1 - n2


        case '*':
         return n1 * n2
    

        case '/':
         return n1 / n2

         default:
            console.log("operação invalida use '+', '-', '*' e '/' como sinal")
          return NaN

    }
}
console.log(calculadora(8, 10, '+'))
console.log(calculadora(8, 10, '-'))
console.log(calculadora(8, 10, '*'))
console.log(calculadora(8, 10, '/'))
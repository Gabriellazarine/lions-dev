let numero 

console.log("insira um numero")
process.stdin.once('data', function(data) {
    numero = parseFloat(data.toString().trim())
    processamento(numero)
    process.exit()
}
)

function processamento(numero) {
    if (numero % 5 == 0) {
    console.log("o numero e divisível por 5")
    } else 
    console.log("o numero não é divisível por 5")
}


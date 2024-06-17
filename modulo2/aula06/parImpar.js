let numero

console.log('Fale um número')
process.stdin.once('data' , function(data) {
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
})

function processamento(numero){
  
  if (numero == 0){
    console.log("Olá, o número que digitou é zero")
  } else if (numero % 2 == 0) {
    console.log("O número que digitou é par")
  } else {
    console.log("o número que digitou é impar")
  }
}
let notas = [7.5,8.0,6.0,9.5,5.0,8.5,7.0,10.0,6.5,9.0]
let soma = 0
let media = 0
let notaMaxima = notas[0]
let notaMinima = notas[0]
let acimaMedia = 0
let reprovados = 0
let novaNota = 8.0

// média das notas
for(let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
} 
  media = soma / notas.length
  console.log(`A média das notas é: ${media}`)

// nota máxima e mínima
for(let i =0; i < notas.length; i++) {
    if(notas[i] > notaMaxima) {
        notaMaxima = notas[i]
    }
  }
for(let i =0; i < notas.length; i++) {
    if(notas[i] < notaMinima) {
        notaMinima = notas[i]
    }
  }
console.log(`A nota mais alta é ${notaMaxima} e a nota minima é ${notaMinima}.`)

// notas acima da média
for(let i = 0; i < notas.length; i++) {
    if(notas[i] > media) {
        acimaMedia++
    }
} 
console.log(`${acimaMedia} notas estão acima da média`)

// nova nota
notas.push(novaNota)
console.log("lista atualizada de notas:")
 for(let i = 0; i < notas.length; i++) {
    console.log(notas[i])
 }

// reprovados
for(let i = 0; i < notas.length; i++) {
    if(notas[i] < 6) {
        reprovados++
    }
}
console.log(`${reprovados} pessoa foi reprovada`)


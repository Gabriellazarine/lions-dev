let nota = [9,5,6,8,9,10,4,7,9,2]
let media = 0
let somatoria = 0
let menorNota = nota[0]
let maiorNota = nota[0]
let passouMedia = 0
let naoPassou = 0
let notasReprovadas = 0

// calcular media
for(i=0; i < nota.length; i++) {
   somatoria += nota[i] 
}  media = somatoria / nota.length
console.log(`a media das notas é ${media}`)

// maior nota 
for(i=0; i < nota.length; i++) {
if(nota[i] > maiorNota) {
    maiorNota = nota[i]
} 

if(nota[i] < menorNota) {
        menorNota = nota[i]
}
}console.log(`${menorNota} , ${maiorNota}  `)

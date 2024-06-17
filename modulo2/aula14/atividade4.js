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

// maior e menor nota 
for(i=0; i < nota.length; i++) {
    if(nota[i] > maiorNota) {
        maiorNota = nota[i]
    } 
    
    if(nota[i] < menorNota) {
            menorNota = nota[i]
    }
}

// nota acima e abaixo da media
 for(i=0; i < nota.length; i++) {

    if(nota[i] > media){
         passouMedia++
    } else 
        naoPassou++
 } console.log(`a menor nota é ${menorNota} e a maior é ${maiorNota}, ${passouMedia} passaram da media e ${naoPassou} não passaram.`)

 
// puxar nova nota
nota.push(8)
console.log("Notas atualizadas",nota)

//notas reprovadas
for(i=0; i < nota.length; i++) {
    if(nota[i] < 8.0){
        notasReprovadas++
    }
} console.log(`o número de notas reprovadas foi: ${notasReprovadas}`)


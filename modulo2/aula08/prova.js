let prova1
let prova2
let nota = []

console.log('Qual a primeira nota?')   
process.stdin.once('data' , function(data) {
    prova1 = parseFloat(data.toString().trim())
    console.log('Qual é a sua segunda nota?')

    process.stdin.once('data' , function(data) {
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()
    })
})
 
function processamento(prova1, prova2){
nota.push(prova1)
nota.push(prova2)
media = (nota[0] + nota[1])/2
console.log(`Sua nota é: ${media}`)
}
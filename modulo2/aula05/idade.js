let nome
let idade
const ano = 2024


console.log('qual é o seu nome?')
process.stdin.once('data' , function(data) {
    nome = data.toString().trim()
    console.log('qual é sua idade?')

    process.stdin.once('data' , function(data) { 
    idade = parseInt(data.toString().trim())
    processamento(nome, idade)
    process.exit()
    })
})     
    function processamento(nome, idade) { 
     let calculoAno = ano - idade
     console.log(`olá ${nome}, você nasceu em ${calculoAno} ou se não tiver feito aniversário nasceu em ${calculoAno-1}`)
     
}  
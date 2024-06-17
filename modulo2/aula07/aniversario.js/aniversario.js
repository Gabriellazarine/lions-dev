let nome
let idade
let aniversario
const anoAtual = 2024

console.log('qual é o seu nome?')

process.stdin.once('data' , function(data) {
    nome = data.toString().trim()
    console.log('qual é sua idade?')

  process.stdin.once('data' , function(data) { 
    idade = parseInt(data.toString().trim())
    console.log('Você já fez aniversário?')
    process.stdin.once('data' , function(data) { 
       aniversario = data.toString().trim()
       processamento(nome, idade, aniversario)
       process.exit()
    })
  })  
})     
    function processamento(nome, idade, aniversario) { 
    idade = anoAtual - idade
      if(aniversario == 'sim') {
            idade = idade
    } else{(aniversario == 'não') 
        idade = idade - 1
    }
    console.log(`olá ${nome} você nasceu em ${idade}.`)
}
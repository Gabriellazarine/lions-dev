console.log('bem vindos ao jogo da adivinhação!')

const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let numeroAleatorio = Math.floor(Math.random() * 100) +1
let rodadas = 0
let limite = 10

function palpite() {
    if(rodadas < limite) {
    rl.question('qual número deseja chutar?' ,(valor)=>{

        if(numeroAleatorio > valor){
            console.log(' o número é maior')
            rodadas++
            palpite()
        } else if(numeroAleatorio < valor) {
            console.log('o número é menor')
            rodadas++
            palpite()
        }else if (numeroAleatorio == valor){
            rodadas++
            console.log(`parabéns você acertou o número em ${rodadas} tentativas`)
            rl.close()
        }else {
            console.log('número inválido')  
           palpite()
        }
    })
} else {
    console.log('você atingiu o limite de tentativas')
    rl.close()
}
}
palpite()
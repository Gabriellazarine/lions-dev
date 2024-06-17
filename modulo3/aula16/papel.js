let opcoes = ['pedra', 'papel', 'tesoura']
let escolhaUsuario
let escolhaComputador
let resultado

console.log('qual opção vai escolher? (pedra, papel, tesoura)')
process.stdin.once('data' , function(data){
    escolhaUsuario = data.toString().trim()

    escolhaComputador = opcoes [Math.floor(Math.random() * opcoes.length)]

    if(escolhaUsuario == escolhaComputador) {
        resultado = 'empate'
    } else(escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura' || escolhaUsuario == 'tesoura' && escolhaComputador == 'papel' || escolhaUsuario == 'papel' && escolhaComputador == 'pedra') {
        resultado = 'você venceu'
    }


})
const coresMaisVotadas = ['preto', 'azul', 'verde']
const coresFavoritas = ['preto', 'azul', 'verde']
const coresEspeciais = []

console.log('qual é a sua cor favorita?')
    process.stdin.once('data' , function(data) {
        corDoUsuario = data.toString().trim()
        processamento(corDoUsuario)
        process.exit()
    }
)

function processamento(corDoUsuario) {
    if (coresMaisVotadas.includes(corDoUsuario)){
        console.log("A sua cor favorita é uma das favoritas da turma!")
}else{
        console.log("A sua cor favorita é diferente, vamos adicionar à lista!")
        coresEspeciais.push(corDoUsuario)
  }      
        console.log(`as cores favoritas são: ${coresFavoritas} e as cores especiais são: ${coresEspeciais}, as cores favoritas tem ${coresFavoritas.length} elementos`)


}


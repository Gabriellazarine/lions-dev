const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let filmes = []

function exibirCatalogo() {
    console.log(`
          1. cadastrar filme
          2. listar filme
          3. Melhor nota
          4. Remover filme
          5. Editar filme
          6. Sair
          `)


rl.question('esolha uma opção' , (opcao) => {
    switch(opcao) {
        case '1':
            cadastrarFilme()
            break
        case '2':
            listarFilme()
            break
        case '3':
            melhorFilme()
            break
        case '4':
            removerFilme()
            break
        case '5':
            editarFilme()
            break
        case '6':
            rl.close()
        default:
            console.log('filme inválido')
            exibirFilme()
            break
        }
    })
}

function cadastrarFilme() {
    rl.question('Digite o nome do filme: ', (nome) => {
        rl.question('Digite o gênero do filme: ', (genero) => {
            rl.question('Digite a nota do filme: ', (nota) => {
                filmes.push({nome, genero, nota: parseFloat(nota) })
                    console.log('Filme cadastrado com sucesso!')
                    exibirFilme()
            }) 
        })
    })
}

function listarFilme() {
    if(filmes.length === 0) {
        console.log('Nenhum filme foi cadastrado')
    } else {
        console.log('Lista de filmes:')
          filmes.forEach((filmes, index) => {
            console.log(`${index + 1} Nome: ${filmes.nome}, Gênero: ${filmes.genero}, Nota ${filmes.nota.toFixed(2)}`)
        })
    } exibirFilme()
}

function melhorFilme() {
    if(filmes.length == 0) {
        console.log('Nenhum filme foi cadstrado')
        exibirFilme()
    }else {
        let melhorFilme
    }
}
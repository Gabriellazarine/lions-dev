const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let jogos = []
// exibe o catálogo de opções do menu
function exibirJogo() {
	console.log(`
	Menu:
	1. Cadastrar jogo
	2. listar jogo
	3. melhor nota
    4. remover jogo
    5. editar jogo
    6. sair
	`)

    // vai executar a escolha do menu 
	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarJogo()
				break
			case '2':
				listarJogo()
				break
            case '3':
                maiorNota()
                break
            case '4':
                removerJogo()
                break
            case '5':
                editarJogo()
                break
            case '6':
                rl.close()
			break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirJogo()
				break
		}
	})
}

// vai cadastrar um novo jogo, contendo seu nome, tipo e nota 
function cadastrarJogo() {
	rl.question('Digite o nome do jogo: ', (nome) => {
		rl.question('Digite o tipo do jogo: ', (tipo) => {
			rl.question('Digite a nota do jogo ', (nota) => {
				jogos.push({nome, tipo, nota: parseFloat(nota) })
				console.log('jogo cadastrado com sucesso!')
				exibirJogo()
			})
		})
	})
} 

// vai listar os jogos cadastrados
function listarJogo() {
    if(jogos.length === 0) {
        console.log('Nenhum jogo foi cadastrado')
    } else {
        console.log('lista de jogos:')
        jogos.forEach((jogos , index)=> {
            console.log(`${index + 1} Nome: ${jogos.nome}, Cargo: ${jogos.tipo}, salário: ${jogos.nota.toFixed(2)}`)
         })
     }  exibirJogo()
}

// vai exibir o jogo com maior nota
function maiorNota() {
	if(jogos.length == 0) {
		console.log('Nenhum cadastro foi realizado')
		exibirJogo()
	}else {
let maiorNota = jogos[0]

for(let i = 0; i < jogos.length; i++) {
	if(jogos[i].nota > maiorNota.nota) {
		maiorNota = jogos[i]
	} 
} console.log(`Jogo com maior nota: Nome: ${maiorNota.nome}, tipo: ${maiorNota.tipo}, nota: ${maiorNota.nota}`)
exibirJogo()
}

} exibirJogo()

// vai remover um jogo da lista de cadastrados 
function removerJogo() {
    if(jogos.length === 0) {
console.log('nenhum cadastro foi realizado')
exibirJogo()
    } else{
        console.log('lista de elementos')
        jogos.forEach((jogos, index) => {
            console.log(`${index + 1}. ${jogos}`)
        })
        rl.question('Digite o número do elemento que deseja remover: ', (numero) => {
            if(numero > 0 && numero <= jogos.length) {
                jogos.splice(numero -1, 1)
                console.log('jogo removido com sucesso!')
                exibirJogo()
            } else {
                console.log('Número inválido, tente novamente')
                exibirJogo()
            }
        })
    }
}

// vai permitir editar algum jogo já cadastrado permitido alterar alguma informação do cadastro
function editarJogo() {
    if(jogos.length == 0) {

    } else {
        rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
            if(numero > 0 && numero <= jogos.length) {
                rl.question('digite o novo nome:', (nome) =>{
                rl.question('digite o novo tipo:', (tipo) =>{
                rl.question('digite a nova nota:', (nota) =>{
                    jogos[numero -1] = {
                    nome,
                    tipo,
                    nota
                    } 
                    console.log('editado com sucesso')
                    exibirJogo()
                })
            })
        })
    } else {
        console.log('Número inválido, tente novamente')
        exibirJogo()
    }
})
}
}
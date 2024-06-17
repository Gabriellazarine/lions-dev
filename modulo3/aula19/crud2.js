const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
	2. listar funcionários
	3. melhor salario
    4. remover funcionário
    5. editar funcionário
    6. sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				listarFuncionarios()
				break
            case '3':
                maiorSalario()
                break
            case '4':
                removerFuncionario()
                break
            case '5':
                editarFuncionario()
                break
            case '6':
                rl.close()
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({nome, cargo, salario: parseFloat(salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
} 


function listarFuncionarios() {
    if(funcionarios.length === 0) {
        console.log('Nenhum funcionário foi cadastrado')
    } else {
        console.log('lista de funcionários:')
        funcionarios.forEach((funcionarios , index)=> {
            console.log(`${index + 1} Nome: ${funcionarios.nome}, Cargo: ${funcionarios.cargo}, salário: ${funcionarios.salario.toFixed(2)}`)
         })
     }  exibirMenu()
}

function maiorSalario() {
	if(funcionarios.length == 0) {
		console.log('Nenhum cadastro foi realizado')
		exibirMenu()
	}else {
let maiorSalario = funcionarios[0]

for(let i = 0; i < funcionarios.length; i++) {
	if(funcionarios[i].salario > maiorSalario.salario) {
		maiorSalario = funcionarios[i]
	}
} console.log(`funcionário com maior salário: Nome: ${maiorSalario.nome}, cargo: ${maiorSalario.cargo}, salário: ${maiorSalario.salario}`)
}

} exibirMenu()

function removerFuncionario() {
    if(funcionarios.length === 0) {
console.log('nenhum cadastro foi realizado')
exibirMenu()
    } else{
        console.log('lista de elementos')
        funcionarios.forEach((funcionarios, index) => {
            console.log(`${index + 1}. ${funcionarios}`)
        })
        rl.question('Digite o número do elemento que deseja remover: ', (numero) => {
            if(numero > 0 && numero <= funcionarios.length) {
                funcionarios.splice(numero -1, 1)
                console.log('funcionário removido com sucesso!')
                exibirMenu()
            } else {
                console.log('Número inválido, tente novamente')
                exibirMenu()
            }
        })
    }
}


function editarFuncionario() {
    if(funcionarios.length == 0) {

    } else {
        rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
            if(numero > 0 && numero <= funcionarios.length) {
                rl.question('digite o novo nome:', (nome) =>{
                rl.question('digite o novo cargo:', (cargo) =>{
                rl.question('digite o novo salário:', (salario) =>{
                    funcionarios[numero -1] = {
                    nome,
                    cargo,
                    salario
                    } 
                    console.log('editado com sucesso')
                    exibirMenu()
                })
            })
        })
    } else {
        console.log('Número inválido, tente novamente')
        exibirMenu()
    }
})
}
}



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
    4. sair
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
                rl.close()
            break
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
		rl.close()
	}else {
let maiorSalario = funcionarios[0]

for(let i = 0; i < funcionarios.length; i++) {
	if(funcionarios[i].salario > maiorSalario.salario) {
		maiorSalario = funcionarios[i]
	}
} console.log(`funcionário com maior salário: Nome: ${maiorSalario.nome}, cargo: ${maiorSalario.cargo}, salário: ${maiorSalario.salario}`)
rl.close()
}

}
exibirMenu()
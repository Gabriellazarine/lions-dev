let nome = ''
console.log('qual é o seu nome?')
process.stdin.on('data', function(data) {
    nome = data.toString()
    let saudacao = 'olá ' + nome 
    console.log(saudacao)
    process.exit()
   })
let lados
let aleatorio

// gabriel lazarine , gabriel soares
console.log('Qual é o número de lados do dado?')
process.stdin.once('data' , function(data) {
    lados = parseInt(data.toString().trim())

   aleatorio = Math.floor(Math.random() * lados) +1
    console.log(aleatorio)
    process.exit()
})


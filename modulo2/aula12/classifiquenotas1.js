function classificarNotas(nota) {
switch (true) {
    case (nota >= 90 && nota <= 100):
        return "A"
    case (nota >= 80 && nota <= 90):
        return "B"
    case (nota >= 70 && nota <= 80):
        return "C"
    case (nota >= 60 && nota <= 70):
        return "D"
    case (nota >= 0 && nota <= 60):
        return "F"
    default:
        return "Nota Inválida"
        
}
}
console.log('qual a sua nota?')
process.stdin.once('data' , function(data) {
    let nota = parseFloat(data.toString().trim())
    let classificacao = classificarNotas(nota)
        console.log(`Sua nota é ${classificacao}.`) 
        
if (classificacao === "A" || classificacao === "B" || classificacao === "C") {
    console.log("Parabéns! Você foi aprovado.")
} else if (classificacao === "D" || classificacao === "F") {
    console.log("Infelizmente, você não foi aprovado.")
}
process.exit()

})


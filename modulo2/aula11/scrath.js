let nota1
let nota2
let media 

console.log("insira sua primeira nota")
    process.stdin.once('data' , function(data) {
        nota1 = parseFloat(data.toString().trim())
        console.log("insera sua segunda nota")

    process.stdin.once('data' , function(data) {
        nota2 = parseFloat(data.toString().trim())
        processamento(nota1, nota2)
        process.exit()
    })
 })
   
    function processamento(nota1, nota2) {
        media =(nota1 + nota2) /2
        if(media < 8) {
            console.log(`que pena, você ficou de recuperacão sua nota foi ${media}`)
  
        }else {
            console.log(`parabéns você passou, sua nota foi ${media}`)
        }
    }
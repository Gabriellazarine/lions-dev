let resposta
let gostaDeCafe

console.log('você gosta de café?')
process.stdin.once('data' , function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta){
   if(resposta == 'sim') {
    gostaDeCafe = true 
   } else if(resposta == 'não') {
    gostaDeCafe = false
   }

   if(gostaDeCafe == true ){
    console.log('que bom, eu também gosto')
   } else if(gostaDeCafe == false){
    console.log('que pena')
   }
}
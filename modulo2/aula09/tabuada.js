let tabuada

console.log('qual tabuada gostaria de saber?')
process.stdin.once('data' , function(data) {
    tabuada = parseInt(data.toString().trim())
    processamento(tabuada)
    process.exit()
    }
  )

function processamento(tabuada){
    for (let i=0;i<=100;i++){
        console.log(`${tabuada} x ${i} = ${tabuada * i}`)
    }
}
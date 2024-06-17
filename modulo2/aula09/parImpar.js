let somaPares = 0
let somaImpares = 0
let totalPares = 0
let totalImpares = 0
let mediaPares = 0
let mediaImpares = 0


for (let i=0; i<=999; i++){
    if(i% 2 == 0) {
        totalPares ++
        somaPares = somaPares +i
        
    } else{
        somaImpares = somaImpares +i
        totalImpares ++
    }
}

mediaPares = somaPares / totalPares
mediaImpares = somaImpares / totalImpares

console.log(`soma dos números pares é de:${somaPares}, o total de números pares é:${totalPares} e sua média é:${mediaPares}`)
console.log(`soma dos números impares é de:${somaImpares}, o total de números impares é:${totalImpares} e sua média é:${mediaImpares}`)

    if(mediaPares > mediaImpares) {
        console.log(`a média dos pares é maior que a média dos números impares`)
        
    }else(mediaImpares > mediaPares) 
    console.log(`a média dos impares é maior que a média dos números pares`)
    
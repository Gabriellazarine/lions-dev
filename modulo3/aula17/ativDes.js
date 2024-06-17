console.log('Bem-vindo ao jogo da adivinhação');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let limite = 10;
let resultado;

function palpite() {
    if (tentativas < limite) {
        rl.question('Qual número deseja chutar? ', (valor) => {
            switch (true) {
                case (numeroAleatorio > valor):
                    resultado = 'maior';
                    break;
                case (numeroAleatorio < valor):
                    resultado = 'menor';
                    break;
                case (numeroAleatorio == valor):
                    resultado = 'acertou';
                    break;
            }
            switch (resultado) {
                case 'maior':
                    console.log('O número é maior');
                    tentativas++;
                    palpite();
                    break;
                case 'menor':
                    console.log('O número é menor');
                    tentativas++;
                    palpite();
                    break;
                case 'acertou':
                    console.log('Você acertou');
                    rl.close();
                    break;
            }
        });
    } else {
        console.log('Você atingiu o limite de tentativas');
        rl.close();
    }
}

palpite();
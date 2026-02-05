var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let positivos = 0;

for (let i = 0; i < 6; i++) {
    let numero = parseInt(lines[i]); // lê cada número
    if (numero > 0) {               // verifica se é positivo
        positivos++;                 // adiciona 1 ao contador
    }
}
console.log(`${positivos}valores positivos`);


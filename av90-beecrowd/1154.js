var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let soma = 0;
let contador = 0;

for (let i = 0; i < lines.length; i++) {
    let idade = Number(lines[i]);

    if (idade < 0) {
        break;
    }

    soma += idade;
    contador++;
}

let media = soma / contador;

console.log(media.toFixed(2));

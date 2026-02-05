var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift()); //valor digitado

let contador = 0; //controla quantos já foram impressos
let atual = numero; //numero que está sendo testado

while (contador < 6) { //garante 6 saídas
    if (atual % 2 !== 0) { //apenas impares
        console.log(atual);
        contador++; //conta quantos resultados já sairam
    }
    atual++; //controla quais numeros
}


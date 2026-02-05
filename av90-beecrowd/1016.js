var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let X = parseInt(lines.shift()); //lines.shift: remover e retornar o primeiro elemento de um array.
console.log(`${2 * X} minutos`);






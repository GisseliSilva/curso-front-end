var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let A = parseInt(lines[0]); //lines: separa o valor em linhas
let B = parseInt(lines[1]);

let SOMA = A + B;

console.log(`SOMA = ${SOMA}`);

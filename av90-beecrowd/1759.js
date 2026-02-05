var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = Number(lines[0]);
let resultado = "";

for (let i = 0; i < N; i++) {
    if (i < N - 1) {
        resultado += "Ho ";
    } else {
        resultado += "Ho!";
    }
}

console.log(resultado);

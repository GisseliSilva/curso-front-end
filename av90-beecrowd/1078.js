var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');// divide a entrada em linhas

var N = Number(lines.shift()); // pega a primeira linha e converte em número

for (let i = 1; i <= 10; i++) {// laço de 1 até 10
    console.log(`${i} x ${N} = ${i * N}`); // imprime a tabuada no formato correto
}

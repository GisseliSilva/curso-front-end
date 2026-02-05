var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var N = Number(input.trim());

let fatorial = 1;

for (let i = 1; i <= N; i++) {
    fatorial = fatorial * i;
}

console.log(fatorial);

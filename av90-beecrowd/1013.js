var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const maior = (a,b) => (a + b + Math.abs(a - b))/2
var [a, b, c] = lines.shift().split(" ").map((x) => parseInt(x));

var resultado = maior(a, maior(b,c));
console.log(`${resultado} eh o maior`);
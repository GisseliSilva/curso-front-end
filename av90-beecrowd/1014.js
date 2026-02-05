var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let distanciaTotal = parseInt(lines[0]); 
let totalCombustivel = parseFloat(lines[1]);

let consumoMedio = distanciaTotal / totalCombustivel;

console.log(consumoMedio.toFixed(3) + " km/l"); //tofixed: quantidade de números depois da vírgula

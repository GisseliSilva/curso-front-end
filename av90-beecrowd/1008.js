var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines[0]);
var horas = parseInt(lines[1]);
var valorHora = parseFloat(lines[2]);

var salario = horas * valorHora;

console.log("NUMBER = " + numero);
console.log("SALARY = U$ " + salario.toFixed(2));

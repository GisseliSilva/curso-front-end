var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let N = parseInt(lines[0]);
let horas = parseInt(N / 3600); 
let minutos = parseInt((N % 3600) / 60);
let segundos = N % 60;

console.log(`${horas}:${minutos}:${segundos}`);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

let DIFERENCA = (A * B) - (C * D);


console.log(`DIFERENCA = ${DIFERENCA}`);


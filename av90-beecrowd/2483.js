var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var I = Number(input.split('\n'));

let letrasA = "";

for (let i = 0; i < I; i++) {
    letrasA += "a";
}

console.log(`Feliz nat${letrasA}l!`);

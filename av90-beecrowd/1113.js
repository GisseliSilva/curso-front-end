var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i = 0;

while (true) {
    var linha = lines[i].trim(); // pega uma linha
    i++;

    var X = Number(linha.split(' ')[0]);
    var Y = Number(linha.split(' ')[1]);

    if (X === Y) {
        break; // encerra quando forem iguais
    }

    if (X < Y) {
        console.log("Crescente");
    } else {
        console.log("Decrescente");
    }
}

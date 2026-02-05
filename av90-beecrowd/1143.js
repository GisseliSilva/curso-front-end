var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var N = Number(input.trim());

for (var i = 1; i <= N; i++) {
    var quadrado = i * i;
    var cubo = i * i * i;
    console.log(i + " " + quadrado + " " + cubo);
}

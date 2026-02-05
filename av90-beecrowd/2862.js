var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let C = Number(lines[0]);

for (let i = 1; i <= C; i++) {
    let energia = Number(lines[i]);

    if (energia > 8000) {
        console.log("Mais de 8000!");
    } else {
        console.log("Inseto!");
    }
}


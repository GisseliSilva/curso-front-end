var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = Number(lines[0]);

for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
        console.log(i);
    }
}


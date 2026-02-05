var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = 2;

while (n <= 100) {
    console.log(n);
    n += 2;
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

for (var i = 0; i < lines.length; i++) {
    var palavra = lines[i].trim();

    if (palavra.length >= 10) {
        console.log("palavrao");
    } else {
        console.log("palavrinha");
    }
}

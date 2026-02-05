var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === "") continue; // ignora linhas vazias

    let valores = lines[i].split(' ');
    let H = Number(valores[0]);
    let Z = Number(valores[1]);
    let L = Number(valores[2]);

    // verifica quem é do meio
    if ((H > Z && H < L) || (H > L && H < Z)) {
        console.log("huguinho");
    } else if ((Z > H && Z < L) || (Z > L && Z < H)) {
        console.log("zezinho");
    } else {
        console.log("luisinho");
    }
}

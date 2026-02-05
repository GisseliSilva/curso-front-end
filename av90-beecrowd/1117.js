var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

contador = 0;
var i = 0;
var soma = 0;

while(contador < 2){
    var nota = Number(lines[i]); 
    i++

    if (nota >= 0 && nota <= 10){
        soma = soma + nota
        contador++;
    } else{
        console.log("nota invalida"); 
       
    }
}
var media = soma / 2;
console.log(`media = ${media}`)
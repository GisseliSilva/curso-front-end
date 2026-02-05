var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var senhaCorreta = 2002;
var i = 0

while(true){
    var senha = Number(lines[i]); 
    i++

    if (senha === senhaCorreta){
        console.log("Acesso Permitido");
        break;
    } else{
        console.log("Senha Invalida"); 
       
    }
}
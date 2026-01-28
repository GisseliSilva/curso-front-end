/*Escreva um programa que continua pedindo ao usúario para inserir uma senha até que a senha correta seja digitada*/

let senhaCorreta = "exapicor2026";
let senha = "";

while (senha !== senhaCorreta){
    senha = prompt("Digite a senha: ");

    if (senha != senhaCorreta){
        alert("Senha Incorreta! Tente novamente")
    }
}

alert("Senha correta! Acesso liberado para Exapicor");
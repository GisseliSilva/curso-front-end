/*Crie um site que pergunte a idade do usuário e informe 
se ele é maior ou menor de idade (18 anos)*/

let idadeTexto = prompt("Digite sua idade:");

if (!idadeTexto || idadeTexto.trim() === ""){
    alert("Erro!Por favor, Digite a sua idade!");
} else {
    idadeTexto = idadeTexto.trim();

    if(!/^\d+$/.test(idadeTexto)){
        alert("Digite apenas NÚMEROS! Ex.: 35");
    } else{
        let idade = parseInt(idadeTexto);
    
    //informe se ele é maior ou menor de idade(18 anos)
        if (idade < 0 || idade > 120){
            alert("Idade inválida!");
        } else {
            if(idade>=18){
                alert("Você é maior de idade!Pode pagar boletos");
            } else{
                alert("Você é menor de idade!");
            }
        }
    }
}
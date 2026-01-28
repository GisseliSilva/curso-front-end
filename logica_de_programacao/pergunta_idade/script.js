document.getElementById('calcularBtn').onclick = function (){
    let idade = prompt('Digite a sua idade');
    //criar variável ano atual
    let anoAtual = 2026;
    //calcular
    let anoNascimento = anoAtual - idade; 

    alert(`Você nasceu em ${anoNascimento}`);
};
//DOM: Document object Model 

/*COMANDOS DOM PRINCIPAIS
document.getElementById('id'); - pega o elemento pelo id
document.querySelector('.class'); - pega primeiro com classe
document.querySelectorAll('tag'); - pega todos os elementos
element.innerHTML = 'text'; - mudança de conteúdo HTML
element.onclick = function(){} - adiciona clique*/ 

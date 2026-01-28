/*Crie um site que receba o nome do usuário e mostre
"Olá, [nomedousuario]! Bem-vindo ao meu site."*/


let nome = prompt("Digite seu nome:");

if (nome && nome.trim() !== ""){
    document.writeln(`Olá, ${nome}! Bem-vindo ao meu site`);
} else {
    document.writeln(`Olá, visitante! Bem-vindo ao meu site.`); 
}



/*if condicao{

} else {

}*/
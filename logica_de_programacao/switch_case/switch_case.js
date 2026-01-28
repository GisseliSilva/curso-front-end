//Verificar dia da semana 

//Verifica dia da semana
let dia = prompt("Digite o dia da semana: ").toLowerCase().trim();
let diadaSemana;
switch (dia){
    case "segunda":
        diadaSemana = "Começo da semana";
        break;

        case "sexta":
            diadaSemana = "Fim de semana chegando!";
            break;

        case "sábado":
        case "domingo":
            diadaSemana = "Dia de descanso!";
            break;

        default:
            diadaSemana = "Dia normal de trabalho";
}

document.writeln(`
    <h1> Hoje é ${dia} </h1>
    <h2> ${diadaSemana}</h2>
    <p> <button onclick="location.reload()">Novo dia</button></p>
    `);



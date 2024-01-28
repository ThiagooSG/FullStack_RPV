console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

function selecionaMes(numero) {
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    switch (true) {
        case (numero >= 1 && numero <= 12):
            console.log(`\n${meses[numero - 1]}\n`);
            break;
        default:
            console.log("\nNúmero inválido. Por favor, insira um número de 1 a 12.\n");
    }
}

let numero = Number(prompt(`Digite um número para selecionar o mês correspondente: `));
selecionaMes(numero);



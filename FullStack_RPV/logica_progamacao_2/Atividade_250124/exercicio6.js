console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

function calcularTaxa(tipo, qtNascimentos, obitos, populacao) {
    let taxa;
    let tipoCalculo;

    switch(tipo) {
        case 'N':
            taxa = (qtNascimentos * 1000) / populacao;
            tipoCalculo = 'natalidade';
            break;
        case 'M':
            taxa = (obitos * 1000) / populacao;
            tipoCalculo = 'mortalidade';
            break;
        default:
            console.log('Tipo inválido. Use "N" para natalidade ou "M" para mortalidade.');
            return;
    }

    console.log(`A taxa de ${tipoCalculo} é ${Math.round(taxa)} por mil habitantes.`);
}

console.log("Calculo índice de natalidade e mortalidade:");

let tipo = prompt(`O que deseja calcular? Digite "N" para natalidade ou "M" para mortalidade: `).toUpperCase();
let qtNascimentos, obitos, populacao;

switch(tipo) {
    case "N":
        qtNascimentos = Number(prompt(`Digite a quantidade de nascimentos: `));
        populacao = Number(prompt(`Agora digite a quantidade de habitantes: `));
        calcularTaxa(tipo, qtNascimentos, obitos, populacao);
        break;
    case "M":
        obitos = Number(prompt(`Digite a quantidade de obitos: `));
        populacao = Number(prompt(`Agora digite a quantidade de habitantes: `));
        calcularTaxa(tipo, qtNascimentos, obitos, populacao);
        break;
    default:
        calcularTaxa(tipo);
}

console.log("========================================================")

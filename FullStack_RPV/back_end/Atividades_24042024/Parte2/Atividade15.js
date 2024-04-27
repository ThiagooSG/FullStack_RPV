/*
Crie um programa para controlar os saques de um caixa eletrônico que deve possuir algum mecanismo para decidir o número de notas de cada valor que deve ser disponibilizado para o cliente que realizou o saque.
– O caixa eletrônico trabalhará com notas de R$ 100,00, R$ 50,00, R$ 20,00, R$ 10,00, R$ 5,00, R$ 2,00 e R$ 1,00. 
Não serão aceitos valores com casas decimais, caso o usuário informe uma valor com casa decimais o sistema deverá informar que o valor solicitado para o saque é inválido, e pedir que o usuário informe um novo valor.
– Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor fossem distribuídas em número mínimo possível. Por exemplo, se a quantia solicitada fosse R$ 188,00, o programa deveria indicar uma nota de R$ 100,00, um nota de R$
50,00, uma nota de R$ 20,00, uma nota de R$ 10,00, uma nota de R$ 5,00, um nota de R$ 2,00 e uma nota de R$ 1,00.
– Com base nessas informações, crie um programa que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o critério da distribuição ótima.
*/

const prompt = require('prompt-sync')();

function calculoNotas(valor) {

    if (valor % 1 !== 0) {
        console.log("Valor inválido. Informe um valor inteiro.");
        return;
    }

    const notasDisponiveis = [100, 50, 20, 10, 5, 2, 1];
    const contadorNotas = {};

    for (const notas of notasDisponiveis) {
        if (valor >= notas) {
            const contador = Math.floor(valor / notas);
            contadorNotas[notas] = contador;
            valor -= contador * notas;
        }
    }

    console.log("Distribuição ótima das notas:");
    for (const notas in contadorNotas) {
        console.log(`R$ ${notas}: ${contadorNotas[notas]} nota(s)`);
    }
}

const valorSaque = parseInt(prompt("Digite a quantia solicitada (sem casas decimais): "));
calculoNotas(valorSaque);
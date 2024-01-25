console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();
let precoAVista = Number(prompt("Digite o preço a vista do produto: "));
let parcelas = Number(prompt("Digite a quantidade de parcela até 5x: "))

function calcularPrecoParcelado(precoAVista, parcelas) {
    let precoTotal;
    let valorPrestacao;

    if (parcelas === 3) {
        precoTotal = precoAVista * 1.10; // Acréscimo de 10%
    } else if (parcelas === 5) {
        precoTotal = precoAVista * 1.20; // Acréscimo de 20%
    } else {
        return "Número de parcelas inválido. Deve ser 3 ou 5.";
    }

    valorPrestacao = precoTotal / parcelas;

    return {
        precoTotal: precoTotal.toFixed(2),
        valorPrestacao: valorPrestacao.toFixed(2)
    };
}

console.log(calcularPrecoParcelado(precoAVista, parcelas)); 
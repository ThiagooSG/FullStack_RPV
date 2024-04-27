/*
Crie um programa que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de
pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. 
Código – Condição de Pagamento:
1 – À vista em dinheiro ou cheque, recebe 10% de desconto
2 – À vista no cartão de crédito, recebe 15% de desconto
3 – Em duas vezes, preço normal de etiqueta sem juros
4 – Em duas vezes, preço normal de etiqueta mais juros de 10% 
*/

const prompt = require('prompt-sync')();

const precoEtiqueta = Number(prompt("Digite o preço normal de etiqueta: "));
const condicaoPagamento = Number(prompt(`Escolha a condição de pagamento:
    1 - À vista em dinheiro ou cheque, recebe 10% de desconto
    2 - À vista no cartão de crédito, recebe 15% de desconto 
    3 - Em duas vezes, preço normal de etiqueta sem juros
    4 - Em duas vezes, preço normal de etiqueta mais juros de 10% 
    = `));
let valorPago;
switch (condicaoPagamento) {
    case 1:
        valorPago = precoEtiqueta * 0.9; // 10% de desconto
        break;
    case 2:
        valorPago = precoEtiqueta * 0.85; // 15% de desconto
        break;
    case 3:
        valorPago = precoEtiqueta; // Preço normal sem juros
        break;
    case 4:
        valorPago = precoEtiqueta * 1.1; // Preço normal com 10% de juros
        break;
    default:
        console.log("Condição de pagamento inválida.");
        break;
}

if (valorPago) {
    console.log(`Valor a ser pago: R$ ${valorPago.toFixed(2)}`);
}
/*
Crie um programa que leia o valor de um boleto que será
pago com atraso, a quantidade de dias em atraso, calcule e
mostre o seu novo valor com uma taxa de 1,25% ao dia.
*/

let valorBoleto = 450.00;
let diasAtraso = 10;

valorBoletoAtualizado = valorBoleto + (((valorBoleto * 0.0125) * diasAtraso)); 

console.log(`
Valor original é: R$ ${valorBoleto.toFixed(2)}
O valor do boleto atualizado a ser pago com 
10 dias de atraso com uma multa de 1.25% ao dia
é: R$ ${valorBoletoAtualizado.toFixed(2)} reais.
`);
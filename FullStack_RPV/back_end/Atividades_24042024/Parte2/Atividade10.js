/*
Faça um programa que leia a largura e o comprimento de um terreno retangular, calculando e mostrando a sua área em m2 (largura x comprimento). O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m2 = TERRENO POPULAR
- Entre 100m2 e 500m2 = TERRENO MASTER
- Acima de 500m2 = TERRENO VIP 
*/

const prompt = require('prompt-sync')();

let largura = Number(prompt("\nDigite a largura do terreno (em metros): "));
let comprimento = Number(prompt("Digite o comprimento do terreno (em metros): "));

let area = largura * comprimento;

console.log("A área do terreno é de " + area + " m².");

if (area < 100) {
    console.log("\nClassificação: TERRENO POPULAR\n");
} else if (area >= 100 && area <= 500) {
    console.log("\nClassificação: TERRENO MASTER\n");
} else {
    console.log("\nClassificação: TERRENO VIP\n");
}

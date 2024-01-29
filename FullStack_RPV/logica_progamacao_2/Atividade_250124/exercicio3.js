console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let pesoIdeal, peso, opcao, altura, pesoIdealAjustado;

console.log('Calculo do "Peso Ideal"');

peso = Number(prompt("Primeiramente digite o seu peso: "));
altura = Number(prompt("Agora informe sua altura em centimetros: "))

opcao = prompt('Agora escolha "M" para Masculino ou "F" para Feminino: ').toUpperCase();
switch(opcao) {
    case 'M':
        pesoIdeal = 52 + (0.75 * (altura - 152.4));
        pesoIdealAjustado = (peso - pesoIdeal) * 0.25 + pesoIdeal;
        console.log(`O peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
        console.log(`O seu peso ideal ajustado é: ${pesoIdealAjustado.toFixed(2)} kg`)
        break
    case 'F':
        pesoIdeal = 49 + (0.67 * (altura - 152.4));
        pesoIdealAjustado = (peso - pesoIdeal) * 0.25 + pesoIdeal;
        console.log(`O peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
        console.log(`O seu peso ideal ajustado é: ${pesoIdealAjustado.toFixed(2)} kg`)
        break
    default :
        console.log("Escolha inválida, refaça o processo!")
}
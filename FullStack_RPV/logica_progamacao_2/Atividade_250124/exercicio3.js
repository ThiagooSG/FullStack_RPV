console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let pesoIdeal;

console.log('Calculo do "Peso Ideal"');

let peso = Number(prompt("Primeiramente digite o seu peso: "));

let opcao = prompt('Agora escolha "M" para Masculino ou "F" para Feminino: ').toUpperCase();
switch(opcao) {
    case 'M':
        pesoIdeal = (peso - 100) * 0.9;
        console.log(`O peso ideal é: ${pesoIdeal}`);
        break
    case 'F':
        pesoIdeal = (peso - 100) * 0.85;
        console.log(`O peso ideal é: ${pesoIdeal}`);
        break
    default :
        console.log("Escolha inválida, refaça o processo!")
}
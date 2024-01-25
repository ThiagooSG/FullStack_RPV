console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let idade = prompt("Qual sua idade: ");
if(idade > 18) {
    console.log(`Com a idade de ${idade} anos, você é maior de idade!`)
} else {
    console.log(`Com a idade de ${idade} anos, você é menor de idade!`)
}
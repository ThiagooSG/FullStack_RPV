console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let sexo = prompt("Digite o seu sexo, sendo F para feminino e M para masculino: "); 

if (sexo.toUpperCase() == "F") {
    console.log("O sexo da pessoa é Feminino.");
} else if (sexo.toUpperCase() == "M") {
    console.log("O sexo da pessoa é Masculino.");
} else {
    console.log("Entrada inválida. Por favor, insira 'F' para Feminino ou 'M' para Masculino.");
}

console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let nomeFuncionario = prompt("Digite o nome do funcionário: ");
let salarioFuncionario = Number(prompt("Digite o salário do funcionário: "));
salarioNovo = salarioFuncionario * 1.10
console.log(`${nomeFuncionario}, o seu novo salário é R$ ${salarioNovo} reais.`);
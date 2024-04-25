//1) Crie um programa que exiba no console uma mensagem digitada pelo usuário.

const promptSync = require('prompt-sync');
const prompt = promptSync();

mensagem = prompt("Digite uma mensagem: ");
console.log(`Mensagem digitada: ${mensagem}`);
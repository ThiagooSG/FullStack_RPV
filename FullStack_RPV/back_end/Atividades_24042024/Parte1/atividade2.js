//Crie um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas para ela.

const promptSync = require('prompt-sync');
const prompt = promptSync();

nome = prompt("Por favor, digite o seu nome: ");
console.log(`Olá ${nome}, seja bem vindo ao meu ambiente!`);
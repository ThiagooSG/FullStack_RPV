/*Crie um programa que leia os dados de um aluno: matrícula, 
nome, sobrenome, CPF, sexo, data de nascimento, endereço e 
telefone e exiba no console.*/

const promptSync = require('prompt-sync');
const prompt = promptSync();

let aluno = {
    matricula: "",
    nome: "",
    sobrenome: "",
    CPF: "",
    sexo: "",
    dataNascimento: "",
    endereco: "",
    telefone: ""
};

aluno.matricula = prompt("Digite o sua matrícula: ");
aluno.nome = prompt("Digite o seu nome: ");
aluno.sobrenome = prompt("Digite o seu sobrenome: ");
aluno.cpf = prompt("Digite o seu CPF: ");
aluno.sexo = prompt("Digite o seu sexo: ");
aluno.dataNascimento = prompt("Digite sua data de nascimento: ");
aluno.endereco = prompt("Digite o seu endereço (rua - numero, bairro, cidade, estado e CEP): ");
aluno.telefone = prompt("Digite o seu telefone: ");

console.log(`
    Dados aluno -
       Nome: ${aluno.nome} ${aluno.sobrenome}
       Matricula: ${aluno.matricula}
       CPF: ${aluno.cpf}
       Sexo: ${aluno.sexo}
       Data de Nascimento: ${aluno.dataNascimento}
       Endereço: ${aluno.endereco}
       Telefone: ${aluno.telefone}
`);

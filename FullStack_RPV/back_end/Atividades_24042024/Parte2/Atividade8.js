/*
Crie um programa que leia os dados de um aluno: nome, matrícula, disciplina, nota. Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”, se a nota do aluno for menor que 60 porém maior ou igual a 50 exiba no console “Em recuperação” e se a nota do aluno for menor que 50 exiba no console “Reprovado”. 
*/

const prompt = require('prompt-sync')();

const nome = prompt("Digite o nome do aluno: ");
const matricula = prompt("Digite a matrícula do aluno: ");
const disciplina = prompt("Digite a disciplina do aluno: ");
const nota = Number(prompt("Digite a nota do aluno: "));

if (nota >= 60) {
    console.log(`Aluno ${nome} de matrícula ${matricula} na disciplina de ${disciplina} está:\nAprovado`);
} else if (50 <= nota && nota < 60) {
    console.log(`Aluno ${nome} de matrícula ${matricula} na disciplina de ${disciplina} está:\nDe recuperação`);
} else {
    console.log(`Aluno ${nome} de matrícula ${matricula} na disciplina de ${disciplina} está:\nReprovado`);
}

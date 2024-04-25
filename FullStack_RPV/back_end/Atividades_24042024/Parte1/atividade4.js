/*
Crie um programa que leia uma disciplina, um aluno e as
quatro notas desse aluno naquela disciplina. Ao final, mostre
na tela a média do aluno na disciplina.
*/

const promptSync = require('prompt-sync');
const prompt = promptSync();

let aluno = {
    disciplina: "",
    nota1: "",
    nota2: "",
    nota3: "",
    nota4: ""
};

aluno.nomeAluno = prompt("Digite o seu nome: ");
aluno.disciplina = prompt("Digite a disciplina: ");
aluno.nota1 = Number(prompt("Digita a primeira nota: "));
aluno.nota2 = Number(prompt("Digita a segunda nota: "));
aluno.nota3 = Number(prompt("Digita a terceira nota: "));
aluno.nota4 = Number(prompt("Digita a quarta nota: "));

media = (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4;

console.log(`
    Aluno -
        Nome: ${aluno.nomeAluno}
        Disciplina: ${aluno.disciplina}
        Média final: ${media}
`);
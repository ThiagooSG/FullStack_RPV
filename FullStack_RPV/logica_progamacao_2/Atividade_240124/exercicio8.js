console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

function calcularMedia(nome, nota1, nota2, nota3) {
    var media = (nota1 + nota2 + nota3) / 3;
    var status = media >= 8 ? 'Aprovado' : 'Reprovado';
    console.log(`Nome do aluno: ${nome}`);
    console.log(`Média: ${media}`);
    console.log(`Status: ${status}`);
}
calcularMedia(
    nome = prompt("Digite o nome do aluno: "),
    nota1 = Number(prompt("Digite a primeira nota: ")),
    nota2 = Number(prompt("Digite a segunda nota: ")),
    nota3 = Number(prompt("Digite a terceira nota: "))
);

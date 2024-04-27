/*
Crie um programa que leia a idade de 10 pessoas, exibindo ao final do programa:
- Qual é a média de idade do grupo
- Quantas pessoas tem mais de 20 anos
- Quantas pessoas tem menos de 10 anos
- Qual foi a maior idade lida
- Qual foi a menor idade lida
*/

const prompt = require('prompt-sync')();

let somaIdades = 0;
let maiorIdade = Number.NEGATIVE_INFINITY;
let menorIdade = Number.POSITIVE_INFINITY;
let pessoasMaisDe20 = 0;
let pessoasMenosDe10 = 0;

for (let i = 1; i <= 10; i++) {
    const idade = Number(prompt(`Digite a idade da pessoa ${i}: `));
    somaIdades += idade;

    if (idade > maiorIdade) {
        maiorIdade = idade;
    }
    if (idade < menorIdade) {
        menorIdade = idade;
    }

    if (idade > 20) {
        pessoasMaisDe20++;
    }
    if (idade < 10) {
        pessoasMenosDe10++;
    }
}

const mediaIdade = somaIdades / 10;

console.log(`\nMédia de idade do grupo: ${mediaIdade.toFixed(2)} anos`);
console.log(`Pessoas com mais de 20 anos: ${pessoasMaisDe20}`);
console.log(`Pessoas com menos de 10 anos: ${pessoasMenosDe10}`);
console.log(`Maior idade lida: ${maiorIdade} anos`);
console.log(`Menor idade lida: ${menorIdade} anos`);
/*
Crie um programa que leia o salário de um funcionário,
calcule e mostre o seu novo salário, com 27,50% de aumento.
*/

let funcionario = {
    nome: "João",
    salario: 3500.00
};
let novoSalario = funcionario.salario + (funcionario.salario * 0.275);
console.log(`
    Funcionario ${funcionario.nome}
    Salário ${funcionario.salario.toFixed(2)}
    Parabéns - Você recebeu um aumento de 27.50% no seu salário\n
    Salario atualizado é: R$ ${novoSalario.toFixed(2)} reais.
`);
/* 
Crie um programa que leia o nome e o salário de um
funcionário, mostrando no final uma mensagem.
 */

let funcionario = {
    nome: "Roberto",
    salario: "R$ 4500.00"
};

console.log(`
    Funcionario ${funcionario.nome}
    Salário ${funcionario.salario}
    Parabéns - Você recebeu uma bonificação de mais R$ 1000.00 reais no salário\n
    Salario atualizado de R$ 5500.00 reais.
`);
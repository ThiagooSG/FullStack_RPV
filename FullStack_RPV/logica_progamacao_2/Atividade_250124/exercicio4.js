console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

const menu = `
Tabela de seleção:
1 para Cliente Comum
2 para Funcionario
3 para Cliente Vip
`;

console.log("Finalizando sua venda.");
let vlCompra = Number(prompt("Digite o valor total a ser pago: "));

console.log(menu);

while(true) {
    let calculo;
    let opcao = prompt("Escolha o cliente conforme a tabela: ");
    switch(opcao) {
        case '1':
            console.log(`O valor a ser pago é de R$${vlCompra.toFixed(2)}`);
            break;
        case '2':
            calculo = vlCompra * 0.90; // Aplica desconto de 10%
            console.log(`O valor ser pago com 10% de desconto é de R$${calculo.toFixed(2)}`);
            break;
        case '3':
            calculo = vlCompra * 0.95; // Aplica desconto de 5%
            console.log(`O valor ser pago com 5% de desconto é R$${calculo.toFixed(2)}`);
            break;
        default:
            console.clear();
            console.log("Escolha inválida!")
            console.log(menu);
            continue;
    }
    console.log("Obrigado e volte sempre!");
    break;
}

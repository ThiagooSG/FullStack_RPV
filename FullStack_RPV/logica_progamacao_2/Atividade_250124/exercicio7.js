console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let vlProduto = Number(prompt(`Digite o valor do produto: `));
let formaPagamento = prompt(`Pagamento - Digite '1' à vista ou '2' à prazo: `)

switch(formaPagamento) {
    case '1':
        let vlFinal = vlProduto * 0.90; // Aplica desconto de 10%
        console.log(`Pagamento à vista com 10% de desconto é de R$${vlFinal.toFixed(2)} reais`);
        break
    case '2':
        console.log(`Pagamento à prazo sem desconto é de R$${vlProduto.toFixed(2)} reais`);
        break
    default :
        console.log(`Escolha inválida, refaça o processo!`)
}
let total_divida = 1400;
function atualizar_divida(valor_recebido) {
    total_divida -= valor_recebido;
    return total_divida;
}
// Função para atualizar a dívida e mostrar o valor pago
function atualizar_divida(valor_recebido){
    total_divida -= valor_recebido;
    console.log(`Valor pago: R$${valor_recebido}`);
    console.log(`Total devido: R$${total_divida}`);
    return total_divida;
  }
  

for (var i = 0; i < 24; i++) {
    atualizar_divida(70);
}



console.log(total_divida);


console.logo("Atividade 24")
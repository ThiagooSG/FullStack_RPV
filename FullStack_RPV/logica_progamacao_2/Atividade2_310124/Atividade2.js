const vl_m2 = 3000;

function calcularImovel(metragem, quartos) {
    let preco;
    switch(quartos) {
        case 1:
            preco = vl_m2 * metragem * 1;
            break;
        case 2:
            preco = vl_m2 * metragem * 1.2;
            break;
        case 3:
            preco = vl_m2 * metragem * 1.5;
            break;
        default:
            console.log('Valor invalido, repita o processo!')
            return;
    }
    return preco;
}
let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);


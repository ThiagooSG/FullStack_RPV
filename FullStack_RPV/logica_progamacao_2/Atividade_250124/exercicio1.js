const promptSync = require('prompt-sync');
const prompt = promptSync();

const menu = `=================================
-PARADISE HOTEL - MENU DE OPÇÕES-
=================================
  1 - Fazer Check-in
  2 - Chamar serviço de quarto
  3 - Fazer pedido
  4 - Fazer Check-out
  5 - Sair
=================================`;

function inicializar() {
    console.clear();
    console.log("Bem Vindo!");
    let nomeHospede = prompt("Digite seu nome para inicializar: ");
    console.clear();
    console.log("inicializando.");
    setTimeout(() => console.log("inicializando.."), 1000);
    setTimeout(() => console.log("inicializando..."), 1200);
    return nomeHospede;
}

function exibirMenu(nomeHospede) {
    setTimeout(() => {
        console.clear();
        console.log(`Olá ${nomeHospede}, escolha uma das opções no menu: `);
        console.log(menu);
        let opcao = prompt(`Escolha uma opção: `);
        processarOpcao(opcao, nomeHospede);
    }, 1700);
}

function processarOpcao(opcao, nomeHospede) {
    switch(opcao) {
        case '1':
            console.log(`${nomeHospede}, seu Check-in foi realizado com sucesso.`);
            break;
        case '2':
            console.log(`${nomeHospede}, serviço de quarto selecionado, em breve o Sr(a) será atendido.`);
            break;
        case '3':
            console.log(`${nomeHospede}, pedido selecionado, em breve o Sr(a) receberá o menu.`);
            break;
        case '4':
            console.log(`${nomeHospede}, Check-out realizado com sucesso`);
            console.log(`Obrigado por usar nossos serviços!`);
            break;
        case '5':
            console.log(`Finalizando menu de opções!`);
            break;
        default:
            console.log(`Opção inválida, escolha um número de 1 a 5 no menu.`);
            opcao = prompt(`Escolha uma opção: `);
            processarOpcao(opcao, nomeHospede);
    }
}

let nomeHospede = inicializar();
exibirMenu(nomeHospede);

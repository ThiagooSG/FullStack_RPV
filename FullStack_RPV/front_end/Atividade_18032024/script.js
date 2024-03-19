function clique1() {
    var tamanhoFonte = window.getComputedStyle(conteudo).fontSize;
    var novoTamanho = parseInt(tamanhoFonte) + 2 + "px";
    conteudo.style.fontSize = novoTamanho;
}

function clique2() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var novaCor = 'rgb('+ r +', '+ g +','+ b +')';
    conteudo.style.color = novaCor;
}

function clique3() {
    var novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Este é um novo parágrafo.";
    conteudo.appendChild(novoParagrafo);
}

function atualizarPagina() {
    // Recarrega a página atual
    location.reload();
}

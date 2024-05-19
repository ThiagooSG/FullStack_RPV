function calcular() {
    const largura = parseFloat(document.getElementById('largura').value);
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const area = largura * comprimento;

    let classificacao;
    if (area < 100) {
        classificacao = "TERRENO POPULAR";
    } else if (area <= 500) {
        classificacao = "TERRENO MASTER";
    } else {
        classificacao = "TERRENO VIP";
    }

    const resultado = `Área: ${area.toFixed(2)} m²<br>Classificação: ${classificacao}`;
    document.getElementById('resultado').innerHTML = resultado;
}

window.onload = function () {
    const btn = document.querySelector("#enviar");

    function calculo(valorFatorial) {
        if (Number(valorFatorial) < 0) {
            alert("Não existe o fatorial de um número negativo");
        } else {
            let resultado = 1;
            let sequencia = '';
            for (let i = valorFatorial; i > 0; i--) {
                resultado *= i;
                sequencia += (i == 1) ? `${i}` : `${i} X `;
            }
            return `${valorFatorial}! = ${sequencia} = ${resultado}`;
        }
    }

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let valorFatorial = document.querySelector("#fat").value;
        document.querySelector("#dadosCadastrados").innerText = `Fatorial de ${calculo(Number(valorFatorial))}`;
        document.querySelector("#dadosCadastrados").style.display = "block";
    });
}

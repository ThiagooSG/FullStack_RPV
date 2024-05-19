function dadosAluno() {
    const btn = document.querySelector("#enviar");

    function cadastrar() {
        const dadosUsuario = {
            nome: document.querySelector("#nome").value,
            matricula: document.querySelector("#matricula").value,
            disciplina: document.querySelector("#disciplina").value,
            nota: document.querySelector("#nota").value,
        };

        exibirDadosUsuario(dadosUsuario);
    }

    function exibirDadosUsuario(dadosUsuario) {
        document.querySelector("#dadosCadastrados").style.display = "block";
        document.querySelector("#dadosCadastrados").innerText = `Nome: ${dadosUsuario.nome}\nMatrícula: ${dadosUsuario.matricula}\nDisciplina: ${dadosUsuario.disciplina}\nNota: ${dadosUsuario.nota}\nSituação: ${verificaNota(dadosUsuario.nota)}`;
    }

    function verificaNota(nota) {
        let situacao;
        if (nota >= 60) {
            situacao = `Aprovado`;
        } else if (nota < 60 && nota >= 50) {
            situacao = `Em Recuperação`;
        } else {
            situacao = `Reprovado`;
        }
        return situacao;
    }

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        cadastrar();
    });
}

dadosAluno();

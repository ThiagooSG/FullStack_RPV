function dadosUsuario() {
  const btn = document.querySelector("#enviar");
  const mensagemSucesso = "Usuário Cadastrado!";

  function cadastrar() {
      const cpf = document.querySelector("#cpf").value;
      if (!validarCPF(cpf)) {
          alert("CPF inválido");
          return;
      }

      const dadosUsuario = {
          nome: document.querySelector("#nome").value,
          sobrenome: document.querySelector("#sobrenome").value,
          cpf: cpf,
          sexo: document.querySelector("#sexo").value,
          dataNascimento: document.querySelector("#dataNascimento").value,
          endereco: document.querySelector("#endereco").value,
          telefone: formatarTelefone(document.querySelector("#telefone").value),
      };

      exibirDadosUsuario(dadosUsuario);
  }

  function formatarTelefone(telefone) {
      const telefoneLimpo = telefone.replace(/\D/g, "");
      return `(${telefoneLimpo.slice(0, 2)}) ${telefoneLimpo.slice(2, 3)} ${telefoneLimpo.slice(3)}`;
  }
 
  function exibirDadosUsuario(dados) {
      document.querySelector("#dadosCadastrados").style.display = "block";
      document.querySelector("#dadosCadastrados").innerText = `Nome: ${dados.nome}\nSobrenome: ${dados.sobrenome}\nCPF: ${dados.cpf}\nSexo: ${dados.sexo}\nData de Nascimento: ${dados.dataNascimento}\nEndereço: ${dados.endereco}\nTelefone: ${dados.telefone}`;
  }

  function validarCPF(cpf) {
      cpf = cpf.replace(/[^\d]+/g,'');
      if(cpf == '') return false;
      if (cpf.length != 11 || 
          cpf == "00000000000" || 
          cpf == "11111111111" || 
          cpf == "22222222222" || 
          cpf == "33333333333" || 
          cpf == "44444444444" || 
          cpf == "55555555555" || 
          cpf == "66666666666" || 
          cpf == "77777777777" || 
          cpf == "88888888888" || 
          cpf == "99999999999")
              return false;
      add = 0;
      for (i=0; i < 9; i ++)
          add += parseInt(cpf.charAt(i)) * (10 - i);
      rev = 11 - (add % 11);
      if (rev == 10 || rev == 11)
          rev = 0;
      if (rev != parseInt(cpf.charAt(9)))
          return false;
      add = 0;
      for (i = 0; i < 10; i ++)
          add += parseInt(cpf.charAt(i)) * (11 - i);
      rev = 11 - (add % 11);
      if (rev == 10 || rev == 11)
          rev = 0;
      if (rev != parseInt(cpf.charAt(10)))
          return false;
      return true;
  }

  btn.addEventListener("click", cadastrar);

  btn.addEventListener("click", function (e) {
      e.preventDefault();
  });

  document.querySelector("#telefone").addEventListener("input", function () {
      this.value = formatarTelefone(this.value);
  });
}

dadosUsuario();

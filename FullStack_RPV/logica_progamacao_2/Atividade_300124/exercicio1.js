console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let biblioteca = {
    livros: [
        { id: 1, titulo: 'O Conde de Monte Cristo', autor: 'Alexandre Dumas', disponivel: true },
        { id: 2, titulo: 'A Máquina do Tempo', autor: 'H.G. Wells', disponivel: false },
        { id: 3, titulo: 'Operação Cavalo De Troia - Jerusalem', autor: 'J.J. Benítez', disponivel: true },
        { id: 4, titulo: 'Fortaleza Digital', autor: 'Dan Brown', disponivel: true }
        // Livros cadastrados
    ],
    alunos: [
        { id: 1, nome: 'thiago' },
        { id: 2, nome: 'joão' },
        { id: 3, nome: 'heitor' },
        { id: 4, nome: 'aline' }
        // Alunos cadastrados
    ],

    mostrarLivros: function () {
        this.livros.forEach(livro => {
          console.log(`${livro.id}: ${livro.titulo} por ${livro.autor} - ${livro.disponivel ? 'Disponível' : 'Indisponível'}`);
        });
      },
    
      perguntarAluno: function () {
        let nome = prompt('Digite seu nome: ');
        let aluno = this.alunos.find(aluno => aluno.nome === nome);
        if (aluno) {
          console.log(`\nBem-vindo, ${nome}! Aqui estão os livros disponíveis:\n`);
          this.mostrarLivros();
          this.perguntarLivro(aluno);
        } else {
          console.log('Aluno não encontrado');
        }
      },
    
      perguntarLivro: function (aluno) {
        let id = prompt('Digite o ID do livro que você deseja pegar emprestado: ');
        let livro = this.livros.find(livro => livro.id === Number(id));
        if (livro && livro.disponivel) {
          this.emprestarLivro(aluno, Number(id));
        } else {
          console.log('Livro não disponível. Por favor, escolha outro livro.');
          this.perguntarLivro(aluno);
        }
      },
    
      emprestarLivro: function (aluno, livroId) {
        let livro = this.livros.find(livro => livro.id === livroId);
        if (livro && livro.disponivel) {
          livro.disponivel = false;
          console.log(`Livro ${livro.titulo} emprestado para o aluno ${aluno.nome}`);
        } else {
          console.log('Livro não disponível');
        }
      }
    };
    
    biblioteca.perguntarAluno();
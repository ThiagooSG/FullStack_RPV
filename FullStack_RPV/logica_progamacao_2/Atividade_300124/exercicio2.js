let escola = {
    nome: "Escola Modelo",
    alunos: [
      { nome: "Artur", idade: 12, serie: "7º ano" },
      { nome: "Lisa", idade: 13, serie: "8º ano" },
      // outros alunos
    ],
    professores: [
      { nome: "Professor Carlos", disciplina: "Matemática" },
      { nome: "Professora Angelica", disciplina: "Português" },
      // outros professores
    ],
    cursos: [
      { nome: "Curso de Verão em Ciências", professor: "Professor Geraldo" },
      { nome: "Oficina de Artes", professor: "Professora Alicia" },
      // outros cursos
    ],
    aulas: [
      { curso: "Curso de Verão em Ciências", aluno: "Artur", data: "01/02/2024" },
      { curso: "Oficina de Artes", aluno: "Lisa", data: "03/02/2024" },
      // outras aulas
    ]
  };
  console.log(escola);
var frutas = new Array("banana", "laranja", "limao");
frutas.shift(); // O método shift remove o elemento de índice zero, diminui em 1 os indices dos demais/*/ valores e retorna o valor removido.
    frutas.splice(1, 1, "uva");
for (var i = 0; i < frutas.length; i++)
    document.write(frutas[i] + " | ");


console.log("Atividade 27")
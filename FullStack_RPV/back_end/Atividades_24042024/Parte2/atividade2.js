/* 
Crie um programa que gera e escreve os números pares entre
0 e 50. No início da 30ª iteração o sistema deve pular o laço
de repetição.
*/

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    if (i === 30) {
        continue;
    }
}
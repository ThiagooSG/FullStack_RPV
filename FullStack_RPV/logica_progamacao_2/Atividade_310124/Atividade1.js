console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

console.log('Tabuada');
let num;
do {
    num = Number(prompt("Digite um número entre 1 e 10: "));
} while (isNaN(num) || num <= 0 || num > 10)

console.log(`Tabuada do ${num}: `);
for(let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

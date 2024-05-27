// EX:. 1
/* const nome = 'Weslley';
const sobreNome = 'de Jesus';
const idade = 25;
const peso = 105;
const altura = 1.85;
let imc;
let anoNascimento;

imc = peso / (altura * altura)
anoNascimento = 2024 - idade

console.log(`${nome} ${sobreNome} nasceu em ${anoNascimento} tem ${idade}
anos, pesa ${peso}kg e tem ${altura} de altura, seu IMC é ${imc}
`) */

// EX:. 2

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)
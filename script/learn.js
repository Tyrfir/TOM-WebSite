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

/*let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC) */

//Ex: 3

let alfabeto = "abcdefghijklmnopqrstuvxzwy"
let trocando = 'Dias de luta e dias de glória'

console.log(alfabeto[24]) //imprime a letra respectiva do indice da variável

console.log(alfabeto.indexOf('w')) // mostra o local da letra W

console.log(alfabeto.replace(/w/g, ' 24 ')) // troca uma letra por algum caracter

console.log(trocando.replace(/ /g, '-')) // troca uma letra por algum caracter

console.log(trocando.length) //Mostra qantos caracters tem a string



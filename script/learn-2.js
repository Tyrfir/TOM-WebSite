const nome = prompt('Digite seu nome completo:');
const letraF = prompt('Deseja usar qual letra para o exercício?')

  document.body.innerHTML += `Seu primeiro nome é: ${nome}<br />`;
  document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
  document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
  document.body.innerHTML += `Qual o primeiro índice da letra ${letraF} no seu nome? ${nome.indexOf(letraF)} <br />`;
  document.body.innerHTML += `Qual o último índice da letra ${letraF} no seu nome? ${nome.lastIndexOf()} <br />`;
  document.body.innerHTML += `As últimas 3 letras do seu nome são: ______<br />`;
  document.body.innerHTML += `As palavras do seu nome são: ______ <br />`;
  document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`;
  document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;
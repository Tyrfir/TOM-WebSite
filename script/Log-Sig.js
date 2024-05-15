function myFunction()
{
    var nome = window.prompt("Digite seu nome!");
    alert("Ola " + nome)
}

function calcFerias(){
    var salario = Number(window.prompt("Qual seu salário?"))
    var QuantMes = window.confirm("Sua férias é de apenas 1 mês?")

    // calc férias salario + 1/3 salario
    var ferias = salario/3 + salario
    //var ferias2 = salario + ferias1

    if(QuantMes == true){
        alert("Voce receberá: " + ferias)
    }
    else{
        var diasFerias = Number.parseInt(window.prompt("Quantos dias você sairá de férias?"))
        var totalDiasFerias = salario/30 * diasFerias + salario/3

        alert("Então você receberá: " + totalDiasFerias.toString())
    }
} 
//Escreva um programa que leia o salário de um funcionário e aplique um aumento de acordo 
// com a seguinte regra: salários menores que R$1000 recebem 20% de aumento, entre R$1000 
// e R$2000 recebem 15%, e acima de R$2000 recebem 10%.
//

var salarioFuncionario = 1100
var aumento = 0



if (salarioFuncionario > 1000)
    {
    if(salarioFuncionario < 2001)
        {
        aumento = (salarioFuncionario * 0.15) + salarioFuncionario
    } 
    else
        {
        aumento = (salarioFuncionario * 0.10) + salarioFuncionario
        }
    }
else
    {
        aumento = (salarioFuncionario * 0.20) + salarioFuncionario
    }

console.log("O Salário é de:" + aumento)
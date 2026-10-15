// Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.

var num1 = 20
var num2 = 4

var operacao = "/"
var resultado = 0


if(operacao == "+"){
    resultado = num1 + num2
    console.log(resultado)
} else{
    if(operacao == "-")
    {
        resultado = num1 - num2
        console.log(resultado)
    } else
        if(operacao == "*")
    {
        resultado = num1 * num2
        console.log(resultado)
    } else
        if(operacao == "/")
    {    
        resultado = num1 / num2
        console.log(resultado)
    }       
}


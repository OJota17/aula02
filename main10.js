// Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida.

var dia = 15
var mes = 10
var ano = 2026

if (dia <= 31)
    console.log("O dia é válido")

if (dia <= 28) { //Fevereiro
    console.log("Dia válido")
} else {
    console.log("Dia inválido")
    if (mes <= 12) {
        console.log("O mes é válido")
    } else {
        console.log("O mes é invalido")
    } if (ano >= 0) {
        console.log("O ano é válido")
    } else {
        console.log("O ano é inválido")
    }
}

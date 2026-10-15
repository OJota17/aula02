// Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida.

var dia = 15
var mes = 10
var ano = 2026

if (mes == 2){
    if (dia >= 1 && dia <= 29){
        console.log("Data válida")
    } else {
        console.log("Data inválida")
    }
} else {
    if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
        if (dia >= 1 && dia <= 30){
            console.log("Data válida")
        } else {
            console.log("Data inválida")
        }
    } else {
        if (dia >= 1 && dia <= 31){
            console.log("Data válida")
        } else {
            console.log("Data inválida")
        }
    }
}
// Faça um programa que leia o nome de um aluno e suas três notas, calcule a média e informe se ele está aprovado (média maior ou igual a 7) ou reprovado.

var nomeAluno = "João"
var nota1 = 7
var nota2 = 5
var nota3 = 9

var media = (nota1 + nota2 + nota3) /3

if (media >= 7){
    console.log(nomeAluno + " está Aprovado :)")
} else {
    console.log(nomeAluno + " está Reprovado :(")
}
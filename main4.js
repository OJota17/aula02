//1. Crie um programa que leia três números e determine qual é o maior.

var num1 = 10
var num2 = 15
var num3 = 20

if (num1 > num2){
    if(num1 > num3){
        console.log(num1 + " é maior")
    } else{
        console.log(num3 + " é maior")
    }
}
else {
    if(num2 > num3){
    console.log(num2 + " é maior")
    } else {
        console.log(num3 + " é maior")
    }
}

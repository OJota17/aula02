// string = textos
// boolean = verdadeiro/falso
// float = numeros 'quebrados' com virgulas 
// int = numeros inteiros
// cntrl + ; (Comentario)

// Variaveis
var idadeUsuario = 16
// exibe  mensagem na tela
// o simbolo "+" quando usado com texto a função dele é "concatenar"
console.log("idade do usuario:" + idadeUsuario)

// = é o operador de atribuição
// == é o operador de comparação (igualdade)
// > é o operador (maior que)
// < é o operador (menor que)
// >= é o operador (maior ou igual que)
// <= é o operador (menor ou igual que)
console.log(idadeUsuario >= 18) 
// ao ter a comparação eu tenho o resultado em boolean

// () = agrupamento
// {} = bloco de código
// [] = array (chaves)

if(idadeUsuario >= 18){
    console.log("usuario pode dirigir")
}
else{
    console.log("usuario menor de idade e não pode dirigir =(")
}
Algoritmo "funcoes"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Rubem Oliota
// Descri��o   : fun��es recebem parametros e retornam valores
// Autor(a)    : Professor
// Data atual  : 04/06/2021
Var
   // Se��o de Declara��es das vari�veis
   numero1,numero2,calculo:real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

funcao soma (x,y: real): real
inicio
   retorne x + y
fimfuncao

escreval("Informe o 1� numero")
leia(numero1)

escreval("Informe o 2� numero")
leia(numero2)

calculo <- soma(numero1,numero2)
escreval("Resultado = ",calculo)

Fimalgoritmo
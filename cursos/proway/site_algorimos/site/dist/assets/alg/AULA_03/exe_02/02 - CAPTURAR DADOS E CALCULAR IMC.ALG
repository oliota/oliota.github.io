Algoritmo "02 - capturar dados e calcular IMC"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Rubem Oliota
// Descri��o   : Capturar nome, altura e peso informar o nome e o IMC
// Autor(a)    : Professor
// Data atual  : 04/06/2021
Var
// Se��o de Declara��es das vari�veis
nome: caractere
altura , peso , imc : real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...

escreval("Informe seu nome")
leia(nome)

escreval("Informe sua altura em cm")
leia(altura)

escreval("Informe seu peso em kg")
leia(peso)

imc <- peso /(altura * altura)

limpatela
escreval("ol� ",nome," seu IMC � ",imc)


Fimalgoritmo
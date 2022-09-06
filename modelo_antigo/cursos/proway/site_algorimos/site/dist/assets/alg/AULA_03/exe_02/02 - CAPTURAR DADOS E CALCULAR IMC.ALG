Algoritmo "02 - capturar dados e calcular IMC"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Rubem Oliota
// Descrição   : Capturar nome, altura e peso informar o nome e o IMC
// Autor(a)    : Professor
// Data atual  : 04/06/2021
Var
// Seção de Declarações das variáveis
nome: caractere
altura , peso , imc : real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...

escreval("Informe seu nome")
leia(nome)

escreval("Informe sua altura em cm")
leia(altura)

escreval("Informe seu peso em kg")
leia(peso)

imc <- peso /(altura * altura)

limpatela
escreval("olá ",nome," seu IMC é ",imc)


Fimalgoritmo
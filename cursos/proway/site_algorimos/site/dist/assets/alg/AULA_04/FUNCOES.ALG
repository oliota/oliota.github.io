Algoritmo "funcoes"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Rubem Oliota
// Descrição   : funções recebem parametros e retornam valores
// Autor(a)    : Professor
// Data atual  : 04/06/2021
Var
   // Seção de Declarações das variáveis
   numero1,numero2,calculo:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

funcao soma (x,y: real): real
inicio
   retorne x + y
fimfuncao

escreval("Informe o 1º numero")
leia(numero1)

escreval("Informe o 2º numero")
leia(numero2)

calculo <- soma(numero1,numero2)
escreval("Resultado = ",calculo)

Fimalgoritmo
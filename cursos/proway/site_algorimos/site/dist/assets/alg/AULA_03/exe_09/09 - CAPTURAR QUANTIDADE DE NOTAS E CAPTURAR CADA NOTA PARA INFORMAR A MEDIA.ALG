Algoritmo "09 - Capturar quantidade de notas e capturar cada nota para informar a media"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Rubem Oliota
// Descri��o   : capturar 3 notas e calcular mediaa
// Autor(a)    : Professor
// Data atual  : 04/06/2021
Var
   // Se��o de Declara��es das vari�veis
   quantidade,contador : inteiro
   nota,soma,media : real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   escreval("Desejas capturar quantas notas?")
   leia(quantidade)

   para contador de 1 ate quantidade fa�a
      limpatela
      escreval("Informe a ",contador,"� nota")
      leia(nota)
      soma <- soma + nota
   fimpara


   media <- soma / quantidade

   escreval("Media = ", media)







Fimalgoritmo
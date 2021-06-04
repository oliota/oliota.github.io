Algoritmo "09 - Capturar quantidade de notas e capturar cada nota para informar a media"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Rubem Oliota
// Descrição   : capturar 3 notas e calcular mediaa
// Autor(a)    : Professor
// Data atual  : 04/06/2021
Var
   // Seção de Declarações das variáveis
   quantidade,contador : inteiro
   nota,soma,media : real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   escreval("Desejas capturar quantas notas?")
   leia(quantidade)

   para contador de 1 ate quantidade faça
      limpatela
      escreval("Informe a ",contador,"ª nota")
      leia(nota)
      soma <- soma + nota
   fimpara


   media <- soma / quantidade

   escreval("Media = ", media)







Fimalgoritmo
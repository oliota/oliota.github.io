Algoritmo "procedimentos"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Rubem Oliota
// Descri��o   : n�o retoram valores apenas modularizam execu��es
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 04/06/2021
Var
   // Se��o de Declara��es das vari�veis


Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //--------------------------------------------
procedimento contar_ate_quantidade(n:inteiro)
var
   contador :inteiro
inicio
   para contador de 1 ate n fa�a
      escreval("contando ... ",contador)
   fimpara
fimprocedimento

   //--------------------------------------------
procedimento capturar_quantidade()
var
   numero :inteiro
inicio
   escreval("gostaria de contar at� quanto?")
   leia(numero)
   contar_ate_quantidade(numero)
fimprocedimento

   //--------------------------------------------

   capturar_quantidade()
   

   capturar_quantidade()

Fimalgoritmo
Algoritmo "procedimentos"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Rubem Oliota
// Descrição   : não retoram valores apenas modularizam execuções
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 04/06/2021
Var
   // Seção de Declarações das variáveis


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   //--------------------------------------------
procedimento contar_ate_quantidade(n:inteiro)
var
   contador :inteiro
inicio
   para contador de 1 ate n faça
      escreval("contando ... ",contador)
   fimpara
fimprocedimento

   //--------------------------------------------
procedimento capturar_quantidade()
var
   numero :inteiro
inicio
   escreval("gostaria de contar até quanto?")
   leia(numero)
   contar_ate_quantidade(numero)
fimprocedimento

   //--------------------------------------------

   capturar_quantidade()
   

   capturar_quantidade()

Fimalgoritmo
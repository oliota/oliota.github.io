Algoritmo "03 - capturar nome, idade e verificar se eh de maior"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Rubem Oliota
// Descri��o   : Capturar nome, idade e informar se � maior de idade ou n�o
// Autor(a)    : Professor
// Data atual  : 04/06/2021
Var
   // Se��o de Declara��es das vari�veis
   nome: caractere
   idade : inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   escreval("Informe seu nome")
   leia(nome)

   escreval("Informe sua idade")
   leia(idade)



   limpatela
   se idade>17 entao
      escreval(nome," � de maior")
   senao
      escreval(nome," � de menor")
   fimse


Fimalgoritmo
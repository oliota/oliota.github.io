Algoritmo "03 - capturar nome, idade e verificar se eh de maior"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Rubem Oliota
// Descrição   : Capturar nome, idade e informar se é maior de idade ou não
// Autor(a)    : Professor
// Data atual  : 04/06/2021
Var
   // Seção de Declarações das variáveis
   nome: caractere
   idade : inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   escreval("Informe seu nome")
   leia(nome)

   escreval("Informe sua idade")
   leia(idade)



   limpatela
   se idade>17 entao
      escreval(nome," é de maior")
   senao
      escreval(nome," é de menor")
   fimse


Fimalgoritmo
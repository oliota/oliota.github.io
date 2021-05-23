Algoritmo "calcular media"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Rubem Oliota
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/05/2021
Var
   // Seção de Declarações das variáveis
   primeira_nota : real
   segunda_nota : real
   terceira_nota : real

   media : real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   escreval("Informe a primeira nota")
   leia(primeira_nota)

   escreval("Informe a segunda nota")
   leia(segunda_nota)

   escreval("Informe a terceira nota")
   leia(terceira_nota)

   media <- (primeira_nota + segunda_nota + terceira_nota)/3

   escreval("Sua média é ",media)

   se media<7 entao
      escreval("Vai fazer recuperação")
   senao
      escreval("Nada d+ tem que passar mesmo")
   fimse


Fimalgoritmo
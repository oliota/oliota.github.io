Algoritmo "calcular media"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Rubem Oliota
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/05/2021
Var
   // Se��o de Declara��es das vari�veis
   primeira_nota : real
   segunda_nota : real
   terceira_nota : real

   media : real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   escreval("Informe a primeira nota")
   leia(primeira_nota)

   escreval("Informe a segunda nota")
   leia(segunda_nota)

   escreval("Informe a terceira nota")
   leia(terceira_nota)

   media <- (primeira_nota + segunda_nota + terceira_nota)/3

   escreval("Sua m�dia � ",media)

   se media<7 entao
      escreval("Vai fazer recupera��o")
   senao
      escreval("Nada d+ tem que passar mesmo")
   fimse


Fimalgoritmo
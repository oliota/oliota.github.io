Algoritmo "formulario de cadastro"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Rubem Oliota
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/05/2021
Var
   // Se��o de Declara��es das vari�veis
   nome : caractere
   sobrenome : caractere

   idade : inteiro
   altura : real
   peso : real

   IMC : real
   //IMC = peso dividido pela altura em metros ao quadrado
   //IMC = peso / (altura * altura)
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //resultado esperado
   //capturar todos nome, sobrenome e idade
   //se for menor de idade encerrar programa
   //se nao for menor de idade
   //capturar altura e peso
   //informar todos os dados em tela e calcular o IMC

   //==========================
   escreval("Informe seu nome")
   leia(nome)

   escreval("Informe seu sobrenome")
   leia(sobrenome)

   escreval("Informe sua idade")
   leia(idade)


   se idade < 18 entao
      escreval("N�o podemos calcular seu IMC vc � menor de idade")
      se (18-idade) > 1 entao
         escreval("volte aqui depois de ",(18-idade)," anos")
      senao
         escreval("volte aqui depois de ",(18-idade)," ano")
      fimse
   senao
      escreval("Informe sua altura")
      leia(altura)

      escreval("Informe seu peso")
      leia(peso)
      IMC <- peso / (altura * altura)
      escreval("Seu IMC = ",IMC)
   fimse

Fimalgoritmo
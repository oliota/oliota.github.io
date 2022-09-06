Algoritmo "04 - capturar N de repeticoes, repetir normal e invertido"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Rubem Oliota
// Descrição   : Capturar numero de repetições
//                 Repetir de 1 ate quantidade
//                 Repetir de quantidade ate 1 (invertido)
// Autor(a)    : Professor
// Data atual  : 04/06/2021
Var
   // Seção de Declarações das variáveis
   contador,quantidade : inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   escreval("Informe a quantidade de repetições")
   leia(quantidade)

   para contador de 1 ate quantidade faça
          escreval("repetindo normal ",contador)
   fimpara
   
   escreval("---------------------------")

    para contador de quantidade ate 1 passo -1 faça
          escreval("repetindo invertido ",contador)
   fimpara




Fimalgoritmo
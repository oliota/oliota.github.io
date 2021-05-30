algoritmo "repita"
   // Disciplina   : [Linguagem e Lógica de Programação]
   // Professor   : Rubem Oliota
   // Descrição   : aprendendo laço de repetição REPITA ATÉ
   // Autor(a)    : professor
   // Data atual  : 30/05/2021
var
quantidade :inteiro
contador:inteiro


inicio

escreval("Gostaria de repetir quantas vezes?")
leia(quantidade)
contador <- 1
   repita
     escreval("Repetindo ",contador)
     contador<- contador + 1
   até (contador > quantidade)

fimalgoritmo

algoritmo "repita"
   // Disciplina   : [Linguagem e L�gica de Programa��o]
   // Professor   : Rubem Oliota
   // Descri��o   : aprendendo la�o de repeti��o REPITA AT�
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
   at� (contador > quantidade)

fimalgoritmo

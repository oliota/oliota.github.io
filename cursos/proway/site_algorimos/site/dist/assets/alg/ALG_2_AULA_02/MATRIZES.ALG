Algoritmo "matrizes"
// Disciplina: [Linguagem e L�gica de programa�ao]
// Professor: Rubem Oliota
// Fun��o: Exibe a metriz
// Autor    : Antonio Carlos Nicolodi
// Data : 06/06/2003
// Se��o de Declara��es
var
   aluno,item : inteiro
   dados : vetor[1..5,1..3] de caractere
   colunas:vetor[1..3] de caractere
inicio
   // Se��o de Comandos

   colunas[1] <- "Nome"
   colunas[2] <- "Sobrenome"
   colunas[3] <- "Cidade"


   dados[1,1] <- "Rubem"
   dados[1,2] <- "Oliota"
   dados[1,3] <- "Blumenau"


   dados[2,1] <- "Eliane"
   dados[2,2] <- "Henrique"
   dados[2,3] <- "Campina Grande"


   para aluno de 1 ate 5 fa�a
      para item de 1 ate 3 fa�a
         escreval(colunas[item],": ",dados[aluno,item])
      fimpara
      escreval("----------------")
   fimpara

fimalgoritmo

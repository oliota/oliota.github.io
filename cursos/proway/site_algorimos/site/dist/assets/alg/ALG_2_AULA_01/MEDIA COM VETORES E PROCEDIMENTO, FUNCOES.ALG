Algoritmo "media com vetores e procedimento, funcoes"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Rubem Oliota
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/06/2021
Var
   // Se��o de Declara��es das vari�veis
   notas:vetor[1..3] de real
   resultado:real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   //---------------------------
procedimento capturar_notas()
var
   contador : inteiro
inicio
   para contador de 1 ate 3 fa�a
      escreval("Informe a ",contador,"� nota")
      leia(notas[contador])
   fimpara
fimprocedimento

//-----------------------------
funcao calcular_media():real
var
   soma :real
   contador:inteiro
inicio
   para contador de 1 ate 3 fa�a
      soma <- soma + notas[contador]
   fimpara
   retorne soma / 3
fimfuncao
//----------------------------
funcao aprovado(media:real):logico
var
inicio
   se media>=7 entao
      retorne verdadeiro
   senao
      retorne falso
   fimse
fimfuncao
//---------------- INICIO DE VERDADE ----------------

capturar_notas()
resultado <- calcular_media()
escreval("A m�dia � = ",resultado)
se aprovado(resultado) entao
   escreval("aprovado")
senao
   escreval("reprovado")
fimse


escreval("A m�dia � = ",calcular_media())

Fimalgoritmo
Algoritmo "media com vetores e procedimento, funcoes"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Rubem Oliota
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/06/2021
Var
   // Seção de Declarações das variáveis
   notas:vetor[1..3] de real
   resultado:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   //---------------------------
procedimento capturar_notas()
var
   contador : inteiro
inicio
   para contador de 1 ate 3 faça
      escreval("Informe a ",contador,"ª nota")
      leia(notas[contador])
   fimpara
fimprocedimento

//-----------------------------
funcao calcular_media():real
var
   soma :real
   contador:inteiro
inicio
   para contador de 1 ate 3 faça
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
escreval("A média é = ",resultado)
se aprovado(resultado) entao
   escreval("aprovado")
senao
   escreval("reprovado")
fimse


escreval("A média é = ",calcular_media())

Fimalgoritmo
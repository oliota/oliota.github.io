Algoritmo "proway cursos"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Rubem Oliota
// Descri��o   : oferta de cursos da proway
// Autor(a)    : ----
// Data atual  : 13/06/2021
Var
   // Se��o de Declara��es das vari�veis
   resposta_curso_contratado: caractere
   indice : inteiro
   cursos:vetor[1..5] de caractere
   detalhes:vetor[1..5] de caractere
   resumos:vetor[1..5] de caractere
   LIMITE:inteiro

   cursos_contratados:caractere
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   LIMITE <- 5
   //--------------------------------------
procedimento inicializar_cursos()
var
inicio
   cursos[1] <- "Algoritmos 1"
   cursos[2] <- "Algoritmos 2"
   cursos[3] <- "Python - fundamentos"
   cursos[4] <- "Python - intermediario"
   cursos[5] <- "Python - avan�adissimo"
fimprocedimento
procedimento inicializar_detalhes()
var
inicio
   detalhes[1] <- "variaveis,fluxogramas e exercicios"
   detalhes[2] <- "vetores, procedimentos, fun��es e banco de dados"
   detalhes[3] <- "o basico da linguagem variaveis , exercicios"
   detalhes[4] <- "fun��es e mini projeto"
   detalhes[5] <- "mega projeto com foco em um emprego"
fimprocedimento
procedimento inicializar_resumos()
var
inicio
   resumos[1] <- "vc vai aprender a programar , vc nao sabe ainda..."
   resumos[2] <- "ja sei programar um pouco agora so falta uma linguagem de mercado"
   resumos[3] <- "o basico dnv? so que agora em uma linguagem de mercado"
   resumos[4] <- "fazendo projetos no dia a dia"
   resumos[5] <- "sou P#0DA em programa��o me contrata"
fimprocedimento
//listar cursos
//--------------------------------------------------------
procedimento listar_cursos()
var
   contador : inteiro
inicio
   inicializar_cursos()
   inicializar_detalhes()
   inicializar_resumos()
   para contador de 1 ate LIMITE fa�a
      escreval(contador ," - curso ",cursos[contador])
   fimpara
fimprocedimento
//--------------------------------------------------------
//selecionar um curso - exibir os detalhes - exibir uma revis�o
funcao curso_selecionado(indice : inteiro) : caractere
var
inicio
   escreval("----------------",cursos[indice],"-------------------------")
   escreval("Detalhes do curso ")
   escreval(" -  ",detalhes[indice])
   escreval("Resumo do curso")
   escreval(" -  ",resumos[indice])
   escreval("-----------------------------------------------------------")
   retorne contratar_curso(indice)
fimfuncao
//--------------------------------------------------------
//op��o de contratar esse curso
funcao contratar_curso(indice: inteiro): caractere
var
   resposta : caractere
inicio
   escreval("Deseja contratar o curso ", cursos[indice],"? (S/N)")
   leia(resposta)
   se (resposta="s") ou (resposta="S") ou (resposta="sim") entao
      cursos_contratados <- cursos_contratados +" , "+cursos[indice]
      retorne "Contratou o curso"
   senao
      retorne "N�o contratou o curso"
   fimse
fimfuncao
//-----------------------------------------------
procedimento loop_apresentacao()
var
inicio
   limpatela
   escreval("Bem vindo ao catalogo de cursos da proway")
   listar_cursos()
   escreval("ESCOLHA -1 para encerrar o programa")
   escreval("No momento vc ja tem os cursos")
   escreval(cursos_contratados)
   escreval("Conforme a lista de cursos, escolha um")
   leia(indice)
   se (indice<1) ou (indice>LIMITE)entao
      escreval("Escolha um indice valido")
   senao
      resposta_curso_contratado <- curso_selecionado(indice)
      escreval(resposta_curso_contratado)
   fimse
fimprocedimento
//---------------------- INICIO DE VERDADE ---------------------

repita
   loop_apresentacao()
ate(indice=-1)


Fimalgoritmo
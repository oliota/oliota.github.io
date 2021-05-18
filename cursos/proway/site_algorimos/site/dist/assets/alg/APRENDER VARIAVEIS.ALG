Algoritmo "aprender variaveis"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Rubem Oliota 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 18/05/2021
Var
// Seção de Declarações das variáveis 

//declarando uma variavel do tipo inteira chamada idade
// nome_da_variavel : tipo
idade : inteiro


//declarando uma variavel do tipo caractere chamada nome_completo
nome_completo : caractere


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

//------------------------iniciando inteiros -----------------

//atribuindo valor a variavel via codigo
//  "  <-  " é o operado de atribuição
//exemplo   variavel <- valor

//nesse momento a variavel idade recebeu o valor 32 como inteiro
idade <- 32

//para a informação ser exibida para o usuario é necessário utilizar
//a função escreval
//escreval()  exibe em tela a informação que for inserida nos "()"
//após exibir a informação ele quebra a linha

//exibindo o valor da variavel em tela
escreval(idade)

//escreval() aceita textos livres , variaveis e lista de informações
//exemplo 1 - texto livre

escreval("Exibindo um texto livre")

//exemplo 2 - mais de um texto livre

escreval("Texto1","Texto2")

//para que as informações nao fiquem coladas é necessário adicionar espaços
//na parte do texto livre

escreval("Texto1 ","Texto2 ","Texto3 ")
// o resultado é uma exibição na mesma linha no formato de uma frase

//exemplo 3 - frase com variaveis

//nessa lista de parametros todos foram exibidos em sequencia na mesma linha
escreval("Oi eu tenho ",idade," anos")

//o caracter "," vergula separa os parametros do escreval

//------------------------finalizando inteiros -----------------



//------------------------iniciando caracteres -----------------

nome_completo <- "Rubem Oliota"

escreval("Olá meu nome é ",nome_completo)


//------------------------finalizando caracteres -----------------


//exemplo completo de inteiros com caracteres na mesma frase

escreval("Meu nome é ",nome_completo, " e tenho ",idade," anos")

Fimalgoritmo
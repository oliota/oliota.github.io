Algoritmo "meu lindo cv"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Rubem Oliota 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 18/05/2021
Var
// Seção de Declarações das variáveis 

nome_completo : caractere
idade : inteiro
telefone: caractere
email: caractere

rua: caractere
numero:inteiro
cidade: caractere
bairro: caractere
uf: caractere
cep: caractere

escolaridade: caractere

experiencia_um : caractere
tempo_experiencia_um : inteiro

experiencia_dois : caractere
tempo_experiencia_dois : inteiro

experiencia_tres : caractere
tempo_experiencia_tres : inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

nome_completo <- "Rubem Oliota"
idade <- 32
telefone <- "(47) 98888-8888"
email <- "algorimo@hotmail.com.br"

rua <- "Rua sem nome"
numero <- 10
cidade <- "Blumenau"
bairro <- "Centro"
uf <- "SC"
cep <- "89000-000"

escolaridade <- "Superior completo -IESP"

experiencia_um <- "Rava - programador junior"
tempo_experiencia_um <- 2

experiencia_dois <- "Accenture - analista junior"
tempo_experiencia_dois <- 3

experiencia_tres <- "Benner - analista sênior"
tempo_experiencia_tres <- 3


escreval("Meu CV")
escreval("---------------------------------------------------------")
escreval("Dados de contato")
escreval("")
escreval("Nome: ",nome_completo)
escreval("Idade: ",idade)
escreval("Telefone: ",telefone)
escreval("E-mail: ",email)
escreval("Endereço:",rua," Nº",numero," - ",bairro," - ",uf," - ",cep)
escreval("")
escreval("---------------------------------------------------------")
escreval("Formação acadêmica")
escreval("")
escreval(escolaridade)
escreval("")
escreval("---------------------------------------------------------")
escreval("Experiência profissional")
escreval("")
escreval("1º - ",experiencia_um," - ",tempo_experiencia_um," anos")
escreval("2º - ",experiencia_dois," - ",tempo_experiencia_dois," anos")
escreval("3º - ",experiencia_tres," - ",tempo_experiencia_tres," anos")
escreval("")
escreval("---------------------------------------------------------")

Fimalgoritmo
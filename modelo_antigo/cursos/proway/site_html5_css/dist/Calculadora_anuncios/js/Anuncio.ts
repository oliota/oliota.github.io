export class Anuncio {

    nome: string
    inicio: Date
    fim: Date
    investimento: number

    constructor(nome: string, inicio: Date, fim: Date, investimento: number) {
        this.nome = nome
        this.inicio = inicio
        this.fim = fim
        this.investimento = investimento 
    }

}
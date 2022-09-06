export class Pessoa {
    constructor(nome, idade, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }
    dadosCompletos() {
        return `${JSON.stringify(this)}`;
    }
}

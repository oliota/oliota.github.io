import * as herancas from './herancas.js';
export class Aluno extends herancas.Pessoa {
    constructor(nome, idade, matricula, trilha) {
        super(nome, idade, matricula);
        this.trilha = trilha;
    }
    meApresentar() {
        return `Oi eu sou um aluno e meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
}
export class Professor extends herancas.Pessoa {
    constructor(nome, idade, matricula, cursos) {
        super(nome, idade, matricula);
        this.cursos = cursos;
    }
    meApresentar() {
        return `Oi eu sou um professor e meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
}

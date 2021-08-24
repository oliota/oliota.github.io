import * as herancas from './herancas.js';



export class Aluno extends herancas.Pessoa {

    
    trilha: string;

    constructor(nome: string, idade: number, matricula: string, trilha: string) {
        super(nome,idade,matricula); 
        this.trilha = trilha;
    }
    apelido: string;
 

    meApresentar() {
        return `Oi eu sou um aluno e meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }

  
}

export class Professor extends herancas.Pessoa {
 
    cursos: number;

    constructor(nome: string, idade: number, matricula: string, cursos: number) {
        super(nome,idade,matricula) 
        this.cursos = cursos;
    }
    meApresentar() {
        return `Oi eu sou um professor e meu nome é ${this.nome} e tenho ${this.idade} anos`;
    } 
   
}
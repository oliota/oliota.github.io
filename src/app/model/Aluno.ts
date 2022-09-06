import { Pessoa } from './Pessoa';
export class Aluno extends Pessoa {
  notas: Array<number>;
  constructor(nome: string, idade: number, notas: Array<number>) {
    super(nome, idade);
    this.notas = notas;
  }


}

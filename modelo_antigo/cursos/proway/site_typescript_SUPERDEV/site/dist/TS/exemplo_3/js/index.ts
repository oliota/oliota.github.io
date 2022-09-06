import * as classes from './classes.js';


let aluno= new classes.Aluno("Fulano",32,"001","Superdev");

console.log(aluno.meApresentar())
console.log(aluno.dadosCompletos())



let professor= new classes.Professor("Rubem",32,"001",13);

console.log(professor.meApresentar())
console.log(professor.dadosCompletos())
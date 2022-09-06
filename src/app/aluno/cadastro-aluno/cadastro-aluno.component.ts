import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../model/Aluno';
import { AlunoService } from '../../services/aluno.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
 
  constructor(private alunoService:AlunoService) { }
  alunos!:Array<Aluno>
  ngOnInit(): void {
    this.getAll()
  }

  getAll():void{
    this.alunoService.getAll().pipe( catchError((error)=>{
      let alunos:Array<any>=new Array()
      alunos.push(new Aluno("Fulano",18, [7,8,9]))
      alunos.push(new Aluno("Zezinho",18, [1,6,9]))
      alunos.push(new Aluno("Maria",18,[7,7,7]))
      alunos.push(new Aluno("João",18,[10,8,9]))
      alunos.push(new Aluno("Joana",18,[10,8,10]))
      return of(alunos)
    })).subscribe((response)=>{
      console.log(response);
      
      this.alunos=response
    })
  }

  calcularMedia(notas:Array<number>): number {
    return (
      notas.reduce((prev: number, next: number) => prev + next, 0) /
      notas.length
    );
  }

}

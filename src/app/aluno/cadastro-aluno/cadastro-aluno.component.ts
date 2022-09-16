import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css'],
})
export class CadastroAlunoComponent implements OnInit {
  alunos!: Array<any>;
  aluno!: any;
  cadastrando!: boolean;
 

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.alunoService
      .getAll()
      .pipe(
        catchError((error) => {
          let alunos: Array<any> = new Array();
          alunos.push({ id: 1, nome: 'Aluno1', idade: 10 });
          alunos.push({ id: 2, nome: 'Aluno2', idade: 20 });
          alunos.push({ id: 3, nome: 'Aluno3', idade: 30 });
          return of(alunos);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.alunos = response;
      });
  }

  openForm(): void {
    this.aluno = {};
    this.cadastrando = true;
  }

  closeForm(): void {
    this.aluno = {};
    this.cadastrando = false;
  }

  updateForm(aluno: any): void {
    this.aluno = aluno;
    this.cadastrando = true;
  }

  create(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');
      return;
    }

    this.alunoService
      .create(this.aluno)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.alunos.push(response);

          this.closeForm();
        }
      });
  }
  validForm(): boolean {
    let valid: boolean = true;
    if (!this.aluno.nome) {
      valid = false;
    }
    return valid;
  }

  update(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');
      return;
    }
    this.alunoService
      .update(this.aluno)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.alunos[this.alunos.indexOf(this.aluno)] = response;

          this.closeForm();
        }
      });
  }

  delete(aluno: any): void {
    this.alunoService
      .delete(aluno)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.alunos.splice(this.alunos.indexOf(aluno), 1);
        }
      });
  }
}

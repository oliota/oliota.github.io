import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroAlunoComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class AlunoModule { }

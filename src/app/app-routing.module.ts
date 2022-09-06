import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SegurancaService } from './services/seguranca.service';
import { CadastroAlunoComponent } from './aluno/cadastro-aluno/cadastro-aluno.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[SegurancaService]}, 
  {path:"aluno/cadastro",component:CadastroAlunoComponent,canActivate:[SegurancaService]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { SegurancaService } from '../services/seguranca.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string="";
  password: string="";
  constructor(
    private seguranca: SegurancaService,
    private usuarioService: UsuarioService,
    private router:Router
  ) {}

  ngOnInit(): void {}

  login(): void {
     
    this.usuarioService
      .login(this.username, this.password)
      .pipe(
        catchError((error) => {
          console.log(
            'Falha simulada pois não há backend ainda, então pode entrar'
          );

          return of(true);
        })
      )
      .subscribe((response: any) => {
        console.log('logou?');
        console.log('response', response);

        this.seguranca.logged = response;
        this.seguranca.username=this.username 
        
        this.router.navigateByUrl("home")
      });
  }

  forgotPassword(): void {
     
    console.log("forgotPassword");
    
  }

  
  register(): void {
     
    console.log("register");
    
  }
}

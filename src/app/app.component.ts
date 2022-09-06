import { Component } from '@angular/core';
import { SegurancaService } from './services/seguranca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto_modelo_entra21_2022';

  constructor(
    public seguranca:SegurancaService
  ){

  }
}

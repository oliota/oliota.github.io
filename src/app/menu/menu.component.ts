import { Component, OnInit } from '@angular/core';
import { SegurancaService } from '../services/seguranca.service';
import { Router } from '@angular/router';
import { SistemaService } from '../services/sistema.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menus!: Array<any>;
  constructor(
    public seguranca: SegurancaService,
    public sistemaService: SistemaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sistemaService
      .getMenu()
      .pipe(
        catchError((error) => {
          return of([
            {
              title: 'Alunos',
              color: 'text-warning',
              icon: 'fas fa-circle',
              sub: [
                { title: 'Cadastro', 
                icon: 'fas fa-table',
                route: 'aluno/cadastro'  },
                {
                  title: 'Relatórios', 
                  icon: 'fas fa-chart-pie',
                  sub: [ 
                        { title: 'Notas', route: 'aluno/relatorio/notas'    },
                        { title: 'Faltas', route: 'aluno/relatorio/faltas'    },
                        { title: 'Desenpenho', route: 'aluno/relatorio/desenpenho'    }, 
                  ],
                },
              ],
            },
            {
              title: 'Professores',
              color: 'text-primary',
              icon: 'fas fa-circle',
              sub: [
                { title: 'Cadastro', 
                icon: 'fas fa-table',
                route: 'professor/cadastro'  },
                {
                  title: 'Relatórios', 
                  icon: 'fas fa-chart-pie',
                  sub: [ 
                        { title: 'Turmas', route: 'professor/relatorio/turmas'    },
                        { title: 'Plano', route: 'professor/relatorio/plano'    },
                        { title: 'Pagamento', route: 'professor/relatorio/pagamento'    }, 
                  ],
                },
              ],
            },
          ]);
        })
      )
      .subscribe((response) => {
        this.menus=response

      });
  }

  sair(): void {
    this.seguranca.logged = false;
    this.router.navigateByUrl('');
  }
}

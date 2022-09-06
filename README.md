# Projeto Modelo Entra21 - 2022

 Para criar um projeto angular na raiz de um repositorio

 ng new nomeProjeto --directory ./

 routes y
 styles css

 importar template AdminLte3
 npm install admin-lte@^3.0 --save

 configurar angular.json
 
 Incluir com css e js global
Trocar conteudo do outputPath por docs , pois será necessário configurar o github.io posteriormente

 Aumentar capacidade no objeto budgets para 10mb onde inicialmente é em kb

 criar componentes iniciais de login, header,menu e home
 rotas iniciais
 "" = LoginComponent
 "home" = HomeComponent

 Para que os services realizem conexões é necessario incluir na lista de imports do app.module
 FormsModule
Caso não gere o importe automaticamente utilize o exemplo de import
import { FormsModule } from '@angular/forms';

 Configurar layout principal no app.component.html 
 Sugestao

 app-header (contendo parte do layout da parte superior)
 app-menu (contendo parte do layout lateral)
 router-outlet (local onde os componentes são subistituidos ao navegar por rotas)


 criar services iniciais em um diretorio separado
 ng g s /services/seguranca (responsavel por bloquear rotas)  é necessário colocar na lista de providers do app.module e incluir no contrutor dos componentes que o utilizam declaradamente
 ng g s /services/usuario (responsavel por conectar ao backend e apenas isso) incluir no contrutor dos componentes que o utilizam declaradamente

Para que os services realizem conexões é necessario incluir na lista de imports do app.module
HttpClientModule
Caso não gere o importe automaticamente utilize o exemplo de import
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

Em cada service que realize connexões
incluir em seu construtor
private http: HttpClient
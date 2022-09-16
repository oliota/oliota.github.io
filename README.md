# Projeto Modelo Entra21 - 2022

Repositório com modelo de projeto funcional para o frontend Angular 

<a href='#'><img align='center' src='./giphy.gif' width='400 ' height='300' /></a>

 
  1. Para criar um projeto angular na raiz de um repositorio

      - <b>ng new nomeProjeto --directory ./</b>
      - routes y
      - styles css

  1. importar template AdminLte3
      - <b>npm install admin-lte@^3.0 --save</b>

  1. Importar dependencia para utilizar modais
      - <b>npm install --save @ng-bootstrap/ng-bootstrap</b>
      - <b>npm install @popperjs/core</b>
  
  2. configurar angular.json
      - Incluir com css e js global
      - Trocar conteudo do "<b>outputPath</b>" por docs , pois será necessário configurar o github.io posteriormente
      - Aumentar capacidade no objeto "<b>budgets</b>" para 10mb onde inicialmente é em kb

  3. criar componentes iniciais de login, header,menu e home
  4. rotas iniciais
      - "" = LoginComponent
      - "home" = HomeComponent

  5. Para que os components realizem twoWay databinding é necessario incluir na lista de imports do app.module
      - <b>FormsModule</b>
      - <b>ReactiveFormsModule</b>
      - Caso não gere o importe automaticamente utilize o exemplo de import
      - <b>import { FormsModule, ReactiveFormsModule } from '@angular/forms';</b>

  6. Configurar layout principal no <b>app.component.html</b> 
      - Sugestao:
        - app-header (contendo parte do layout da parte superior)
        - app-menu (contendo parte do layout lateral)
        - router-outlet (local onde os componentes são subistituidos ao navegar por rotas)


  7. criar services iniciais em um diretorio separado
      - <b>ng g s /services/seguranca</b> (responsavel por bloquear rotas)  é necessário colocar na lista de providers do app.module e incluir no contrutor dos componentes que o utilizam declaradamente
      - <b>ng g s /services/usuario</b> (responsavel por conectar ao backend e apenas isso) incluir no contrutor dos componentes que o utilizam declaradamente

  8. Para que os services realizem conexões é necessario incluir na lista de imports do app.module
      - <b>HttpClientModule</b>
      - Caso não gere o importe automaticamente utilize o exemplo de import
      - <b>import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';</b>

 1. Em cada service que realize conexões
      - incluir em seu construtor
        - <b>private http: HttpClient</b>
 2. realizar o build do projeto
      - ng build
      - após a conclusão realizar commt e push
 3. no github > respositorio > settings > pages > branch
      - selecione a opção /docs e salve 
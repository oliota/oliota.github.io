



const menu = document.getElementById('menu');
M.Sidenav.init(menu, { edge: 'right' });

//gerarTopo();
//configurarMenu();
configurarIcones();

function gerarTopo() {
    let topo = document.getElementById('topo');
    let div = document.createElement('div');
    div.setAttribute('class', "nav-wrapper container");


    let a = document.createElement('a');
    a.setAttribute('href', 'index.html');
    a.textContent = 'Super';

    let a_span = document.createElement('span');
    a_span.textContent = 'DEV';
    a.append(a_span);
    div.append(a);


    let span = document.createElement('span');
    span.setAttribute('class', 'right');

    let i = document.createElement('i');
    i.setAttribute('class', 'sidenav-trigger');
    i.setAttribute('data-target', 'menu');
    i.textContent = 'menu';
    span.append(i);
    div.append(span);

    topo.append(div);

}


function configurarMenu() {


    let itens = new Array;

    class Item {
        constructor(url, icone, titulo) {
            this.url = url;
            this.icone = icone;
            this.titulo = titulo;
        }
    }

    itens.push(new Item("index.html", "home", "Inicio"));
    itens.push(new Item("professores.html", "school", "Professores"));
    itens.push(new Item("contato.html", "mail", "Contato"));


    itens.forEach(element => {
        let i = document.createElement('i');
        i.textContent = element.icone;


        let a = document.createElement('a');
        a.setAttribute('href', element.url);
        a.textContent = element.titulo;
        a.append(i);


        let li = document.createElement('li');
        li.append(a);
        menu.append(li);

    });
}


function configurarIcones() {
    var icones = document.getElementsByTagName("i");
    for (var i = 0; i < icones.length; i++) {
        let classe = icones[i].getAttribute('class');
        if (classe == null) {
            icones[i].setAttribute('class', "material-icons ");
        } else {
            icones[i].setAttribute('class', classe + " material-icons");
        }
    }


}





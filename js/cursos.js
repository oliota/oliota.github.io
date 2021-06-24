class Curso {

    constructor(nome, inicio, fim, aulas, dias, horas, link) {
        this.nome = nome;
        this.inicio = inicio;
        this.fim = fim;
        this.aulas = aulas;
        this.dias = dias;
        this.horas = horas;
        this.link = link;
    }
}


let cursos = new Array();

/*
cursos.push(new Curso(
    'nome',
    'inicio',
    'fim',
    'aulas',
    'dias',
    'horas',
    'link'
    )
    ); 
*/


cursos.push(new Curso(
    'C# Fundamentos',
    '24/01/2021',
    '28/02/2021',
    '6',
    'Domingos',
    '28'
)
);
cursos.push(new Curso(
    'Java Fundamentos',
    '24/02/2021',
    '17/03/2021',
    '10',
    'Segunda, Quarta e Sexta',
    '28'
)
);

cursos.push(new Curso(
    'Linguagem de programação Java',
    '19/03/2021',
    '26/04/2021',
    '17',
    'Segunda, Quarta e Sexta',
    '49'
)
);

cursos.push(new Curso(
    'TypeScript',
    '17/04/2021',
    '08/05/2021',
    '4',
    'Sábado',
    '20'
)
);

cursos.push(new Curso(
    'Fundamentos de Html 5',
    '27/04/2021',
    '11/05/2021',
    '5',
    'Terça e Quinta',
    '20',
    'cursos/proway/site_html5_css/index.html'
)
);

cursos.push(new Curso(
    'Fundamentosem Css',
    '13/05/2021',
    '27/05/2021',
    '5',
    'Terça e Quinta',
    '20',
    'cursos/proway/site_html5_css/index.html'
)
);


cursos.push(new Curso(
    'Javascript, Jquery e Ajax',
    '15/05/2021',
    '05/06/2021',
    '4',
    'Sábado',
    '20',
    'cursos/proway/site_javascript/index.html'
)
);

cursos.push(new Curso(
    'Lógica de programação e algoritmos 1',
    '16/05/2021',
    '06/06/2021',
    '4',
    'Domingo',
    '20',
    'cursos/proway/site_algorimos/index.html'
)
);

cursos.push(new Curso(
    'Lógica de programação e algoritmos 2',
    '13/06/2021',
    '18/07/2021',
    '6',
    'Domingo',
    '28',
    'cursos/proway/site_algorimos/index.html'
)
);


cursos.push(new Curso(
    'HTML/CSS Avançado',
    '24/06/2021',
    '08/07/2021',
    '5',
    'Terça e Quinta',
    '20',
    'cursos/proway/site_html_css_acancado/index.html'
)
);



let contador = 1;
cursos.forEach(element => {
    let item = document.createElement('tr');

    item.append(document.createElement('td').textContent = contador++);
    for (var campo in element) {
        let coluna = document.createElement('td');
        if (campo != 'link') {
            coluna.textContent = element[campo];

        } else {
            if (element[campo] != undefined) {
                let link = document.createElement('a');
                link.setAttribute('href', element[campo]);
                link.setAttribute('target', '_blank');
                link.textContent = 'Visitar página do curso';
                coluna.append(link);
            }
        }
        item.append(coluna);

        $('#lista_cursos').append(item);
    }


});


if ($('#lista_cursos').length != 0){
       $('table').DataTable({
        language: {
            url: 'http://cdn.datatables.net/plug-ins/1.10.15/i18n/Portuguese-Brasil.json'
        }
    }); 
}

$('#quantidade_cursos').text(cursos.length)

 /*




*/
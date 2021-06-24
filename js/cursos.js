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

    let indice=document.createElement('td');
    indice.textContent = contador++
    item.append(indice);
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
 

$('table').DataTable({
    language: {
        "sEmptyTable": "Nenhum registro encontrado",
        "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
        "sInfoFiltered": "(Filtrados de _MAX_ registros)",
        "sInfoPostFix": "",
        "sInfoThousands": ".",
        "sLengthMenu": "_MENU_ resultados por página",
        "sLoadingRecords": "Carregando...",
        "sProcessing": "Processando...",
        "sZeroRecords": "Nenhum registro encontrado",
        "sSearch": "Pesquisar",
        "oPaginate": {
            "sNext": "Próximo",
            "sPrevious": "Anterior",
            "sFirst": "Primeiro",
            "sLast": "Último"
        },
        "oAria": {
            "sSortAscending": ": Ordenar colunas de forma ascendente",
            "sSortDescending": ": Ordenar colunas de forma descendente"
        }
    }
});

$('#quantidade_cursos').text(cursos.length)

/*




*/
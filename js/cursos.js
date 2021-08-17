class Curso {

    constructor(nome,link, inicio, fim, aulas, dias, horas) {
        this.nome = nome;
        this.link = link;
        this.inicio = inicio;
        this.fim = fim;
        this.aulas = aulas;
        this.dias = dias;
        this.horas = horas;
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
    '',
    '24/01/2021',
    '28/02/2021',
    '6',
    'Domingos',
    '28'
)
);
cursos.push(new Curso(
    'Java Fundamentos',
    '',
    '24/02/2021',
    '17/03/2021',
    '10',
    'Segunda, Quarta e Sexta',
    '28'
)
);

cursos.push(new Curso(
    'Linguagem de programação Java',
    '',
    '19/03/2021',
    '26/04/2021',
    '17',
    'Segunda, Quarta e Sexta',
    '49'
)
);

cursos.push(new Curso(
    'TypeScript',
    '',
    '17/04/2021',
    '08/05/2021',
    '4',
    'Sábado',
    '20'
)
);

cursos.push(new Curso(
    'Fundamentos de Html 5',
    'cursos/proway/site_html5_css/index.html',
    '27/04/2021',
    '11/05/2021',
    '5',
    'Terça e Quinta',
    '20'
)
);

cursos.push(new Curso(
    'Fundamentos em Css',
    'cursos/proway/site_html5_css/index.html',
    '13/05/2021',
    '27/05/2021',
    '5',
    'Terça e Quinta',
    '20'
)
);


cursos.push(new Curso(
    'Javascript, Jquery e Ajax',
    'cursos/proway/site_javascript/index.html',
    '15/05/2021',
    '05/06/2021',
    '4',
    'Sábado',
    '20'
)
);

cursos.push(new Curso(
    'Lógica de programação e algoritmos 1',
    'cursos/proway/site_algorimos/index.html',
    '16/05/2021',
    '06/06/2021',
    '4',
    'Domingo',
    '20'
)
);

cursos.push(new Curso(
    'Lógica de programação e algoritmos 2',
    'cursos/proway/site_algorimos/index.html',
    '13/06/2021',
    '18/07/2021',
    '6',
    'Domingo',
    '28'
)
);
 

cursos.push(new Curso(
    'HTML/CSS Avançado',
    'cursos/proway/site_html_css_avancado/index.html',
    '24/06/2021',
    '08/07/2021',
    '5',
    'Terça e Quinta',
    '20'
)
);

cursos.push(new Curso(
    'Javascript, Jquery e Ajax (SUPER DEV)',
    'cursos/proway/site_javascript_SUPERDEV/index.html',
    '13/07/2021',
    '27/07/2021',
    '5',
    'Terça e Quinta',
    '20'
)
);

cursos.push(new Curso(
    'Javascript AVANÇADO (SUPER DEV)',
    'cursos/proway/site_javascript_AVANCADO_SUPERDEV/index.html',
    '29/07/2021',
    '12/08/2021',
    '5',
    'Terça e Quinta',
    '20'
)
);

// cursos.push(new Curso(
//     'Javascript, Jquery e Ajax',
//     'cursos/proway/site_javascript_seg_quar_sex/index.html',
//     '09/08/2021',
//     '18/08/2021',
//     '5',
//     'Segunda, Quarta e Sexta',
//     '20'
// )
// );

cursos.push(new Curso(
    'Typescript (SUPER DEV)',
    'cursos/proway/site_typescript_SUPERDEV/index.html',
    '17/08/2021',
    '31/08/2021',
    '5',
    'Terça e Quinta',
    '20'
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
            if (element[campo] != undefined && element[campo]!='') {
                let link = document.createElement('a');
                link.setAttribute('href', element[campo]);
                link.setAttribute('target', '_blank');
                link.textContent = 'Visitar página do curso';
                coluna.append(link);
            }else{
                item.append(coluna); 
            }
        }
        item.append(coluna);

        $('#lista_cursos').append(item);
    }


});
 

$('table').DataTable({
    "order": [[ 0, "desc" ]],
    "pageLength": 25,
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
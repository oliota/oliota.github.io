escreverTabela();
var id = 0;

function escreverTabela() {
    $("#animais").empty();
    $.ajax(
        {
            url: "http://localhost:4000/animais",
            type: "get",
            success: (animais) => {
                animais.forEach(animal => {
                    escreveLinha(animal);
                });
            }
        }
    );
}


function escreveLinha(animal) {

    $("<tr>")
        .append(
            $("<td>", { text: animal.id })
        )
        .append(
            $("<td>", { text: animal.nome })
        )
        .append(
            $("<td>", { text: animal.tipo })
        )
        .append(
            $("<td>")
                .append(
                    $("<button>",
                        {
                            text: "Deletar",
                            click: () => {
                                $.ajax(
                                    {
                                        url: "http://localhost:4000/animais/" + animal.id,
                                        type: "delete",
                                        success: (res) => {
                                            escreverTabela()
                                        }
                                    }
                                );

                            }
                        })

                )
                .append(
                    $("<button>",
                        {
                            text: "Atualizar",
                            click: () => {
                                $("#nome").val(animal.nome)
                                $("#tipo").val(animal.tipo)
                                $("#observacao").val(animal.observacao)
                                id = animal.id;
                                console.log("Editando o id " + id)
                            }
                        })

                )
        )
        .appendTo("#animais")
}


$("#formulario").submit(
    (event) => { 
        event.preventDefault();

        if (id == 0) {
            salvar();
        } else {
            editar();
        }

    }
)

function salvar() {
    
    console.log("SALVAR")
    let animal = {
        nome: $("#nome").val(),
        tipo: $("#tipo").val(),
        observacao: $("#observacao").val()
    }

    $.ajax(
        {
            url: "http://localhost:4000/animais"  ,
            type: "post",
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json",
            },
            data:JSON.stringify(animal),
            success: (res) => {
                escreverTabela()
            }
        }
    );
}



function editar() {
    
    console.log("Editar")
    let animal = {
        nome: $("#nome").val(),
        tipo: $("#tipo").val(),
        observacao: $("#observacao").val()
    }

    $.ajax(
        {
            url: "http://localhost:4000/animais/"+id  ,
            type: "put",
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json",
            },
            data:JSON.stringify(animal),
            success: (res) => {
                escreverTabela()
            }
        }
    );
}
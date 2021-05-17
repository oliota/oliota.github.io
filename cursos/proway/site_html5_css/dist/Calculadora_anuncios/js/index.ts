

import { CalculadoraAcrescimoViews, CalculadoraCliks, CalculadoraCompartilhamento, CalcularViews } from "./calculadora.js"



$("#bt_calcular").on(
    "click",
    function () {
        var dinheiro: number = Number($("#valor").val().toString())
        if (dinheiro <= 0) {
            alert("Informe um valor acima de 0 (zero)")
            return
        }
        $("#valor").val("")
        ExibirAlcance(dinheiro)

    }
)

function ExibirAlcance(dinheiro: number) {
    console.clear()

    var views: number = CalcularViews(dinheiro)  // a cada 1 $ = 30 visualizações 

    var clicks: number = CalculadoraCliks(views) // apenas 12% das visualizações acabam gerando clicks

    var compartilhamentos: number = CalculadoraCompartilhamento(clicks)  // apenas 15% dos click geram compartilhamentos porem 1 compartilhamento pode ser recompartilhado +3x gerando 4 para cada click



    //informar valores antes do acrescimo 

    var linha = document.createElement("tr")

    linha.append(novaColuna(Math.round(dinheiro).toString()))
    linha.append(novaColuna(Math.round(views).toString()))
    linha.append(novaColuna(Math.round(clicks).toString()))
    linha.append(novaColuna(Math.round(compartilhamentos).toString()))

    //infomar valores após acrescimo

    var acrescimo_de_views: number = CalculadoraAcrescimoViews(compartilhamentos) // cada compartilhamento geram 40 novas vizualizações

    views = views + acrescimo_de_views
    clicks = CalculadoraCliks(views)
    compartilhamentos = CalculadoraCompartilhamento(clicks)




    linha.append(novaColuna(Math.round(acrescimo_de_views).toString()))
    linha.append(novaColuna(Math.round(views).toString()))
    linha.append(novaColuna(Math.round(clicks).toString()))
    linha.append(novaColuna(Math.round(compartilhamentos).toString()))



    $("#resultado").append(linha)


}



function novaColuna(valor: string) {
    var coluna = document.createElement("td")
    coluna.append(valor)
    return coluna
}





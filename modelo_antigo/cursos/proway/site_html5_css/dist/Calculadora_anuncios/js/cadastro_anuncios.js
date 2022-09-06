import { Anuncio } from "./Anuncio.js";
import { CalculadoraAcrescimoViews, CalculadoraCliks, CalculadoraCompartilhamento, CalcularViews } from "./calculadora.js";
var chave_usuario_logado = "chave_usuario_logado_proway";
var chave_usuario_anuncios = "";
var anuncios = new Array;
if (localStorage.getItem(chave_usuario_logado) == null) {
    alert("Você não deveria estar nessa página sem ter se logado corretamente, volte para o login agora");
    window.location.href = "login.html";
}
else {
    var usuario = JSON.parse(localStorage.getItem(chave_usuario_logado));
    $("#usuario").text(usuario.nome);
    chave_usuario_anuncios = usuario.login + "_proway";
}
if (localStorage.getItem(chave_usuario_anuncios) == null) {
    SalvarAnuncios();
    console.log(chave_usuario_anuncios);
}
else {
    anuncios = JSON.parse(localStorage.getItem(chave_usuario_anuncios));
    console.log(anuncios);
    anuncios.forEach(function (anuncio) {
        EscreverLinhaNaTabela(anuncio);
    });
}
function SalvarAnuncios() {
    var lista_em_texto = JSON.stringify(anuncios);
    localStorage.setItem(chave_usuario_anuncios, lista_em_texto);
    console.clear();
    console.log(anuncios);
}
$("#salvar").on("click", function () {
    var nome = $("#nome").val().toString();
    var dinheiro = Number($("#valor").val().toString());
    var inicio = new Date($("#inicio").val().toString());
    var fim = new Date($("#fim").val().toString());
    var dias = calculaDiferenca(inicio, fim);
    var anuncio = new Anuncio(nome, inicio, fim, dinheiro);
    if (dias <= 0) {
        dias = 1;
    }
    if (dinheiro * dias <= 0) {
        alert("Informe um valor acima de 0 (zero)");
        return;
    }
    ExibirAlcance(anuncio);
    $(".form-control").val("");
});
function ExibirAlcance(anuncio) {
    console.clear();
    //informar valores antes do acrescimo 
    EscreverLinhaNaTabela(anuncio);
    anuncios.push(anuncio);
    SalvarAnuncios();
}
function novaColuna(valor) {
    var coluna = document.createElement("td");
    coluna.append(valor);
    return coluna;
}
$("#sair").on("click", function () {
    localStorage.setItem(chave_usuario_logado, null);
    window.location.href = "index.html";
});
function calculaDiferenca(dataInicial, dataFinal) {
    /*gera um objeto do tipo Date com valor do input*/
    var date1 = new Date(dataInicial);
    var date2 = new Date(dataFinal);
    if (date2.getTime() <= date1.getTime()) // data final é menor que a data inicial
        return 1;
    /*Subtrai a segunda data em milisegundos pela primeira e usa função abs para retornar o valor absoluto*/
    var diferenca = Math.abs(date2.getTime() - date1.getTime());
    /*agora ele divide o valor da diferença das datas em milisegundos pela quantidade de milisegundos em um dia e usa ceil para
    retorna o menor número inteiro*/
    var dias = Math.ceil(diferenca / (1000 * 3600 * 24));
    return dias;
}
function EscreverLinhaNaTabela(anuncio) {
    var dias = calculaDiferenca(anuncio.inicio, anuncio.fim);
    var views = CalcularViews(anuncio.investimento * dias); // a cada 1 $ = 30 visualizações 
    var clicks = CalculadoraCliks(views); // apenas 12% das visualizações acabam gerando clicks
    var compartilhamentos = CalculadoraCompartilhamento(clicks); // apenas 15% dos click geram compartilhamentos porem 1 compartilhamento pode ser recompartilhado +3x gerando 4 para cada click
    var linha = document.createElement("tr");
    linha.append(novaColuna(anuncio.nome.toString()));
    linha.append(novaColuna(Math.round(anuncio.investimento).toString()));
    linha.append(novaColuna(dias.toString()));
    linha.append(novaColuna(Math.round(views).toString()));
    linha.append(novaColuna(Math.round(clicks).toString()));
    linha.append(novaColuna(Math.round(compartilhamentos).toString()));
    //infomar valores após acrescimo
    var acrescimo_de_views = CalculadoraAcrescimoViews(compartilhamentos); // cada compartilhamento geram 40 novas vizualizações
    views = views + acrescimo_de_views;
    clicks = CalculadoraCliks(views);
    compartilhamentos = CalculadoraCompartilhamento(clicks);
    linha.append(novaColuna(Math.round(acrescimo_de_views).toString()));
    linha.append(novaColuna(Math.round(views).toString()));
    linha.append(novaColuna(Math.round(clicks).toString()));
    linha.append(novaColuna(Math.round(compartilhamentos).toString()));
    $("#resultado").append(linha);
}

export function CalcularViews(dinheiro) {
    var views = dinheiro * 30;
    return views;
}
export function CalculadoraCliks(views) {
    var clicks = views * 0.12;
    return clicks;
}
export function CalculadoraCompartilhamento(clicks) {
    var compartilhamento = (clicks * 0.15) * 4;
    return compartilhamento;
}
export function CalculadoraAcrescimoViews(compartilhamentos) {
    var acrescimo_de_views = compartilhamentos * 40;
    return acrescimo_de_views;
}

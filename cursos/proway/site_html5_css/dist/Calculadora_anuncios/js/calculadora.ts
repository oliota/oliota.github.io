


export function CalcularViews(dinheiro: number) {
    var views: number = dinheiro * 30
    return views
}

export function CalculadoraCliks(views: number) {
    var clicks: number = views * 0.12
    return clicks
}

export function CalculadoraCompartilhamento(clicks: number) {
    var compartilhamento: number = (clicks * 0.15) * 4
    return compartilhamento

}

export function CalculadoraAcrescimoViews(compartilhamentos:number){
    var acrescimo_de_views:number=compartilhamentos*40 
    return acrescimo_de_views
}
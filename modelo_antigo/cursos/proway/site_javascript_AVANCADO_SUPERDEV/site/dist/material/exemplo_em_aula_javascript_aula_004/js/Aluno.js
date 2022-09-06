class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calcularMedia() {
        let soma = 0
        this.notas.forEach(
            function (item) { 
                soma += item
            }
        )

        return soma / notas.length;
    }
    verSituacao(){
        let media=this.calcularMedia()
        if(media>=7){
            return "Aprovado"
        }else{
            return "Reprovado"
        }
    }
}
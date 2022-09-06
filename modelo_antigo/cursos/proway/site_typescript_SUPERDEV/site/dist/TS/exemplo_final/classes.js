export class Programador {
    //#endregion
    constructor(nome, idade) {
        this.setNome(nome);
        this.setIdade(idade);
    }
    //#region encapsulamento
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getIdade() {
        return this.idade;
    }
    //#endregion
    escreveEmTela(texto) {
        console.log(this.getNome() + " Escreve a tag manualmente no html");
    }
}
export class Ajax extends Programador {
    constructor(nome, idade) {
        super(nome, idade);
    }
    escreveEmTela(texto) {
        $.ajax({
            url: "https://httpbin.org/get?texto=Hello World",
            type: "get",
            success: (retorno) => {
                $("body")
                    .append($("<br>"))
                    .append($("<p>", {
                    text: this.getNome() + " Ajax - " + retorno.args.texto
                }));
            },
            error: (erro) => {
            }
        });
    }
}
export class Javascript extends Programador {
    constructor(nome, idade) {
        super(nome, idade);
    }
    escreveEmTela(texto) {
        document.body.append(document.createElement("br"));
        let elemento = document
            .createElement("p")
            .textContent = this.getNome() + " Javascript - " + texto;
        document.body.append(elemento);
    }
}
export class Jquery extends Programador {
    constructor(nome, idade) {
        super(nome, idade);
    }
    escreveEmTela(texto) {
        $("body")
            .append($("<br>"))
            .append($("<p>", {
            text: this.getNome() + " Jquery - " + texto
        }));
    }
}

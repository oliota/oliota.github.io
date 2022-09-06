
export class Programador {
    //#region atributos
    private nome: string;
    private idade: number;
    //#endregion
    constructor(nome: string, idade: number) {
        this.setNome(nome);
        this.setIdade(idade);
    }
    //#region encapsulamento
    setNome(nome: string): void {
        this.nome = nome;
    }
    getNome(): string {
        return this.nome;
    }

    setIdade(idade: number): void {
        this.idade = idade;
    }
    getIdade(): number {
        return this.idade;
    }
    //#endregion

    escreveEmTela(texto: string): void {
        console.log(this.getNome() +" Escreve a tag manualmente no html")
    }
}

export class Ajax extends Programador {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }
    escreveEmTela(texto: string): void {
      
        $.ajax(
            {
                url:"https://httpbin.org/get?texto=Hello World",
                type:"get",
                success:(retorno)=>{
                    
                    $("body")
                    .append(
                        $("<br>")
                    )
                    .append(
                        $("<p>", { 
                            text: this.getNome() +" Ajax - " + retorno.args.texto })
                    )

                },
                error:(erro)=>{

                }
            }
        );
    }
}

export class Javascript extends Programador {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }
    escreveEmTela(texto: string): void { 
    document.body.append(document.createElement("br"));

        let elemento = document
            .createElement("p")
            .textContent = this.getNome() + " Javascript - " + texto;
        document.body.append(elemento);
    }
}

export class Jquery extends Programador {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

      escreveEmTela(texto: string): void {
        $("body")
        .append(
            $("<br>")
        )
        .append(
            $("<p>", { 
                text: this.getNome() +" Jquery - " + texto })
        )
    }
    
}





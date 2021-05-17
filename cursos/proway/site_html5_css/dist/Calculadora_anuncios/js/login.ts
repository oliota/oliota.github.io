import { Usuario } from "./Usuario.js"



var usuarios: Array<Usuario> = new Array
var chave_usuarios = "chave_usuarios_proway"
var chave_usuario_logado = "chave_usuario_logado_proway"

// localStorage.removeItem(chave_usuarios)
if (localStorage.getItem(chave_usuarios) == null) {
    SalvarUsuarios()
} else {
    usuarios = JSON.parse(localStorage.getItem(chave_usuarios))
    console.log(usuarios)
}


function SalvarUsuarios() {
    var lista_em_texto: string = JSON.stringify(usuarios)
    localStorage.setItem(chave_usuarios, lista_em_texto)
    console.clear()
    console.log(usuarios)
}








$("#cadastrar").on(
    "click",
    function () {

        var nome: string = $("#nome").val().toString()
        var login: string = $("#login_cadastro").val().toString()
        var senha: string = $("#senha_cadastro").val().toString()

        var usuario: Usuario = new Usuario(nome, login, senha)

        if (JaExiste(login)) {
            alert("Já existe um usuario com esse login, favor utilizar outro")
            return
        } else { 
            $("input").val("")
            usuarios.push(usuario)
            SalvarUsuarios()
            $("#login").val(login)
            $("#senha").val(login)
            entrar()
        }


    }
)


$("#entrar").on(
    "click",
    entrar 
)

function entrar () {
    var login: string = $("#login").val().toString()
    var senha: string = $("#senha").val().toString()

    var usuario: Usuario = Buscar(login, senha)
    if (usuario == null) {
        alert("Usuario não encontrado")
        return
    } else {
        $("input").val("")
        localStorage.setItem(chave_usuario_logado, JSON.stringify(usuario))
        window.location.href = "cadastro_anuncios.html";
    }
}

function JaExiste(login: string) {
    var achou: boolean = false
    usuarios.forEach(
        function (usuario) {
            if (login == usuario.login) {
                achou = true
                return
            }
        }
    )
    return achou
}


function Buscar(login: string, senha: string) {
    var item: Usuario = null
    usuarios.forEach(
        function (usuario) {
            if (login == usuario.login && senha == usuario.senha) {
                item = usuario
                return
            }
        }
    )
    return item
}
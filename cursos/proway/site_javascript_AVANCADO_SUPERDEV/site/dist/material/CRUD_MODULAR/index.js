const express = require('express')
const cors = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(express.json())
app.use(cors())
 

app.use(
    require('./rotas/animais.js') 
)
  
 
 

app.get("/", (req, res) => {
    console.log("Rota raiz")
    res.send("Esta tudo ok")
})

// localhost:4000
app.listen(4000, () => {
    console.log("o Servidor está esperando requisições na porta 4000...")
})
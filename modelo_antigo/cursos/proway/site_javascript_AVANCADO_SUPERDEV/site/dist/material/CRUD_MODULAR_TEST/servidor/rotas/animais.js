const express = require('express')
const router = express.Router()
router.use(express.json());



const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./banco/cadastros.db');

//================ CRUD

//-----------------CREATE
router.post('/animais',
    (req, res) => {

        let sql = `INSERT INTO Animais(tipo,nome) VALUES(?,?)`;
        let values = [
            req.body.tipo,
            req.body.nome
        ]
        db.run(sql, values, function (err) {
            if (err) {
                return console.log(err.message);
            }

            return res.status(201).json({
                "mensagem": "Item inserido com sucesso",
                "id": this.lastID
            });
        });


    })

//-----------------READ

//Listar todos
router.get('/animais', (req, res) => {

    let sql = `SELECT * FROM Animais `;
    db.all(sql, [], (err, rows) => {
        console.log(rows)
        return res.status(200).json(rows);
    });


}) // rota para listar todos os animais

//Get item
router.get('/animais/:index',
    (req, res) => {

        let sql = `SELECT * FROM Animais where id=${req.params.index}`;
        console.log()
        db.get(sql, [], (err, row) => {
            console.log(row)
            return res.status(200).json(row);
        });

    })

 

//-----------------UPDATE

router.put('/animais/:index',
    (req, res) => {


        let sql = `SELECT * FROM Animais where id=${req.params.index}`;
        db.get(sql, [], (err, row) => {
             
           if(!row){
            return res.status(404).json({
                "mensagem": "Item não localizado com esse id",
                "id": req.params.index 
            });
           }


            let sql = `UPDATE Animais SET
            tipo=?,
            nome=?
            where id=${req.params.index}`;
            let values = [
                req.body.tipo,
                req.body.nome
            ]

            db.run(sql, values, function (err) {
                if (err) {
                    return console.log(err.message);
                }

                return res.status(200).json({
                    "mensagem": "Item atualizado com sucesso", 
                    "linhas atualizadas": this.changes
                });
            }); 
 
        }); 
    });  


//-----------------DELETE

router.delete('/animais/:index',
    (req, res) => {

        db.run(`DELETE FROM Animais WHERE id=?`, req.params.index, function(err) {
            return res.status(200).json({
                "Itens deletados": this.changes
            }); 
          });
 
        
    }); // retorna os dados após exclusão


module.exports = router
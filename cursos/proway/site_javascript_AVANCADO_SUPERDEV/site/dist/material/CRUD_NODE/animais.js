
const express = require('express');
const cors = require('cors');
const router = express.Router()
  
router.use(cors());
router.use(express.json()); // faz com que o express entenda JSON

const animais = [
    { tipo: 'gato', nome: "Vézû" },
    { tipo: 'cachorro', nome: "Tótó" },
    { tipo: 'coelho', nome: 'Perna longa' },
    { tipo: 'passarinho', nome: "pica-pau" }
];


//Listar todos
router.get('/animais', (req, res) => {
    return res.status(200).json(pessoas);
}) // rota para listar todos os animais

// router.use((req, res, next) => { // server.use cria o middleware global
//     console.time('Request'); // marca o início da requisição
//     console.log(`Método: ${req.method}; URL: ${req.url}; `); // retorna qual o método e url foi chamada

//     next(); // função que chama as próximas ações 

//     console.log('Finalizou'); // será chamado após a requisição ser concluída

//     console.timeEnd('Request'); // marca o fim da requisição
// });
    
 

// function validar(req, res, next) {
//     if (!req.body.tipo) {
//         return res.status(400).json({ error: 'o tipo do animal não foi informado' });
//         // middleware local que irá checar se a propriedade tipo foi infomada, 
//         // caso negativo, irá retornar um erro 400 - BAD REQUEST 
//     }
//     if (!req.body.nome) {
//         return res.status(400).json({ error: 'o nome do animal não foi informado' });
//         // middleware local que irá checar se a propriedade nome foi infomada, 
//         // caso negativo, irá retornar um erro 400 - BAD REQUEST 
//     }
//     return next(); // se o nome for informado corretamente, a função next() chama as próximas ações
// }

// function naoExiste(req, res, next) {
//     const animal = pessoas[req.params.index];
//     if (!animal) {
//         return res.status(404).json({ error: 'animal não encontrado' });
//     } // checa se o animal existe no array, caso negativo informa que o index não existe no array

//     req.animal = animal;

//     return next();
// }



// //================ CRUD

// //-----------------CREATE
// router.post('/animais', validar, (req, res) => {
//     // const {  } = req.body; // assim esperamos buscar o name informado dentro do body da requisição  
//     pessoas.push(req.body);
//     return res.status(201).json({
//         "mensagem": "Item inserido com sucesso" ,
//         "objeto":req.body
//     }); // retorna a informação da variavel animais
// })

// //-----------------READ

// //Listar todos
// router.get('/animais', (req, res) => {
//     return res.status(200).json(pessoas);
// }) // rota para listar todos os animais

// //Get item
// router.get('/animais/:index', naoExiste, (req, res) => {
//     return res.status(200).json(req.animal);
// })

// //-----------------UPDATE

// router.put('/animais/:index', naoExiste, validar, (req, res) => {
//     const { index } = req.params; // recupera o index com os dados
//     // const { name } = req.body;
//     let antes = pessoas[index];
//     pessoas[index] = req.body; // sobrepõe/edita o index obtido na rota de acordo com o novo valor
//     return res.status(200).json({
//         "mensagem": "Item atualizado com sucesso",
//         "antes": antes,
//         "depois": pessoas[index]
//     });
// }); // retorna novamente os animais atualizados após o update


// //-----------------DELETE

// router.delete('/animais/:index', naoExiste, (req, res) => {
//     const { index } = req.params; // recupera o index com os dados

//     pessoas.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array

//     return res.status(200).json({
//         "mensagem": "Item deletado com sucesso"
//     });
// }); // retorna os dados após exclusão
 
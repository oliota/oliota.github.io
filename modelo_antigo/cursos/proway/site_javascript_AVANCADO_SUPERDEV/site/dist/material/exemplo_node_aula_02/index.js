const express = require('express');
const cors= require('cors');

const server = express();

server.use(cors());
server.use(express.json()); // faz com que o express entenda JSON
 
// Route params = /animais/1
// Request body = { "tipo": "Gato", "nome": "bixano"}

// CRUD - Create, Read, Update, Delete

const animais = [
    { tipo: 'gato', nome: "Vézû" },
    { tipo: 'cachorro', nome: "Tótó" },
    { tipo: 'coelho', nome: 'Perna longa' },
    { tipo: 'passarinho', nome: "pica-pau" }
];

server.use((req, res, next) => { // server.use cria o middleware global
    console.time('Request'); // marca o início da requisição
    console.log(`Método: ${req.method}; URL: ${req.url}; `); // retorna qual o método e url foi chamada

    next(); // função que chama as próximas ações 

    console.log('Finalizou'); // será chamado após a requisição ser concluída

    console.timeEnd('Request'); // marca o fim da requisição
});

function validar(req, res, next) {
    if (!req.body.tipo) {
        return res.status(400).json({ error: 'o tipo do animal não foi informado' });
        // middleware local que irá checar se a propriedade tipo foi infomada, 
        // caso negativo, irá retornar um erro 400 - BAD REQUEST 
    }
    if (!req.body.nome) {
        return res.status(400).json({ error: 'o nome do animal não foi informado' });
        // middleware local que irá checar se a propriedade nome foi infomada, 
        // caso negativo, irá retornar um erro 400 - BAD REQUEST 
    }
    return next(); // se o nome for informado corretamente, a função next() chama as próximas ações
}

function naoExiste(req, res, next) {
    const animal = animais[req.params.index];
    if (!animal) {
        return res.status(404).json({ error: 'animal não encontrado' });
    } // checa se o animal existe no array, caso negativo informa que o index não existe no array

    req.animal = animal;

    return next();
}

server.get('/animais', (req, res) => {
    return res.status(200).json(animais);
}) // rota para listar todos os animais

server.get('/animais/:index', naoExiste, (req, res) => {
    return res.status(200).json(req.animal);
})

server.post('/animais', validar, (req, res) => {
   // const {  } = req.body; // assim esperamos buscar o name informado dentro do body da requisição  
    animais.push(req.body );
    return res.status(201).json(animais); // retorna a informação da variavel animais
})

server.put('/animais/:index', naoExiste, validar, (req, res) => {
    const { index } = req.params; // recupera o index com os dados
   // const { name } = req.body;
    animais[index] = req.body; // sobrepõe/edita o index obtido na rota de acordo com o novo valor
    return res.status(200).json(animais);
}); // retorna novamente os animais atualizados após o update

server.delete('/animais/:index', naoExiste, (req, res) => {
    const { index } = req.params; // recupera o index com os dados

    animais.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array

    return res.status(200).send();
}); // retorna os dados após exclusão
server.listen(3000);

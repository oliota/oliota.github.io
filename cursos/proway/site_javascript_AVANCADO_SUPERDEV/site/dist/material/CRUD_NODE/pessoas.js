

//================ CRUD

//-----------------CREATE
server.post('/pessoas', validar, (req, res) => {
    // const {  } = req.body; // assim esperamos buscar o name informado dentro do body da requisição  
    pessoas.push(req.body);
    return res.status(201).json({
        "mensagem": "Item inserido com sucesso" ,
        "objeto":req.body
    }); // retorna a informação da variavel pessoas
})

//-----------------READ

//Listar todos
server.get('/pessoas', (req, res) => {
    return res.status(200).json(pessoas);
}) // rota para listar todos os pessoas

//Get item
server.get('/pessoas/:index', naoExiste, (req, res) => {
    return res.status(200).json(req.pessoa);
})

//-----------------UPDATE

server.put('/pessoas/:index', naoExiste, validar, (req, res) => {
    const { index } = req.params; // recupera o index com os dados
    // const { name } = req.body;
    let antes = pessoas[index];
    pessoas[index] = req.body; // sobrepõe/edita o index obtido na rota de acordo com o novo valor
    return res.status(200).json({
        "mensagem": "Item atualizado com sucesso",
        "antes": antes,
        "depois": pessoas[index]
    });
}); // retorna novamente os pessoas atualizados após o update


//-----------------DELETE

server.delete('/pessoas/:index', naoExiste, (req, res) => {
    const { index } = req.params; // recupera o index com os dados

    pessoas.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array

    return res.status(200).json({
        "mensagem": "Item deletado com sucesso"
    });
}); // retorna os dados após exclusão
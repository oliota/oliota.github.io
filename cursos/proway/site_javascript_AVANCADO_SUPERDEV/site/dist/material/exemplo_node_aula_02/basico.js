const express = require('express');
const server = express();
const cors= require('cors');

server.use(cors());

server.get('/basico', (req, res) => {
return res.json( { message: 'Hello world' });
})

server.listen(4000);
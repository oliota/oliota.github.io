const test = require('tape');
const supertest = require('supertest');

const app = require('../index');

test('GET /animais', (t) => {
    supertest(app)
        .get('/animais')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros');
            t.assert(res.body.length > 0, `Lista com ${res.body.length} itens`);
            t.end();
        })
})
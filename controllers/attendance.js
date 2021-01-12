const Atendimento = require('../models/attendance')


module.exports = app => {
    app.get('/atendimentos', function(req, resp){
        resp.send('You are in the attendance route ')
    });

    app.post('/atendimentos', function(req, resp){
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        resp.send('You are on the service route and doing a POST method')
    })
}


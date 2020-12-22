module.exports = app => {
    app.get('/atendimentos', function(req, resp){
        resp.send('Você esta na rota de atendimentos')
    });

    app.post('/atendimentos', function(req, resp){
        console.log(req.body)
        resp.send('Você esta na rota de atendimentos e esta fazendo um POST')
    })
}


const customExpress = require('./config/custom-express');

const app = customExpress();

app.listen(3000, function(){
    console.log('servidor rodando na porta 3000')
});


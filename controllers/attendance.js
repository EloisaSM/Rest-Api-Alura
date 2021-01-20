const Attendance = require('../models/attendance')


module.exports = app => {
    app.get('/atendimentos', function(req, resp){
        resp.send('You are in the attendance route ')
    });

    app.post('/atendimentos', function(req, resp){
        const attendance = req.body

        Attendance.add(attendance,resp)
    })
}

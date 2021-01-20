const moment = require('moment')

const connection = require('../infraestructure/conection')

class Attendance {
    add(attendance,resp) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(attendance.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const dateAttendance = {...attendance,dataCriacao, data}

        const sql = 'INSERT INTO Atendimentos SET ?'

        connection.query(sql, dateAttendance, function(error, result) {
            if(error) {
                resp.status(400).json(error)
            }else{
                resp.status(201).json(result)
            }
        })
    }
}

module.exports = new Attendance
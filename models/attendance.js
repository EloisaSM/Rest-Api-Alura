const connection = require('../infraestructure/conection')

class Attendance {
    add(attendance) {
        const sql = 'INSERT INTO Atendimentos SET ?'

        connection.query(sql, attendance, function(error, result) {
            if(error) {
                console.log(error)
            }else{
                console.log(result)
            }
        })
    }
}

module.exports = new Attendance
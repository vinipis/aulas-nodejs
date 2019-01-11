var mysql = require('mysql');

var connMySQL = function(){
    console.log("Conexão estabelecida")
    return mysql.createConnection({
        host:       'localhost',
        user:       'root',
        password:   'GomariaDB',
        database:   'portal_noticias'
    });
}
module.exports = function(){
    console.log('O autoload carregou o modulo de conexão com bd')
    return connMySQL;
}

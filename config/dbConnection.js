var mysql = require('mysql');

module.exports = function() {

    return  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'aramis29',
        database: 'portal_noticias'
    });

}
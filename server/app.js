const mysql = require('mysql')
require ('dotenv').config();

var connection = mysql.createConnection({
    host: 'localhost',
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
});

connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log('Connected to database');
    }
})

connection.query('SELECT * from barList', function(err, results, fields) {
    if (err) 
        throw err;

        results.forEach(result => {
            console.log(result);
        })
});

connection.end();
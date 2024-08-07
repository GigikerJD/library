const mysql2 = require("mysql2");

mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'library',
    password: '12345678'
});

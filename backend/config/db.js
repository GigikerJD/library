import mysql2 from 'mysql2';

const dbConn = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'library',
    password: '12345678'
});

dbConn.connect((err) => {
    if(err) console.error("Impossible d'accéder à la base de données...");
    else console.log("Vous êtes relié à la base de données : ", dbConn.config.database);
});


export default dbConn;
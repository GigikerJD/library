const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const bcrypt = require("bcrypt");
const mysql2 = require("mysql2");
const { myRoutes } = require("./routes");


const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbConn = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'library',
    password: '12345678'
});


const PORT = 3001;

try {
    dbConn.connect();
    console.log("Connected to database", dbConn.config.database);
} catch (err) {
    console.error("Error trying to connect to the database...", err);
}

app.get("/", (req, res) => {
    res.json({ myMessage: "Hello from the backend server..." });
});

// MY ROUTES
app.get(myRoutes.users, async (req, res) => {
    const query = "SELECT * FROM utilisateur";
    try {
        const [results] = await dbConn.query(query);
        res.json(results);
    } catch (err) {
        console.error("Error executing query", err);
        res.status(500).json({ error: err.message });
    }
});

app.post(myRoutes.user, async (req, res) => {
    const { EMAIL, PASSWORD } = req.body;
    const query = "SELECT * FROM utilisateur WHERE email = ?";
    try {
        const [rows] = dbConn.query(query, [EMAIL]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        
        const user = rows[0];
        const isMatch = await bcrypt.compare(PASSWORD, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid password" });
        }

        res.status(200).json({ message: "Authentication successful" });
    } catch (err) {
        console.error("Error executing query", err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

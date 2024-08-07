const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const PORT = 3001;

app.get("/", (req, res) => {
    res.send("Hello from the backend server...");
});

app.listen(PORT, () => {
    console.log("Server is running at http://localhost", PORT);
})
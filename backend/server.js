import bodyParser from "body-parser";
import express from 'express';
import cors from 'cors';
import user from './routes/user.js';
//import book from './routes/book.js';
//import author from './routes/author.js';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());
//app.use(book);
app.use(user);
//app.use(author);


app.get("/", (_, res) => {
    res.send("Bonjour, depuis le serveur...");
});

app.listen(PORT, () => console.log(`Vous êtes connecté à l'hote suivant : http://localhost:${PORT}`));
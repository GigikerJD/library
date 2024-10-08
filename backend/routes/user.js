import express from 'express';
import dbConn from "../config/db.js";
import bcrypt from "bcrypt";
import { apiRoutes } from './routes.js';

const router = express.Router();

//Retourne les utilisateurs - OK
router.get(apiRoutes.users, (_, res) => {
    const query = "SELECT * FROM utilisateur";
    dbConn.promise().query(query)
        .then(([results]) => res.status(200).json(results))
        .catch(() => res.status(500).json({message: "Requête non traitée..."}));
});

//Retourne un utilisateur selon son email - OK
router.get(apiRoutes.user.concat("/:email"), (req, res) => {
    const email = req.params.email;
    const query = "SELECT * FROM utilisateur WHERE email = ?";
    dbConn.promise().query(query, [email])
        .then(([results]) => res.status(200).json(results[0]))
        .catch(() => res.status(500).json({message: "Requête non traitée..."}));
});

//Connexion - OK
router.post(apiRoutes.user, (req, res) => {
    const {email, password} = req.body;
    const query = "SELECT * FROM utilisateur WHERE email = ?";
    dbConn.promise().query(query, [email])
        .then(async ([results]) => {
            if(results.length === 0) res.status(404).json({message: "Utilisateur inconnu..."});
            const isPassValid = await bcrypt.compare(password, results[0].password);
            if(isPassValid) res.status(202).json({message: "Bienvenue", role: results[0].role});
            else res.status(404).json({message: "Mot de passe incorrect !"});
        })
        .catch(() => res.status(500));
});

//Inscription - OK
router.post(apiRoutes.newUser, async (req, res) => {
    const {email, password, firstname, lastname, DOB, gender, role} = req.body;
    const query = "INSERT INTO utilisateur (email, password, firstname, lastname, DOB, gender, role) values (?)";
    const hashed = await bcrypt.hash(password, 10);
    const values = [email, hashed, firstname, lastname, DOB, gender, role];
    dbConn.query(query, [values], (err) => {
        if(err) res.status(409).json({message: "Un utilisateur avec cet email existe déjà !"});
        res.status(201).json({message: "Votre compte à été créé avec succès !"});
    });
});

//Changement d'email existant
router.put(apiRoutes.user.concat("/:email"), (req, res) => {
    const currentEmail = req.params.email;
    const { newEmail } = req.body;

    if (!newEmail || newEmail === currentEmail) 
        return res.status(400).json({ message: "Vous devez saisir un nouvel email !" });

    const query = "UPDATE utilisateur SET email = ? WHERE email = ?";
    const values = [newEmail, currentEmail];

    dbConn.promise().query(query, values)
        .then(([result]) => {
            if (result.affectedRows === 0) 
                return res.status(404).json({ message: "Email actuel non trouvé." });
            res.status(202).json({ message: "Votre email a été modifié" });
        })
        .catch((error) => {
            console.error("Database error:", error); // Logging the error for debugging
            res.status(500).json({ message: "Requête non traitée" });
        });
});

//Changement de prénom
router.put(apiRoutes.user.concat("/:email/firstname"), (req, res) => {
    const { firstname } = req.body;
    const email = req.params.email;
    const query = "UPDATE utilisateur SET firstname = ? WHERE email = ?";
    dbConn.promise().query(query, [firstname, email])
        .then(([results]) => {
            if(results.affectedRows === 1) res.status(202).json({message: 'Votre prénom a bien été modifiée'});
        })
        .catch(() => res.status(500).json({message: "Requête non traitée"}));
});

//Changement de nom
router.put(apiRoutes.user.concat("/:email/lastname"), (req, res) => {
    const {lastname} = req.body;
    const email = req.params.email;
    const query = " UPDATE utilisateur SET lastname = ? WHERE email = ?";
    dbConn.promise().query(query, [lastname, email])
        .then(([results]) => {
            if(results.affectedRows === 1) res.status(202).json({message: "Votre nom a bien été modifiée"});
        })
        .catch(() => res.status(500).json({message: "Requête non traitée"}));
});

//Changement de mot de passe    
router.put(apiRoutes.user.concat("/:email/password"),async (req, res) => {
    const {password} = req.body;
    const email = req.params.email;
    const hashed = await bcrypt.hash(password, 10);
    const query = "UPDATE utilisateur SET password = ? WHERE email = ?";
    dbConn.promise().query(query, [hashed, email])
        .then(([results]) => {
            if(results.affectedRows === 1) res.status(200).json({message: "Votre mot de passe a été modifiée"});
        })
        .catch(() => res.status(500).json({message: "Requête non traitée"}));
});

//Suppression d'un compte existant
router.delete(apiRoutes.user.concat("/:email"), (req, res) => {
    const email = req.params.email;
    const query = "DELETE FROM utilisateur WHERE email = ?";

    dbConn.promise().query(query, [email])
        .then(() => res.status(204).json({message: "Votre compte a été supprimé avec succès !"}))
        .catch(() => res.status(500).json({message: "Requête non traitée"}));
})


export default router;
create database library;

use library;

CREATE TABLE Utilisateur(
   email VARCHAR(200),
   firstname VARCHAR(100),
   lastname VARCHAR(100),
   password VARCHAR(100),
   age INT,
   address VARCHAR(200),
   role VARCHAR(50),
   DOB DATE,
   PRIMARY KEY(email)
);

CREATE TABLE Panier(
   idPanier VARCHAR(400),
   amount DECIMAL(4,2),
   datePurchased DATETIME,
   PRIMARY KEY(idPanier)
);

CREATE TABLE Auteur(
   id INT,
   firstname VARCHAR(100),
   lastname VARCHAR(100),
   DOB DATE,
   image VARCHAR(250),
   courant VARCHAR(100),
   description VARCHAR(1000),
   PRIMARY KEY(id)
);

CREATE TABLE Livre(
   ISBN VARCHAR(50),
   title VARCHAR(150),
   yearPublished INT,
   numberOfPages INT,
   quantity INT,
   price DECIMAL(4,2),
   image VARCHAR(500),
   id INT NOT NULL,
   PRIMARY KEY(ISBN),
   FOREIGN KEY(id) REFERENCES Auteur(id)
);

CREATE TABLE Acheter(
   email VARCHAR(200),
   ISBN VARCHAR(50),
   PRIMARY KEY(email, ISBN),
   FOREIGN KEY(email) REFERENCES Utilisateur(email),
   FOREIGN KEY(ISBN) REFERENCES Livre(ISBN)
);

CREATE TABLE Rembourser(
   email VARCHAR(200),
   ISBN VARCHAR(50),
   PRIMARY KEY(email, ISBN),
   FOREIGN KEY(email) REFERENCES Utilisateur(email),
   FOREIGN KEY(ISBN) REFERENCES Livre(ISBN)
);

CREATE TABLE Emballer(
   idPanier VARCHAR(400),
   ISBN VARCHAR(50),
   PRIMARY KEY(idPanier, ISBN),
   FOREIGN KEY(idPanier) REFERENCES Panier(idPanier),
   FOREIGN KEY(ISBN) REFERENCES Livre(ISBN)
);

CREATE TABLE Créer(
   email VARCHAR(200),
   idPanier VARCHAR(400),
   PRIMARY KEY(email, idPanier),
   FOREIGN KEY(email) REFERENCES Utilisateur(email),
   FOREIGN KEY(idPanier) REFERENCES Panier(idPanier)
);

create database library;

use library;

CREATE TABLE Utilisateur(
   email VARCHAR(150),
   password VARCHAR(300),
   firstname VARCHAR(100),
   lastname VARCHAR(100),
   role VARCHAR(20),
   DOB DATE,
   gender VARCHAR(10),
   profile_picture VARCHAR(500),
   PRIMARY KEY(email)
);

CREATE TABLE Auteur(
   idAuthor INT AUTO_INCREMENT,
   firstname VARCHAR(100),
   lastname VARCHAR(100),
   DOB DATE,
   DOD DATE,
   profile_picture VARCHAR(500),
   PRIMARY KEY(idAuthor)
);

CREATE TABLE Panier(
   purchaseID VARCHAR(500),
   purchaseDate DATETIME,
   PRIMARY KEY(purchaseID)
);

CREATE TABLE Livre(
   ISBN VARCHAR(50),
   title VARCHAR(200),
   numPages INT,
   yearPublished INT,
   profile_picture VARCHAR(500),
   idAuthor INT NOT NULL,
   PRIMARY KEY(ISBN),
   FOREIGN KEY(idAuthor) REFERENCES Auteur(idAuthor)
);

CREATE TABLE Emprunter(
   email VARCHAR(150),
   ISBN VARCHAR(50),
   borrowDate DATE,
   returnDate DATE,
   PRIMARY KEY(email, ISBN),
   FOREIGN KEY(email) REFERENCES Utilisateur(email),
   FOREIGN KEY(ISBN) REFERENCES Livre(ISBN)
);

CREATE TABLE Ajouter(
   ISBN VARCHAR(50),
   purchaseID VARCHAR(500),
   PRIMARY KEY(ISBN, purchaseID),
   FOREIGN KEY(ISBN) REFERENCES Livre(ISBN),
   FOREIGN KEY(purchaseID) REFERENCES Panier(purchaseID)
);



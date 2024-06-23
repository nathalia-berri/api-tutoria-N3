-------------- CRIANDO A DATABASE --------------
mysql -u root
CREATE DATABASE tutoria;
USE tutoria;

-------------- CRIANDO AS TABELAS --------------
-- TABELA autor
CREATE TABLE tutor (
cpf INT PRIMARY KEY,
nome VARCHAR(100),
email VARCHAR(100)
);

-- TABELA pet
CREATE TABLE pet (
codigo_pet INT AUTO_INCREMENT PRIMARY KEY,
nome_pet VARCHAR(50),
genero_pet VARCHAR(50),
cpf_tutor INT,
FOREIGN KEY (cpf_tutor) REFERENCES tutor(cpf)
);

-- TABELA altura
CREATE TABLE altura (
id_altura INT AUTO_INCREMENT PRIMARY KEY,
altura VARCHAR(50),
codigo_pet INT,
FOREIGN KEY (codigo_pet) REFERENCES pet(codigo_pet)
);

CREATE DATABASE aula_add2;
USE aula_add2;
CREATE TABLE usuarios(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(60) NOT NULL,
email VARCHAR(60) NOT NULL,
senha VARCHAR(60) NOT NULL
);

INSERT INTO usuarios VALUES
(1, "Guilherme", "guilherme@gmail.com", "123456"),
(default, "Giovanna", "gica@gmail.com", "123456"),
(default, "Henrique", "henrique@gmail.com", "123456");

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE id = 1;
CREATE DATABASE controle;

USE controle;

CREATE TABLE inventario(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome_peca VARCHAR(40) NOT NULL,
codigo_peca VARCHAR(30) NOT NULL,
fornecedor VARCHAR(20) NOT NULL,
quantidade INT NOT NULL,
preco_unitario DECIMAL(10, 2) NOT NULL,
estoque INT NOT NULL
);

SELECT * FROM pecas;
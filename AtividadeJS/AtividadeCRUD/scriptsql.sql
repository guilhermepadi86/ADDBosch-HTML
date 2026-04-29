CREATE DATABASE vendas_produtos;

USE vendas_produtos;

CREATE TABLE produtos(
id_produto INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome_produto VARCHAR(50) NOT NULL,
categoria_produto VARCHAR(20) NOT NULL,
preco_unitario DECIMAL (10, 2) NOT NULL
);

CREATE TABLE vendedores(
id_vendedor INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome_vendedor VARCHAR(50) NOT NULL,
data_nasc DATE NOT NULL,
telefone VARCHAR(20) NOT NULL
);

CREATE TABLE pagamento(
id_pagamento INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
tipo_pagamento VARCHAR(20) NOT NULL
);

CREATE TABLE vendas(
id_venda INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
fk_produto INT NOT NULL,
data_venda DATE NOT NULL,
fk_pagamento INT NOT NULL,
fk_vendedor INT NOT NULL,
valor_total DECIMAL(10, 2) NOT NULL,

CONSTRAINT fk_produto_vendas
	FOREIGN KEY (fk_produto)
    REFERENCES produtos (id_produto)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

CONSTRAINT fk_pagamento_vendas
	FOREIGN KEY (fk_pagamento)
    REFERENCES pagamento (id_pagamento)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    
CONSTRAINT fk_vendedor_vendas
	FOREIGN KEY (fk_vendedor)
    REFERENCES vendedores (id_vendedor)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

INSERT INTO produtos (nome_produto,categoria_produto,preco_unitario) VALUES ("Banana","Alimento", 2.99);
INSERT INTO vendedores (nome_vendedor,data_nasc,telefone) VALUES ("Guilherme","2003-11-30", "41 99286-7790");
INSERT INTO pagamento (tipo_pagamento) VALUES ("PIX");

SELECT * FROM pagamento;

drop database vendas_produtos;
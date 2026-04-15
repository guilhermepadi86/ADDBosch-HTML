USE aula_add2;
CREATE TABLE Aprendiz(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(60) NOT NULL,
setor VARCHAR(60) NOT NULL,
idade NUMERIC(5) NOT NULL
);

INSERT INTO Aprendiz VALUES
(1, "Guilherme", "PUQ252", "22"),
(default, "Rafael", "BPS KKKKKKKKKKKKKKKKKK", "20"),
(default, "Henrique", "QMM.", "19");

SELECT * FROM Aprendiz;

SELECT * FROM Aprendiz WHERE id = 1;

DROP TABLE Aprendiz;
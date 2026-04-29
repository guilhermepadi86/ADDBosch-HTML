const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "vendas_produtos",
    port: 3307
})

if(connection){
    console.log("Banco de dados conectado!")
}

app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.get('/produtos', (req, res) => {
    connection.query("SELECT * FROM produtos", (err, results) => {
        if(err){
            return
        }
        console.log(results)
        res.status(200).send(results)
    })
})

app.get('/vendedores', (req, res) => {
    connection.query("SELECT * FROM vendedores", (err, results) => {
        if(err){
            return
        }
        console.log(results)
        res.status(200).send(results)
    })
})

app.get('/pagamento', (req, res) => {
    connection.query("SELECT * FROM pagamento", (err, results) => {
        if(err){
            return
        }
        console.log(results)
        res.status(200).send(results)
    })
})

app.post('/registro_produto', (req, res) => {
    const { nome, categoria, preco } = req.body
    connection.query("INSERT INTO produtos (nome_produto,categoria_produto,preco_unitario) VALUES (?,?,?)",
        [nome, categoria, preco]
    )

    return res.status(201).send({ response: "Produto registrado com sucesso!"})
})

app.get('/registro_vendedores', (req, res) => {
    connection.query("INSERT INTO vendedores (nome_vendedor,data_nasc,telefone) VALUES (?,?,?);", (err, results) => {
        if(err){
            return
        }
        console.log(results)
        res.status(200).send(results)
    })
})

app.get('/registro_pagamento', (req, res) => {
    connection.query("INSERT INTO pagamento (tipo_pagamento) VALUES (?)", (err, results) => {
        if(err){
            return
        }
        console.log(results)
        res.status(200).send(results)
    })
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})
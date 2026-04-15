const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()
const port = 8080

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "aula_add2",
    port: 3307
})

app.get('/usuarios', (req, res) => {
    connection.query("SELECT * FROM usuarios", (err, results) => {
        if (err){
            return
        }
        res.status(200).send(results)
    })
})

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params
    connection.query("SELECT * FROM usuarios WHERE id = ?",
        [id],
        (err, results) => {
            if (err){
                return
            }
            return res.status(200).send(results[0])
    })
})

app.post('/registro', (req, res) => {
    const { nome, email, senha } = req.body
    connection.query("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senha])

    return res.status(201).send({response: "Usuário Registrado com Sucesso"})
})

// Atividade
app.get('/aprendiz', (req, res) => {
    connection.query("SELECT * FROM Aprendiz", (err, results) => {
        if (err){
            return
        }
        res.status(200).send(results)
    })
})

app.post('/registroAprendiz', (req, res) => {
    const { nome, setor, idade } = req.body
    connection.query("INSERT INTO Aprendiz (nome, setor, idade) VALUES (?, ?, ?)", [nome, setor, idade])

    return res.status(201).send({response: "Usuário Registrado com Sucesso"})
})
// FIM

app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})
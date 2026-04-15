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
        res.status(200).send({ usuarios: results})
    })
})

app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})
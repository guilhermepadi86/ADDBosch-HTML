import { response } from 'express'
import { connection } from "../database/db.js"

export const allObjects = (req, res) => {
    const objetos = connection.query('SELECT * FROM lost', (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Erro ao coletar dados"} )
        }
        else {
            return res.status(200).send(results)
        }
    })
}

export const createObject = (req, res) => {
    const { nome, local, data, status, descricao } = req.body

    try {
        connection.query('INSERT INTO lost (nome, local, data, status, descricao) VALUES (?,?,?,?,?)',
            [nome, local, data, status, descricao],
            (err, results) => {
                if (err) {
                    return res.status(500).send({ response: "Erro ao inserir dados"} )
                }
            }
        )
        return res.status(200).send({ response: "Objeto registrado com sucesso"} )
    }
    catch {
        return res.status(500).send({ response: "Erro ao acessar banco"} )
    }
}

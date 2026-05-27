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

export const getDescription = (req, res) => {
    const { id } = req.params

    const description = connection.query('SELECT descricao FROM lost WHERE id = ?',
        [id],
        (err, results) => {
            if (err) {
                return res.status(500).send({ response: `Erro ao coletar descrição`})
            }
            else {
                return res.status(200).send(results)
            }
        }
    )
}

export const getLocal = (req, res) => {
    const { id } = req.params

    const local = connection.query('SELECT local FROM lost WHERE id = ?',
        [id],
        (err, results) => {
            if (err) {
                return res.status(500).send({ response: `Erro ao coletar local`})
            }
            else {
                return res.status(200).send(results)
            }
        }
    )
}

export const getData = (req, res) => {
    const { id } = req.params

    const data = connection.query('SELECT data FROM lost WHERE id = ?',
        [id],
        (err, results) => {
            if (err) {
                return res.status(500).send({ response: `Erro ao coletar data`})
            }
            else {
                return res.status(200).send(results)
            }
        }
    )
}

export const changeStatus = (req, res) => {
    const { id } = req.params
    const newStatus = 'Entregue'
    try {
        connection.query('UPDATE lost SET status=?',
            [newStatus],
            (err, results) => {
                if (err) {
                    return res.status(500).send({ response: "Erro ao atualizar o status de entrega" })
                }
                else {
                    return res.status(200).send({ response: "Status atualizado"})
                }
            }
        )
    }
    catch {
        return res.status(500).send({ response: "Erro ao atualizar" })
    }
}
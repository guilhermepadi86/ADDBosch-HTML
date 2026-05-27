import { response } from 'express'
import { connection } from '../database/db.js'

export const validateObject = (req, res, next) => {
    const { nome, local, data, status, descricao } = req.body

    if ( !nome || nome.length < 3 || nome.trim() == "" ||
         !local || local.length < 3 || local.trim() == "" ||
         !data || data.length < 3 || data.trim() == "" ||
         !status || status.length < 3 || status.trim() == "" ||
         !descricao || descricao.length < 3 || descricao.trim() == "" ) {

        return res.status(400).send({ response: "Revise os dados digitados"} )
    }

    const dataHoje = new Date().toISOString().split('T')[0]
    const dataTeste = new Date(dataHoje)
    const dataVerif = new Date(data)

    if (dataVerif.getTime() > dataTeste.getTime()) {
        return res.status(400).send({ response: "A data não pode ser futura"} )
    }

    next()
}
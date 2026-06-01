import { response } from "express"
import { connection } from "../database/db.js"

export const allFunc = (req, res) => {
    const funcionarios = connection.query('SELECT * FROM funcionarios', (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Erro ao coletar dados"})
        }
        else {
            return res.status(200).send(results)
        }
    })
}

export const cadastroFunc = (req, res) => {
    const {nome, sobrenome, setor, funcao} = req.body

    try{
        connection.query('INSERT INTO funcionarios (nome, sobrenome, setor, funcao) VALUES (?,?,?,?)', [nome, sobrenome, setor, funcao],
            (err, results) => {
                if (err) {
                    return res.status(500).send({ response: "Erro ao inserir dados" })
                }
                else {
                    return res.status(200).send({ response: "Funcionário cadastrado com sucesso"})
                }
            }
        )
    }
    catch {
        return res.status(500).send({ response: "Erro ao acessar o banco de dados" })
    }
}

export const deleteFunc = (req, res) => {
    const { id } = req.params

    try{
        connection.query('DELETE FROM funcionarios WHERE id=?', [id],
            (err, results) => {
                if (err) {
                    return res.status(500).send({response: "Erro ao tentar deletar funcionário"})
                }
                else {
                    return res.status(200).send({response: "Funcionário deletado com sucesso"})
                }
            }
        )
    }
    catch {
        return res.status(500).send({response: "Erro ao acessar o banco de dados"})
    }
}

export const getFunc = (req, res) => {
    const { setor } = req.params

    const funcionario = connection.query('SELECT * FROM funcionarios WHERE setor=?',[setor] ,(err, results) => {
        if (err) {
            return res.status(500).send({ response: "Erro ao coletar dados"})
        }
        else {
            return res.status(200).send(results)
        }
    })
}

export const attFunc = (req, res) => {
    const { id } = req.params
    const { nome, sobrenome, setor, funcao } = req.body

    try {
        connection.query('UPDATE funcionarios SET nome=?, sobrenome=?, setor=?, funcao=? WHERE id=?', [nome, sobrenome, setor, funcao, id] ,
            (err, results) => {
                if (err) {
                    return res.status(500).send({ response: "Erro ao inserir dados" })
                }
                else {
                    return res.status(200).send({ response: "Funcionário atualizado com sucesso"})
                }
            }
        )
    }
    catch {
        return res.status(500).send({ response: "Erro ao acessar o banco de dados" })
    }
}
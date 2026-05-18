import { response } from "express"
import { connection } from "../database/db.js"

export const criarPeca = (req, res) => {
    const { nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque} = req.body

    if (estoque < 0 ) {
        return res.status(400).send({ response: "Valor inválido para estoque"})
    }

    try {
        connection.query('INSERT INTO inventario (nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque) VALUES (?,?,?,?,?,?)',
            [nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque],
            (err, results) => {
                if (err) {
                    return res.status(500).send({ response: "Erro ao inserir dados"})
                }
            }
        )
        return res.status(200).send({ response: "Peça registrada com sucesso"})
    }
    catch{
        return res.status(500).send({ response: "Erro ao acessar banco"})
    }
}

export const allPecas = (req, res) => {
    const pecas = connection.query('SELECT * FROM inventario', (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Erro ao coletar dados"})
        }
        else {
            return res.status(200).send(results)
        }
    })
}

export const getPeca = (req, res) => {
    const { id } = req.params
    const peca = connection.query('SELECT * FROM inventario where id = ?',
        [id],
        (err, results) => {
            if (err) {
                return res.status(500).send({ response: "Erro ao coletar dados"})
            }
            else {
                return res.status(200).send(results)
            }
        }
    )
}

export const atualizarPeca = (req, res) => {
    const { id } = req.params
    const { nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque} = req.body

    if (estoque < 0 ) {
        return res.status(400).send({ response: "Valor inválido para estoque"})
    }

    try {
        connection.query('UPDATE inventario SET nome_peca=?, codigo_peca=?, fornecedor=?, quantidade=?, preco_unitario=?, estoque=? WHERE id=?',
            [nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque, id],
            (err, results) => {
                if (err) {
                    return res.status(500).send({ response: "Erro ao atualizar peça"} )
                }
                else {
                    return res.status(200).send({ response: "Peça atualizada com sucesso"} )
                }
            }
        )
    }
    catch{
        return res.status(500).send({ response: "Erro ao acessar banco de dados"} )
    }
}

export const deletarPeca = (req, res) => {
    const { id } = req.params

    try{
        connection.query('DELETE FROM inventario WHERE id=?',
            [id],
            (err, results) => {
                if (err) {
                    return res.status(500).send({ response: "Erro ao tentar deletar peça"} )
                }
                else {
                    return res.status(200).send({ response: "Peça deletada com sucesso"} )
                }
            }
        )
    }
    catch {
        return res.status(500).send({ response: "Erro ao acessar banco de dados"} )
    }
}
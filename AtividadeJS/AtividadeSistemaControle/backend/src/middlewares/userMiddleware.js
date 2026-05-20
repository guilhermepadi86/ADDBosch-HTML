import { response } from "express"
import { connection } from "../database/db.js"

export const validatePeca = (req, res, next) => {
    const { nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque} = req.body

    if (!nome_peca || nome_peca.length < 3 || nome_peca.trim() == "" || 
        !codigo_peca || codigo_peca.trim() == "" ||
        fornecedor.trim() == "" || !fornecedor ||
        quantidade < 0 || preco_unitario < 0 || estoque < 0
    ) {
        return res.status(400).send({ response: "Revise os dados digitados" })
    }

    if (quantidade != estoque) {
        return res.status(400).send({ response: "O estoque deve ter o valor igual a quantidade inicial cadastrada"} )
    }

    const {verificiarNome} = connection.query('SELECT * FROM inventario WHERE nome_peca=? and fornecedor=?', [nome_peca, fornecedor])
    const {verificarCodigo} = connection.query('SELECT * FROM inventario WHERE codigo_peca=?', [codigo_peca])

    if (!verificiarNome){
        return res.status(400).json({message: "Já existe uma peça com este nome deste fornecedor"})
    }
    if (!verificarCodigo) {
        return res.status(400).json({message: "Já existe uma peça com este nome deste fornecedor"})
    }
        

    next();
}
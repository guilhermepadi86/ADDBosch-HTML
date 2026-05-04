import express, { response, Router } from 'express'

const router = express.Router();
const users = ["Diego", "Erich", "Leticia", "Luan"]

router  
    .get('/users', (req, res) => {
        res.send(users)
    })
    .post('/users', (req, res) => {
        const { nome, sobrenome } = req.body
        try{
            users.push({nome, sobrenome})
        return res.status(200).send({response: `Usuário ${nome} ${sobrenome} registrado com sucesso!`})
        }
        catch {
            return res.status(500).send({response: "Ocorreu um erro"})
        }
        
    })

export default router
import { connection } from "../database/db.js"

export const getPeople = (req, res) => {
    const users = connection.query('SELECT * FROM user', (err, results) => {
        if (err) {
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        else {
            return res.status(200).send(results)
        }
    })
}

export const createUser = (req, res) => {
    const { name, email, password } =  req.body

    try {
        connection.query('INSERT INTO user(name, email, password) VALUES (?,?,?)', 
            [name, email, password],
            (err, results) => {
                if (err) {
                    return res.status(500).send({ response: "Ocorreu algum erro durante a inserção"})
                }
            }
        )
        return res.status(201).send({ response: "Usuario Registrado com Sucesso"})
    } 
    catch {
        return res.status(500).send({ response: "Ocorreu um erro"})
    }
}

export const updateUser = (req, res) => {
    const { name, email, password} = req.body
    const { id } = req.params
    try {
        connection.query('UPDATE user SET name=?, email=?, password=? WHERE id = ?',
            [name, email, password, id],
            (err, results) => {
                if (err) {
                    return res.status(500).send({ response: "Ocorreu algum erro durante a inserção"})
                }
            }
        )
        return res.status(200).send({ response: "Usuario Atualizado com Sucesso"})
    }
    catch {
        return res.status(500).send({ response: "Ocorreu um erro"})
    }
}

export const deleteUser = (req, res) => {
    const { id } = req.params

    try {
        connection.query('DELETE FROM user WHERE id = ?',
            [id],
            (err, results) => {
                if (err) {
                    return res.status(500).send({ response: "Ocorreu algum erro durante a exclusão"})
                }
            }
        )
        return res.status(200).send({ response: "Usuario Deletado com Sucesso"})
    }
    catch {
        return res.status(500).send({ response: "Ocorreu um erro"})
    }
}

export const getUser = (req, res) => {
    const { id } = req.params
    const user = connection.query('SELECT * FROM user WHERE id = ?', [id],(err, results) => {
        if (err) {
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        else {
            return res.status(200).send(results)
        }
    })
}
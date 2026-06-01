import { connection } from "../database/db.js"

export const validateFunc = (req, res, next) => {
    const { nome, sobrenome, setor, funcao } = req.body

    if (!nome || nome.trim() == "" || nome.length < 3 ||
        !sobrenome || sobrenome.trim() == "" || sobrenome.length < 3 ||
        !setor || setor.trim() == "" || setor.length < 3 ||
        !funcao || funcao.trim() == "" || funcao.length < 3) {
            return res.status(400).send({ response: "Dados digitados de forma inválida, favor verificar antes de tentar novamente!"})
        }

    next();
}
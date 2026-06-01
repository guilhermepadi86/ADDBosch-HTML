import express, { Router } from 'express'
import { allFunc, attFunc, cadastroFunc, deleteFunc, getFunc } from '../controllers/funcController.js';
import { validateFunc } from '../middlewares/funcMiddleware.js';
const router = express.Router();

router  
    .get('/funcionarios', allFunc)
    .post('/cadastro',validateFunc ,cadastroFunc)
    .get('/funcionarios/:setor', getFunc)
    .delete('/deletar/:id', deleteFunc)
    .put('/atualizar/:id', attFunc)

export default router
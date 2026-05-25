import express, { Router } from 'express'
import { criarPeca, allPecas, getPeca, atualizarPeca, deletarPeca } from '../controllers/UserController.js';
import { validateGetPeca, validatePeca, validateUpdatePeca } from '../middlewares/userMiddleware.js';
const router = express.Router();

router  
    .get('/pecas', allPecas)
    .get('/peca/:id',validateGetPeca , getPeca)
    .post('/create', validatePeca, criarPeca)
    .put('/update/:id',validateUpdatePeca , atualizarPeca)
    .delete('/delete/:id',validateGetPeca , deletarPeca)

export default router
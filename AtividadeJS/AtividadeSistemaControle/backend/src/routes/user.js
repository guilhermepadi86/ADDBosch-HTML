import express, { Router } from 'express'
import { criarPeca, allPecas, getPeca, atualizarPeca, deletarPeca } from '../controllers/UserController.js';

const router = express.Router();

router  
    .get('/pecas', allPecas)
    .get('/peca/:id', getPeca)
    .post('/create', criarPeca)
    .put('/update/:id', atualizarPeca)
    .delete('/delete/:id', deletarPeca)

export default router
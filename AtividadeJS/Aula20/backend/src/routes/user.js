import express, { Router } from 'express'
import { getPeople, createUser, updateUser, getUser, deleteUser } from '../controllers/UserController.js'

const router = express.Router();

router  
    .get('/users', getPeople)
    .post('/register', createUser)
    .put('/update/:id', updateUser)
    .get('/user/:id', getUser)
    .delete('/delete/:id', deleteUser)

export default router
import express, { Router } from 'express'
import { allObjects, changeStatus, createObject, getData, getDescription, getLocal } from '../controllers/SchoolController.js'
import { validateObject, validateStatus } from '../middlewares/schoolMiddleware.js'

const router = express.Router()

router
    .get('/objects', allObjects)
    .post('/createObjetc',validateObject ,createObject)
    .get('/objectDescription/:id', getDescription)
    .get('/objectLocal/:id', getLocal)
    .get('/objectData/:id', getData)
    .put('/objectStatusChange/:id',validateStatus ,changeStatus)

export default router
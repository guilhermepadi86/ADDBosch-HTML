import express, { Router } from 'express'
import { allObjects, createObject } from '../controllers/SchoolController.js'
import { validateObject } from '../middlewares/schoolMiddleware.js'

const router = express.Router()

router
    .get('/objects', allObjects)
    .get('/createObjetc',validateObject ,createObject)

export default router
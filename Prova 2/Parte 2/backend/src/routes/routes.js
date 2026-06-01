import express from 'express'
import user from './func.js'

export default function(app){
    app
    .use(express.json())
    .use('/funcionarios', user)
}
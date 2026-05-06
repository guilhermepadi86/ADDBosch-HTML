import express from 'express'
import user from './pedidos.js'

export default function(app){
    app
    .use(express.json())
    .use('/pedidos', user)
}
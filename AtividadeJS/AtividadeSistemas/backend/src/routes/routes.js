import express from 'express'
import school from './school.js'

export default function(app) {
    app
    .use(express.json())
    .use('/school', school)
}
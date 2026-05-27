import express from 'express'
import cors from 'cors'
import initRoutes from './src/routes/routes.js'

const app = express()

const port = 8080

app.use(cors({
    origin: '*'
}))

initRoutes(app)

app.get('/', (req, res) => {
    return res.send("A api esta funcionando!")
})

app.listen(port, () => {
    console.log("O servidor esta rodando em http://localhost:8080")
})
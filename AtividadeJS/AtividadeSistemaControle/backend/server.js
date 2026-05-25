import express from 'express'
import initRoutes from './src/routes/routes.js'
import cors from 'cors'

const app = express();

const port = 8080;

app.use(cors({
    origin: '*'
}))

initRoutes(app)

app.get('/', (req, res) => {
    return res.send("A api esta rodando")
})

app.listen(port, () => {
    console.log("O servidor esta rodando em http://localhost:8080")
})

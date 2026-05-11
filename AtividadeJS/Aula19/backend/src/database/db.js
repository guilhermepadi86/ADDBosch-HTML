import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

console.log("teste", process.env.PORT)

export const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
})
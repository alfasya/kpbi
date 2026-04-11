import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import { kamusRouter } from "./routes/kamus.router.js"
import { startDb } from './db/config.db.js'

const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/kamus', kamusRouter)

async function startServer() {
    try {
        await startDb();
        app.listen(PORT, 'localhost', () => {
            console.log(`Server is running at port ${PORT}...`)
        })
    } catch(err) {
        console.log(err)
    }
}

startServer()
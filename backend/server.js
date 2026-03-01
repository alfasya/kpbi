import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import { kamusRouter } from './routes/kamus.router.js';
import { registerRouter } from './routes/register.router.js';
import { loginRouter } from './routes/login.router.js';
import { startDb } from './db/query.db.js';

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/kamus', kamusRouter);
app.use('/api/v1/register', registerRouter);
app.use('/api/v1/login', loginRouter);

async function startServer() {
    await startDb();
    app.listen(PORT, 'localhost', () => {
        console.log(`Server is listening at port ${PORT}...`);
    });
}

startServer();
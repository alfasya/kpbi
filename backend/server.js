import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, 'localhost', () => {
    console.log(`Server is listening at port ${PORT}...`);
});
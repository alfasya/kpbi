import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DB_URL
});

async function startDb() {
    pool.query(`SELECT NOW()`, (err, res) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            console.log('Database connected successfully.', res.rows[0].now);
        }
    });
}

export { pool, startDb }
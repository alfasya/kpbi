import { Pool } from 'pg';

const pool = new Pool({
    connectionString: "postgresql://postgres:2121@localhost:5433/kpbi"
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
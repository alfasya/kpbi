import { pool } from './config.db.js';

async function startDb() {
    pool.query(`SELECT NOW()`, (err, res) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            console.log('Database connected successfully.', res.rows[0].now);
        }
    });
}

async function queryKBBI(kata) {
    try {
        const result = await pool.query(
            `SELECT key, kelas, submakna FROM kbbi WHERE key = $1`, [kata]
        );

        return result.rows;
    } catch(err) {
        console.error(err);
    }
}

export { queryKBBI, startDb }
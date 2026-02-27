import { pool } from '../db.config.js';

async function queryKBBI(kata) {
    try {
        const result = await pool.query(
            `SELECT (key, kelas, submakna) FROM kbbi WHERE key = $1`, [kata]
        );

        return result.rows;
    } catch(err) {
        console.error(err);
    }
}

export { queryKBBI }
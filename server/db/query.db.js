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

async function registerQuery(username) {
    try {
        const result = await pool.query(
            `SELECT username FROM users WHERE username = $1`, [username]
        );

        return result.rows[0];
    } catch(err) {
        console.error(err);
    }
}

async function registerSave(username, hashed_password) {
    try {
        await pool.query(
            `INSERT INTO users (username, hashed_password, created_at) VALUES ($1, $2, NOW())`, [username, hashed_password]
        );

    } catch(err) {
        console.error(err);
    } 
}

async function loginQuery(username) {
    try {
        const result = await pool.query(
            `SELECT username, hashed_password FROM users WHERE username = $1`, [username]
        );

        return result.rows;
    } catch(err) {
        console.error(err);
    }
}

export { queryKBBI, registerQuery, registerSave, loginQuery, startDb }
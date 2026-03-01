import bcrypt from 'bcrypt';
import { registerQuery, registerSave } from '../db/query.db.js';

async function registerHandler(req, res) {
    const { username, password } = req.body;

    //validating username
    if (username.length > 20 || username.length < 3) {
        return res.status(400).json({
            message: `Username's length must be between 3 and 20 character.`
        });
    }

    try {
        const result = await registerQuery(username);

        if (result) {
            return res.status(400).json({
                message: 'Username already exists.'
            });
        }

        const hashed_password = await bcrypt.hash(password, 10);

        await registerSave(username, hashed_password);

        res.status(201).json({
            message: `User ${username} registered successfully.`
        });

    } catch(err) {
        console.error('Internal server error', err);
        res.status(500).json({
            error: 'Internal server error.'
        });
    }
}

export { registerHandler }
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { loginQuery } from '../db/query.db.js';

async function loginHandler(req, res) {
    const { username, password } = req.body;

    if (username.length == 0 || username.length < 3 || username.length > 20) {
        return res.status(400).json({
            message: 'Wrong username/password.'
        });
    }

    try {
        const verifyUser = await loginQuery(username);

        if (verifyUser.length == 0) {
            return res.status(400).json({
                message: 'Wrong username/password.'
            });
        }

        const comparePassword = await bcrypt.compare(password, verifyUser[0].hashed_password);

        if (!comparePassword) {
            return res.status(400).json({
                message: 'Worng username/password.'
            });
        }

        const token = jwt.sign({ username: username }, 'process.env.JWT_PRIVATE_KEY', { expiresIn: '1h' });

        res.status(200).json({
            message: `${username} logged successfully.`,
            token: token
        });

    } catch(err) {
        console.error('Internal server error', err);
        res.status(500).json({
            error: 'Internal server error.'
        });
    }
}

export { loginHandler }
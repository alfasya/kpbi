import bcrypt from "bcrypt";
import { User } from "../models/user.js";

async function register(req, res) {
    const { username, password } = req.body;
    try {
        const isExist = await User.findAll({
            where: {
                username: username,
            }
        });

        if (isExist) {
            return  res.status(409).json({
                message: "Username already exists.",
            });
        }

        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({
            username: username,
            hashed_password: hash
        })
        console.log(user.username);
        console.log(user.hashed_password);
        res.status(200).json({
            message: "User registered successfully.",
            details: {
                id: user.id,
                username: user.username,
            }
        });
    } catch(err) {
        res.status(500).json({
            error: {
                message: "Internal server error.",
                details: err,
            }
        });
    }
}

export { register }
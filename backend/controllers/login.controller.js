import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function login(req, res) {
    const { username, password } = req.body;

    const user = await User.findAll({
        where: {
            username: username,
        }
    });

    if (user.length === 0) {
        return res.status(401).json({
            status: "Unauthorized",
            message: "Wrong username or password.",
        });
    }

    try {
        const userPassword = await User.findAll({
            attributes: ["hashed_password"],
            where: {
                username: username
            }
        });

        const hashedPassword = (userPassword[0].dataValues.hashed_password);

        const verifyPassword = await bcrypt.compare(password, hashedPassword);

        if (!verifyPassword) {
            return res.status(400).json({
                status: "Unauthorized",
                message: "Wrong username or password.",
            });   
        }

        res.status(200).json({
            message: "User logged in.",
            token: "",
        })
    } catch(err) {
        res.json(500).status({
            error: {
                message: "Internal server error.",
                details: err,
            }
        });
    }
}

export { login }
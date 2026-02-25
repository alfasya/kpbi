import jwt from "jsonwebtoken";
import "dotenv/config";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

async function auth() {
    const verify = jwt.verify(token, JWT_SECRET_KEY);
    console.log(verify);
}

export { auth }
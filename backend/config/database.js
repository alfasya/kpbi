import { Sequelize } from "sequelize";

import "dotenv/config";

const DATABASE_URI = process.env.DATABASE_URI;

const sequelize = new Sequelize(
    DATABASE_URI, {
        logging: console.log,
    }
);

async function connectDb() {
    try {
        await sequelize.authenticate();
        console.log("Databse has been etablished successfully.");
    } catch(err) {
        console.log("Internal server error.", err);
    }
}

export { connectDb, sequelize }
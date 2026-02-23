import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const User = sequelize.define(
    "User",
    {
        username: {
            type: DataTypes.STRING,
        },
        hashed_password: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: "users"
    }
);

async function syncUser() {
    try {
        await User.sync();
        console.log("User synchronized successfully.");
    } catch(err) {
        console.log("Internal server error.");
    }
}

export { syncUser, User }
import express from "express";
import cors from "cors";

import { kamusRouter } from "./routes/kamus.router.js";
import { userRouter } from "./routes/user.router.js";
import { connectDb } from "./config/database.js";
import { syncKamus } from "./models/kamus.js";
import { syncUser } from "./models/user.js";

const PORT = 3000;

const app = express();

app.use(cors({
    origin: [],
}));

app.use(express.json());

app.use("/kamus", kamusRouter);
app.use("/profile", userRouter);

async function startServer() {
    await connectDb();
    await syncKamus();
    await syncUser();
    app.listen(PORT, "localhost", ()=>{
        console.log(`Server is listening at port ${PORT}...`);
    });
}

startServer();
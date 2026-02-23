import express from "express";
import cors from "cors";

import { kamusRouter } from "./routes/kamus.router.js";
//import { userRouter } from "./routes/user.router.js";
import { connectDb } from "./config/database.js";
import { syncModel } from "./models/kamus.js";

const PORT = 3000;

const app = express();

app.use(cors({
    origin: [],
}));

app.use(express.json());

app.use("/kamus", kamusRouter);
//app.use("profile", userRouter);

async function startServer() {
    await connectDb();
    await syncModel();
    app.listen(PORT, "localhost", ()=>{
        console.log(`Server is listening at port ${PORT}...`);
    });
}

startServer();
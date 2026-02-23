import { Router } from "express";

import { login } from "../controllers/login.controller.js";
import { register } from "../controllers/register.controller.js";

const userRouter = Router();

//userRouter.get("/", user);
userRouter.post("/login", login);
userRouter.post("/register", register);

export { userRouter }
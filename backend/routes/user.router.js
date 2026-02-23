import { Router } from "express";

const userRouter = Router();

userRouter.get("/", user);
userRouter.post("/login", login);
userRouter.post("/register", register);

export { userRouter }
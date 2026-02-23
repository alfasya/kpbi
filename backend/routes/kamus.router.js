import { Router } from "express";

import { getKata } from "../controllers/getkata.controller.js";

const kamusRouter = Router();

kamusRouter.post("/:kata", getKata);

export { kamusRouter }
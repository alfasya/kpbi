import { Router } from 'express';

import { kamusHandler, generateHandler } from '../controllers/kamus.controller.js';

const kamusRouter = Router();

kamusRouter.get('/:kata', kamusHandler);
kamusRouter.get('/generate/:kata', generateHandler)

export { kamusRouter }
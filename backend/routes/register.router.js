import { Router } from 'express';

import { registerHandler } from '../controllers/register.controller.js';

const registerRouter = Router();

registerRouter.post('/', registerHandler);

export { registerRouter }
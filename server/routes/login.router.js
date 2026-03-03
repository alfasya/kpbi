import { Router } from 'express';

import { loginHandler } from '../controllers/login.controller.js';

const loginRouter = Router();

loginRouter.post('/', loginHandler);

export { loginRouter }
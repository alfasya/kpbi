import { Router } from 'express';

import { cariKata } from '../controllers/kamus.controller.js';

const kamusRouter = Router();

kamusRouter.get('/:kata', cariKata);

export { kamusRouter }
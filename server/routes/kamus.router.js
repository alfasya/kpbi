import { Router } from 'express';

import { cariKata } from '../controllers/kamus.controller.js';

const kamusRouter = Router();

kamusRouter.get('/', (req, res)=> {
    res.status(200).json({ message: 'Hello' });
});

kamusRouter.get('/:kata', cariKata);

export { kamusRouter }
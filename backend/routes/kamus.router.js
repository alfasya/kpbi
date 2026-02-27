import { Router } from 'express';

const kamusRouter = Router();

kamusRouter.get('/:kata', kamusController);

export { kamusRouter }
import { Router } from 'express';

const profileRouter = Router();

profileRouter.get('/', (req, res)=> {
    res.status(200).json({
        message: 'Welcome to the profile page.'
    });
});

export { profileRouter }
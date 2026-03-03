import jwt from 'jsonwebtoken';

async function auth(req, res, next) {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(' ')[1];
    
    const verifyToken = jwt.verify(token, 'process.env.JWT_PRIVATE_KEY');
        
    if (!verifyToken) {
        return res.status(400).json({
            message: 'Access denied: Unauthorized.'
        });
    }

    req.user = verifyToken;

    console.log(verifyToken);
    console.log('Access permitted.');

    next();
}

export { auth }
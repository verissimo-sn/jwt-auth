import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.JWT_SECRET as string;

interface Decoded {
  id: string;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) return res.status(401).send({ error: 'Token not provided' });

  const [, token] = authHeader.split(' ');

  jwt.verify(token, SECRET, (err, decoded) => {
    if(err) return res.status(400).send({ error: 'Invalid token' });

    const userId = (decoded as Decoded).id;

    // (req as UserReq).userId = (decoded as Decoded).id;

    // res.send({ userId });


    return next();
  });
}

export default authMiddleware;
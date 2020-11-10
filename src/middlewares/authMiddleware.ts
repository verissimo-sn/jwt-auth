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

  if(!authHeader) return res.status(401).send({ error: 'No token provided' });

  const [, token] = authHeader.split(' ');

  jwt.verify(token, SECRET, (err, decoded) => {
    if(err) return res.status(400).send({ error: 'Invalid token' });

    res.send({
      userId: (decoded as Decoded).id
    });
  });
  
  //falta enviar o id do usuário para a rota autenticada 
  return next();
}

export default authMiddleware;
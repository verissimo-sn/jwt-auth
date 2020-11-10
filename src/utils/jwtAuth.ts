import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET as string;

interface Id {
  id: {};
}

const generateToken = (id: Id) => {
  return jwt.sign(id, SECRET, {
    expiresIn: 86400,
  });
}

export default generateToken;

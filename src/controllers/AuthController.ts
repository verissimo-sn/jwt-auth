import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import User from '../models/UserModel';

class AuthController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user) {
      return res.status(400).send({ error: 'User not found' });
    }

    const chackedPassword = await bcrypt.compare(password, user.password);

    if(!chackedPassword) {
      return res.status(400).send({ error: 'Invalid password' });
    }

    user.password = '';

    return res.status(200).send({ user })
  }
}

export default new AuthController;
import { Request, Response} from 'express';
import UserModel from '../models/UserModel';

class UserController {
  async create(req: Request, res: Response) {
    const { email } = req.body;

    try {
      if( await UserModel.findOne({ email })) {
        return res.status(400).json({ error: 'user already exists' });
      }

      const user = await UserModel.create(req.body);

      user.password = undefined;

      return res.send({ user });

    } catch(err) {
      return res.status(400).send({ error: 'Registration Faled' });
    }
  }
}

export default new UserController;
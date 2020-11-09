import { Request, Response} from 'express';
import UserModel from '../models/UserModel';

class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await UserModel.create(req.body);

      return res.send({ user });

    } catch(err) {
      return res.status(400).send({ error: 'Registration Faled' });
    }
  }
}

export default new UserController;
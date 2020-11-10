import { Request, Response } from 'express';

class ProjectController {
  index(req: Request, res: Response) {
    return res.send({ message: 'Authenticated' });
  }
}

export default new ProjectController;
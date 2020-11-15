import { Request, Response } from 'express';

class ProjectController {
  index(req: Request, res: Response) {
    // const user = userId;

    res.send({ message: 'Authenticated' });

  }
}

export default new ProjectController;
import { Router } from 'express';

import authMiddleware from './middlewares/authMiddleware';

import UserController from './controllers/UserController';
import ProjectController from './controllers/ProjectController';
import AuthController from './controllers/AuthController';

const route = Router();

route.get('/', (req, res)=> {
  return res.json({ message: "start a auth project" })
});

route.post('/register', UserController.create);
route.post('/authenticate', AuthController.create);

route.get('/projects', authMiddleware, ProjectController.index);

export default route;
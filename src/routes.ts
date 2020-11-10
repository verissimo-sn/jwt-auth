import { Router } from 'express';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const route = Router();

route.get('/', (req, res)=> {
  return res.json({ message: "start a auth project" })
});

route.post('/register', UserController.create);
route.post('/authenticate', AuthController.create);

export default route;
import { Router } from 'express';

import UserController from './controllers/UserController';

const route = Router();

route.get('/', (req, res)=> {
  return res.json({ message: "start a auth project" })
});

route.post('/register', UserController.create);

export default route;
import { Router } from 'express';

const route = Router();

route.get('/', (req, res)=> {
  return res.json({ message: "start a auth project" })
})

export default route;
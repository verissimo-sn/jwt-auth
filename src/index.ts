import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res)=> {
  return res.json({ message: "start a auth project" })
})

app.listen(3333, ()=> {
  console.log("✅ Server running! port: 3333");
})
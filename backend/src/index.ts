import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

const PORT = 3333;

app.get('/user', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World' })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${ PORT }`)
});
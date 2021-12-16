import express, { Request, Response } from 'express';

import router from './routes';

const app = express();

const PORT = 3333;

app.use(router)

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON ${ PORT }`)
});
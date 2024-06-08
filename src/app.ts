import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.status(200).json({ success: true, result: a });
};

app.get('/', getAController);

export default app;

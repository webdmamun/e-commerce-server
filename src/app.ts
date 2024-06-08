import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './modules/student/student.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.status(200).json({ success: true, result: a });
};

app.get('/', getAController);

export default app;
import express, { Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlwares/globalErrorHandler';
import { ProductRouter } from './modules/products/product.routes';
import { OrderRouter } from './modules/orders/order.routes';

const app = express();
// json parser
app.use(express.json());
app.use(cors());

app.use(express());
app.use('/api/products', ProductRouter);
app.use('/api/orders', OrderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Wow! The server is running');
});

app.all('/*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.use(globalErrorHandler);

export default app;

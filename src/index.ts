import express, { Request, Response } from 'express';
import router from './routes/routes';

const app = express();
const PORT = 3000;

app.use('/api', router);

app.get(
  '/',
  (req: Request, res: Response): Response =>
    res.send(
      'Usage: /api/image?filename={imageName}&width={widthInPixels}&height={heightInPixels}'
    )
);

app.listen(PORT, () =>
  console.log(`server running on: http://localhost:${PORT}`)
);

export default app;

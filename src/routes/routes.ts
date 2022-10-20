import express, { Request, Response } from 'express';
import image from './api/image';

const router = express.Router();

router.get(
  '/',
  (req: Request, res: Response): Response => res.send('Main api route')
);

router.use('/image', image);

export default router;

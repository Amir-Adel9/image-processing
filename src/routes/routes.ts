import express from 'express';
import image from './api/image';

const router = express.Router();

router.get('/', (req, res) => res.send('Main api route'));

router.use('/image', image);

export default router;

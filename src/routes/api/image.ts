import express, { Request, Response } from 'express';
import resize from '../../imageActions';
import imagesDir from '../../globals';

const image = express.Router();

image.get('/', async (req: Request, res: Response): Promise<void> => {
  const { filename, width, height } = req.query;
  if (filename && width && height) {
    await resize(String(filename), Number(width), Number(height)).catch(
      (error) => res.status(404).send(error.message)
    );
    res.sendFile(
      `${imagesDir}/edited/${filename + ' w-' + width + ' h-' + height}.jpg`
    );
  } else res.sendFile(imagesDir + '/fjords.jpg');
});

export default image;

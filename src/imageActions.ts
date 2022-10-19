import sharp from 'sharp';
import imagesDir from './globals';

export default async function resize(
  filename: string,
  width: number,
  height: number
): Promise<void> {
  await sharp(imagesDir + `/${filename}.jpg`)
    .resize(Number(width), Number(height))
    .toFile(
      `${imagesDir}/edited/${filename + ' w-' + width + ' h-' + height}.jpg`
    );
}

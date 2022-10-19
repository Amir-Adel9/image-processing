import supertest from 'supertest';
import app from '../index';

import resize from '../imageActions';

const request = supertest(app);

describe('Endpoint tests', () => {
  it('responses with status 200 [GET] Main route', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('responses with status 200 [GET] API route', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('responses with status 200 [GET] Image route', async () => {
    const response = await request.get('/api/image');
    expect(response.status).toBe(200);
  });

  it('responses with status 200 [GET] Image route (resized)', async () => {
    const response = await request.get(
      '/api/image?filename=fjords&width=720&height=600'
    );
    expect(response.status).toBe(200);
  });

  it('responds with 404 for invalid url', async () => {
    const response = await request.get('/invalid');
    expect(response.status).toBe(404);
  });

  it('responds with 404 for invalid image', async () => {
    const response = await request.get(
      '/api/image?filename=invalid&width=720&height=600'
    );
    expect(response.status).toBe(404);
  });
});

describe('Image processing tests', () => {
  it('Successfully resized the given image', async () => {
    const image = resize('assets/images/santamonica', 720, 480);
    expect(image).toBeTruthy;
  });
  it('Throws an error for invalid image', async () => {
    const image = resize('assets/images/invalid', 720, 480);
    expect(image).toThrowError;
  });
});

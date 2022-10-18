import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('sends GET request to /', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('responds with 404 for invalid url', async () => {
    const response = await request.get('/invalid');
    expect(response.status).toBe(404);
  });
});

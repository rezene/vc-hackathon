const request = require('supertest');
const app = require('../../src/app'); 
describe('Server', () => {


  it('should respond with Hello World on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
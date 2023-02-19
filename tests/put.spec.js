const request = require('supertest');
const config = require('../supertest.config')

describe('test Method PUT', () => {
    
    it('responds with json', async () => {
      const res = await request(config.baseUrl)
        .put('/api/users/2')
        .send({ name: "Test", job: "Test Job" })
        .expect(200)
        .expect('Content-Type', /json/)
        expect(res.body).toHaveProperty('updatedAt')
    });
  });
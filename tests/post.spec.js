const request = require('supertest');
const config = require('../supertest.config')

describe('POST /api/post', () => {
    it('responds with json', async () => {
      const res = await request(config.baseUrl)
        .post('/api/users')
        .send({ email: "eve.holt@reqres.in", password: "cityslicka" })
        .expect(201)
        .expect('Content-Type', /json/)
        const response = res.body
        expect(response).toHaveProperty('email','eve.holt@reqres.in')
        expect(response).toHaveProperty('password','cityslicka')
        expect(response).toHaveProperty('id')
        expect(response).toHaveProperty('createdAt')
    });
  });
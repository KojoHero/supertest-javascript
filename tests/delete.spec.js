const request = require('supertest');
const config = require('../supertest.config')


describe('test Method DELETE', () => {
    
    it('api delete request', async () => {
      const res = await request(config.baseUrl)
        .delete('/api/users/2')
        .expect(204)
    });
  });
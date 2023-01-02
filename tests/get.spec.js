const request = require('supertest');
const baseUrl = require('../supertest.config')

describe('API test - get method', ()=>{
    it('should get',async()=>{
        await request(baseUrl)
        .get('/api/breeds/image/random')
  });
})

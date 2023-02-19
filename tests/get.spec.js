const request = require('supertest');
const config = require('../supertest.config')

describe('API test - get method', ()=>{
    it('should get',async()=>{
        const res = await request(config.baseUrl)
        .get('/api/users/2')
        const response = res.body.data
        expect(response).toHaveProperty('email','janet.weaver@reqres.in')
        expect(response).toHaveProperty('first_name','Janet')
        expect(response).toHaveProperty('id',2)
        expect(response).toHaveProperty('last_name','Weaver')
        expect(response).toHaveProperty('avatar','https://reqres.in/img/faces/2-image.jpg')
  });
})

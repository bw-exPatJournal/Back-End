const request = require('supertest');

const server = require('../api/server');



const user = {
    name: "name3",
    email: "email@blah.com",
    username: "username3",
    password: "test3",
    bio: "I am a human person"
}

describe('POST /', function (){
    it('it should register a new user', function () {
        return request(server).post('/api/auth/register').send(user)
        .then(res => {
            expect(res.status).toBe(201);
    })
})

});
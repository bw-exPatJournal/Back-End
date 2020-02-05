const request = require('supertest');

const server = require('../api/server');



const user = {
    name: "name2",
    email: "email@blah.com",
    username: "username2",
    password: "test2",
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
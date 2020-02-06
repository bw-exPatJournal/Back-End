const request = require('supertest');

const server = require('./server.js');


describe('server', function() {
    it('runs the test', function() {
        expect(true).toBe(true);
    })
})

describe('GET /', function() {
    it('should return 200 OK', function() {
        //make GET request to /
        return request(server).get('/').then(res => {
            expect(res.status).toBe(200);
        })
    })
})

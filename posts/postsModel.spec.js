const request = require('supertest');

const server =require('../api/server');


describe('GET /', function() {
    it('should return all posts', function() {
        return request(server).get('/api/posts')
        .then(res => {
            expect(res.status).toBe(201)
        })
    })
})


const post = {
    title: "picture of thing2",
    photo: "https://source.unsplash.com/random",
    story: "this is a story",
    details: "here are some details",
    traveler_id: 1
}

describe('Post /', function() {
    it('should add a new post', function() {
        return request(server).post('/api/posts').send(post)
        .then(res => {
            expect(res.status).toBe(200)
        })
    })
})
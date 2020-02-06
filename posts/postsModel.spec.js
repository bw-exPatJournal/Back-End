const request = require("supertest");

const server = require("../api/server");

describe("GET /", function() {
  it("should return all posts", function() {
    return request(server)
      .get("/api/posts")
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
});

const post = {
  title: "picture of thing2",
  photo: "https://source.unsplash.com/random",
  story: "this is a story",
  details: "here are some details",
  traveler_id: 1
};

describe("Post /", function() {
  it("should add a new post", function() {
    return request(server)
      .post("/api/posts")
      .send(post)
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("DELETE /:id", function() {
  it("should delete post", function() {
    return request(server)
      .delete("/api/posts/2")
      .send(post)
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("DELETE /:id", function() {
  it("Should return 404 while attempting to delete a nonexsistent post", function() {
    return request(server)
      .delete("/api/posts/1")
      .send(post)
      .then(res => {
        expect(res.status).toBe(404);
      });
  });
});

describe("PUT /:id", function() {
  it("should update post", function() {
    return request(server)
      .put("/api/posts/11")
      .send(post)
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("PUT /:id", function() {
  it("should fail to update post and return 200", function() {
    return request(server)
      .put("/api/posts/100")
      .send(post)
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

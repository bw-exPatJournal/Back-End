const request = require("supertest");

const server = require("../api/server");

const newUser = {
  name: "name1",
  email: "email@blah.com",
  username: "username9",
  password: "test1",
  bio: "I am a human person"
};

const user = {
  name: "name1",
  email: "email@blah.com",
  username: "username4",
  password: "test1",
  bio: "I am a human person"
};

describe("POST /", function() {
  it("it should register a new user", function() {
    return request(server)
      .post("/api/auth/register")
      .send(newUser)
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
});

describe("POST /", function() {
  it("it display correct error code (500)", function() {
    return request(server)
      .post("/api/auth/register")
      .send(user)
      .then(res => {
        expect(res.status).toBe(500);
      });
  });
});

const loginUser = {
  username: "username2",
  password: "test1"
};

describe("POST /", function() {
  it("should login registered user", function() {
    return request(server)
      .post("/api/auth/login")
      .send(loginUser)
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

const loginFakeUser = {
  username: "username40",
  password: "test1"
};

describe("POST /", function() {
  it("should reject unregistered user", function() {
    return request(server)
      .post("/api/auth/login")
      .send(loginFakeUser)
      .then(res => {
        expect(res.status).toBe(401);
      });
  });
});

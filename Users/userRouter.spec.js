const request = require("supertest");

const server = require("../api/server");

const newGetUser = {
  name: "name1",
  email: "email@blah.com",
  username: Date.now(),
  password: "test1",
  bio: "I am a human person"
};

const loginGetUser = {
  username: "user4",
  password: "test1"
};

describe("GET /", () => {
  it("should return all users", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send(newGetUser);
    await request(server)
      .post("/api/auth/login")
      .send(loginGetUser);
    await request(server).get("/api/users/");
    expect(res.status).toBe(201);
  });
});

const newGetSingleUser = {
  name: "name1",
  email: "email@blah.com",
  username: Date.now(),
  password: "test1",
  bio: "I am a human person"
};

const loginGetSingleUser = {
  username: "user100",
  password: "test1"
};

describe("GET /", () => {
  it("should return a select user", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send(newGetSingleUser);
    await request(server)
      .post("/api/auth/login")
      .send(loginGetSingleUser);
    await request(server).get("/api/users/1");
    expect(res.status).toBe(201);
  });
});

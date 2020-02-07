const request = require("supertest");

const server = require("../api/server");

const db = require("../data/dbConfig");

const newUser = {
  name: "name1",
  email: "email@blah.com",
  username: Date.now(),
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

// beforeEach(() => {
//   return db.migrate
//     .rollback()
//     .then(() => db.migrate.latest())
//     .then(() => db.seed.run());
// });

describe("POST /", () => {
  it("it should register a new user", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send(newUser);
    expect(res.status).toBe(201);
  });
});

describe("POST /", () => {
  it("it display correct error code (500)", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send(user);
    expect(res.status).toBe(500);
  });
});

const loginUser = {
  username: "username89",
  password: "test1"
};

describe("POST /", () => {
  it("should login registered user", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send(loginUser);
    expect(res.status).toBe(200);
  });
});

const loginFakeUser = {
  username: "username40",
  password: "test1"
};

describe("POST /", () => {
  it("should reject unregistered user", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send(loginFakeUser);
    expect(res.status).toBe(401);
  });
});

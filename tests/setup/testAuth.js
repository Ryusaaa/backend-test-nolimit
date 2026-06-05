const request = require("supertest");
const app = require("../../src/app");

const createTestUserAndLogin = async () => {

  const email =
    `test${Date.now()}@mail.com`;

  const password = "123456";

  await request(app)
    .post("/api/auth/register")
    .send({
      name: "Test User",
      email,
      password
    });

  const loginResponse =
    await request(app)
      .post("/api/auth/login")
      .send({
        email,
        password
      });

  return {
    token: loginResponse.body.token
  };

};

module.exports = {
  createTestUserAndLogin
};
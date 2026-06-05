const request = require("supertest");
const app = require("../../src/app");

describe("Login User", () => {

  it("should login successfully", async () => {

    const email =
      `login${Date.now()}@mail.com`;

    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Tester",
        email,
        password: "123456"
      });

    const response =
      await request(app)
        .post("/api/auth/login")
        .send({
          email,
          password: "123456"
        });

    expect(response.statusCode)
      .toBe(200);

    expect(response.body.token)
      .toBeDefined();

  });

});
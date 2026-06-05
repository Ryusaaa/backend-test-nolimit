const request = require("supertest");
const app = require("../../src/app");

describe("Register User", () => {

  it("should register a new user", async () => {

    const response =
      await request(app)
        .post("/api/auth/register")
        .send({
          name: "Satria",
          email: `register${Date.now()}@mail.com`,
          password: "123456"
        });

    expect(response.statusCode)
      .toBe(201);

  });

});
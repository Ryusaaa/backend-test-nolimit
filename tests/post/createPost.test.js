const request = require("supertest");
const app = require("../../src/app");

const {
  createTestUserAndLogin
} = require("../setup/testAuth");

describe("Create Post", () => {

  it("should create a post", async () => {

    const { token } =
      await createTestUserAndLogin();

    const response =
      await request(app)
        .post("/api/posts")
        .set(
          "Authorization",
          `Bearer ${token}`
        )
        .send({
          content:
            "Hello NoLimit"
        });

    expect(response.statusCode)
      .toBe(201);

  });

});
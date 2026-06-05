const request = require("supertest");
const app = require("../../src/app");

describe("Get All Posts", () => {

  it("should return all posts", async () => {

    const response =
      await request(app)
        .get("/api/posts");

    expect(response.statusCode)
      .toBe(200);

  });

});
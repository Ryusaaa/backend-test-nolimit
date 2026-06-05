const request = require("supertest");
const app = require("../../src/app");

const {
  createTestUserAndLogin
} = require("../setup/testAuth");

describe("Get Post By Id", () => {

  it("should return post detail", async () => {

    const { token } =
      await createTestUserAndLogin();

    const createPost =
      await request(app)
        .post("/api/posts")
        .set(
          "Authorization",
          `Bearer ${token}`
        )
        .send({
          content:
            "Post Detail Test"
        });

    const postId =
      createPost.body.data.id;

    const response =
      await request(app)
        .get(`/api/posts/${postId}`);

    expect(response.statusCode)
      .toBe(200);

  });

});
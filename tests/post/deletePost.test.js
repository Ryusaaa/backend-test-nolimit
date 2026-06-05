const request = require("supertest");
const app = require("../../src/app");

const {
  createTestUserAndLogin
} = require("../setup/testAuth");

describe("Delete Post", () => {

  it("should delete post", async () => {

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
            "Delete Test"
        });

    const postId =
      createPost.body.data.id;

    const response =
      await request(app)
        .delete(`/api/posts/${postId}`)
        .set(
          "Authorization",
          `Bearer ${token}`
        );

    expect(response.statusCode)
      .toBe(200);

  });

});
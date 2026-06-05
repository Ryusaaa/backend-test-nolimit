const request = require("supertest");
const app = require("../../src/app");

const {
  createTestUserAndLogin
} = require("../setup/testAuth");

describe("Update Post", () => {

  it("should update post", async () => {

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
            "Before Update"
        });

    const postId =
      createPost.body.data.id;

    const response =
      await request(app)
        .put(`/api/posts/${postId}`)
        .set(
          "Authorization",
          `Bearer ${token}`
        )
        .send({
          content:
            "After Update"
        });

    expect(response.statusCode)
      .toBe(200);

  });

});
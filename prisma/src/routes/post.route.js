const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middlewares/auth.middleware");

const postController =
  require("../controllers/post/createPost.controller");
  require("../controllers/post/getAllPosts.controller");
  require("../controllers/post/updatePost.controller");
  require("../controllers/post/deletePost.controller");

router.get(
  "/",
  postController.getAllPosts
);

router.get(
  "/:id",
  postController.getPostById
);

router.post(
  "/",
  authMiddleware,
  postController.createPost
);

router.put(
  "/:id",
  authMiddleware,
  postController.updatePost
);

router.delete(
  "/:id",
  authMiddleware,
  postController.deletePost
);

module.exports = router;
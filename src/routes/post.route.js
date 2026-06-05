const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");

const {
  getAllPosts,
  getPostById,
} = require("../controllers/post/getPost.controller");

const { createPost } = require("../controllers/post/createPost.controller");

const { updatePost } = require("../controllers/post/updatePost.controller");

const { deletePost } = require("../controllers/post/deletePost.controller");

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.post("/", authMiddleware, createPost);

router.put("/:id", authMiddleware, updatePost);

router.delete("/:id", authMiddleware, deletePost);

module.exports = router;

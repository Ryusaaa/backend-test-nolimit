const prisma = require("../../config/prisma");

exports.createPost = async (req, res) => {

  try {

    const { content } = req.body;

    const post = await prisma.post.create({
      data: {
        content,
        authorId: req.user.id
      }
    });

    res.status(201).json({
      message: "Post created",
      data: post
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
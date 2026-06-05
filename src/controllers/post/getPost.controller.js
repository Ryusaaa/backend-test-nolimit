const prisma = require("../../config/prisma");

exports.getAllPosts = async (req, res) => {
  try {

    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    res.status(200).json({
      data: posts
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getPostById = async (req, res) => {
  try {

    const id = Number(req.params.id);

    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.json({
      data: post
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
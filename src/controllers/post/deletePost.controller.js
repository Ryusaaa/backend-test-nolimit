const prisma = require("../../config/prisma");

exports.deletePost = async (req, res) => {

  try {

    const id = Number(req.params.id);

    const post =
      await prisma.post.findUnique({
        where: { id }
      });

    if (!post) {

      return res.status(404).json({
        message: "Post not found"
      });

    }

    if (post.authorId !== req.user.id) {

      return res.status(403).json({
        message: "Forbidden"
      });

    }

    await prisma.post.delete({
      where: { id }
    });

    res.json({
      message: "Post deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
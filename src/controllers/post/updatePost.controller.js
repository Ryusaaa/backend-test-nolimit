const prisma = require("../../config/prisma");

exports.updatePost = async (req, res) => {

  try {

    const id = Number(req.params.id);

    const { content } = req.body;

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

    const updatedPost =
      await prisma.post.update({
        where: { id },
        data: {
          content
        }
      });

    res.json({
      message: "Post updated",
      data: updatedPost
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
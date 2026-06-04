const prisma =
  require("../config/prisma");

const bcrypt =
  require("bcryptjs");

const {
  generateToken
} = require("../utils/jwt");


exports.login = async (
  req,
  res
) => {

  try {

    const {
      email,
      password
    } = req.body;

    const user =
      await prisma.user.findUnique({
        where: {
          email
        }
      });

    if (!user) {

      return res.status(400).json({
        message:
          "Invalid credentials"
      });

    }

    const match =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!match) {

      return res.status(400).json({
        message:
          "Invalid credentials"
      });

    }

    const token =
      generateToken(user);

    res.json({
      token
    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message
    });

  }

};
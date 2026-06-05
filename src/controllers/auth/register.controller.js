const prisma = require("../../config/prisma");
const bcrypt =
  require("bcryptjs");

const {
  generateToken
} = require("../../utils/jwt");

exports.register = async (
  req,
  res
) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    const userExists =
      await prisma.user.findUnique({
        where: {
          email
        }
      });

    if (userExists) {

      return res.status(400).json({
        message: "Email already exists"
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
      await prisma.user.create({
        data: {
          name,
          email,
          password:
            hashedPassword
        }
      });

    res.status(201).json({
      message:
        "User registered successfully",
      data: user
    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message
    });

  }

};
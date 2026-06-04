const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userRepo = require("../repositories/user.repository");

exports.register = async (payload) => {

  const existingUser =
    await userRepo.findByEmail(payload.email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword =
    await bcrypt.hash(payload.password, 10);

  return userRepo.create({
    ...payload,
    password: hashedPassword
  });
};
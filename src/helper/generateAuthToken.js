const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
const { genSalt, hash } = require("bcryptjs");

config();  

const generateToken = (id, number) => {
  try {
    const token = jwt.sign(
        { id, number },
        process.env.JWT_PRIVATE_KEY,
        { expiresIn: '7d' },
      );
    
      return token;
  } catch (error) {
    return error;
  }
};

module.exports = generateToken;

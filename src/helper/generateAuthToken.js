const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
const { genSalt, hash } = require("bcryptjs");

config();  

const generateToken = (id, username) => {
  try {
    const token = jwt.sign(
        { id, username },
        process.env.JWT_PRIVATE_KEY,
        { expiresIn: '7d' },
      );
    
      return token;
  } catch (error) {
    return error;
  }
};

module.exports = generateToken;

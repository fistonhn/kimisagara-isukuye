const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Users = require("../database/models/Users");

const { onError } = require("../utils/response");

dotenv.config();
const verifyUserAuthToken = async (req, res, next) => {
  const authHeader = await req.headers.authorization;

  if (typeof authHeader === 'undefined') return res.status(401).json({ status: 401, error: 'Unauthorised - Header Not Set' });

  const token = authHeader;
  jwt.verify(token, process.env.JWT_PRIVATE_KEY, async (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ status: 401, error: 'Unauthorised Token or token not provided', err });
    }
    req.authUser = decodedToken;
    const authUser = decodedToken.number;

    const userExist = await Users.findOne({ number: authUser });
    if (!userExist) return onError(res, 401, "Ntago wiyandikishije!");

    next();
  });
};

module.exports = verifyUserAuthToken;
